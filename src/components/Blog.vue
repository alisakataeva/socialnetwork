<template>
  <div>

    <div v-if="loading">
      Loading...
    </div>

    <div v-else>

      <h6>Blog : {{ profile.user.last_name }} {{ profile.user.first_name }}</h6>

      <div class="box">

        <div class="box-item"
          v-for="post in posts" :key="post.id">
          <Post :data="post" />
        </div>

      </div>

    </div>

  </div>
</template>

<script>
import Post from './modules/Post';
export default {
  
  name: 'MyBlog',

  components: {
    Post
  },

  data () {
    return {
      loading: true,
      profile: {},
      posts: []
    }
  },

  created () {
    Promise.all([
      this.getUser(),
      this.getPosts()
    ]).then(
      response => {
        this.loading = false
      }
    )
  },

  methods: {

    getUser () {
      return fetch (
        'http://localhost:8000/api/user_profiles/' + this.$route.params.user_id,
        { method: 'GET', credentials: 'include' }
      ).then(
        response => response.json()
      ).then(
        data => {
          this.profile = data;
        }
      ).catch(err => { console.log(err) })
    },

    getPosts () {
      return fetch (
        'http://localhost:8000/api/posts/?id=' + this.$route.params.user_id,
        { method: 'GET', credentials: 'include' }
      ).then(
        response => response.json()
      ).then(
        data => {
          this.posts = data.results;
        }
      )
    }

  }

}
</script>
