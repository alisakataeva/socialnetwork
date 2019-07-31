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
import utils from '../utils'

export default {

  name: 'Friends',

  components: {
    InlineProfile
  },

  data () {
    return {
      profile: {},
      users: [],
      loading: true,
      apiUrl: this.$store.state.apiUrl
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

    getFriends () {

      return utils.get( this.apiUrl + '/api/user_profiles/?id=' + this.$route.params.user_id )
        .then(
          data => {
            this.users = data.results;
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
