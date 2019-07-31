<template>
  <div class="hello">

    <h6>Users</h6>

    <div v-if="loading">
      Loading...
    </div>

    <div v-else>

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
import utils from '../utils'

export default {

  name: 'Users',

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
      friends: [],
      loading: true,
      apiUrl: this.$store.state.apiUrl
    }
  },

  created () {
    this.getUsers()
  },

  methods: {

    start () {
      this.getCookie( 'csrftoken' );
    },

    getUsers () {

      utils.get( this.apiUrl + '/api/user_profiles/' )
        .then(
          data => {
            this.users = data.results;
            this.loading = false;
          }
        ).catch(
          err => { console.log(err) }
        )
      
    }

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
