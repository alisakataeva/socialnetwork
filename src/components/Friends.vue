<template>
  <div class="hello">

    <div v-if="loading">

      <h6>Friends : ...</h6>

      loading...

    </div>

    <div v-else>

      <h6>Friends : {{ profile.user.last_name }} {{ profile.user.first_name }}</h6>

      <div class="box">

        <div class="box-item"
          v-for="profile in users" :key="profile.user.username">
          <InlineProfile
            :firstname="profile.user.first_name"
            :lastname="profile.user.last_name"
            :username="profile.user.username"
            :thumbnail="profile.avatar"
            :biography="profile.biography"
            :id="profile.id" />
        </div>

      </div>

    </div>

  </div>
</template>

<script>
import InlineProfile from './users/Inline'

export default {

  name: 'Friends',

  components: {
    InlineProfile
  },

  props: {
    msg: String
  },

  data () {
    return {
      profile: {},
      users: [],
      loading: true,
    }
  },

  created () {
    Promise.all([
      this.getUser(),
      this.getFriends()
    ]).then(
      response => {
        this.loading = false;
      }
    )
  },

  methods: {

    start () {
      this.getCookie( 'csrftoken' );
    },

    getUser () {

      return fetch( 'http://localhost:8000/api/user_profiles/' + this.$route.params.user_id,
              { method: 'GET', credentials: 'include' } )
        .then(response => response.json() )
        .then(data => {
          this.profile = data;
        })
        .catch(err => { console.log(err) })

    },

    getFriends () {

      return fetch( 'http://localhost:8000/api/user_profiles/?id=' + this.$route.params.user_id,
              { method: 'GET', credentials: 'include' } )
        .then(response => response.json() )
        .then(data => {
          this.users = data.results;
        })
        .catch(err => { console.log(err) })
      
    },

    getCookie (key) {
      var cookies = {};
      var document_cookies = document.cookie.split("; ");
      for (var i = 0; i <= document_cookies.length; i++) {
        var ckey = document_cookies[i].split('=')[0];
        var cval = document_cookies[i].split('=')[1];
        if (ckey === key) {
          return cval
        }
      }
      return null;
    }

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
