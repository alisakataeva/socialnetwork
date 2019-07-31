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
import utils from '../utils'

export default {
  
  name: 'MyBlog',

  components: {
    Post
  },

  data () {
    return {
      loading: true,
      profile: {},
      posts: [],
      apiUrl: this.$store.state.apiUrl
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

      return utils.get( this.apiUrl + '/api/user_profiles/' + this.$route.params.user_id )
        .then(
          data => {
            this.profile = data;
          }
        ).catch(
          err => { console.log(err) }
        )

    },

    getPosts () {

      return utils.get( this.apiUrl + '/api/posts/?id=' + this.$route.params.user_id )
        .then(
          data => {
            this.posts = data.results;
          }
        ).catch(
          err => { console.log(err) }
        )

    }

  }

}
</script>
