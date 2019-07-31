<template>
  <div>

    <div v-if="loading">
      Loading...
    </div>

    <div v-else>

      <h6>Profile : {{ profile.user.last_name }} {{ profile.user.first_name }}</h6>

      <div class="profile">

        <div class="profile-avatar">
          <img :src="profile.avatar" alt="" />
        </div>

        <div class="profile-content">

          <div class="profile-info">
            <div class="profile-key">Information</div>
            <div class="profile-description">{{ profile.biography }}</div>
          </div>

          <div class="profile-info">
            <div class="profile-key">Birthdate</div>
            <div class="profile-description">{{ profile.birthdate }}</div>
          </div>

          <div class="profile-info">
            <div class="profile-key">Date joined</div>
            <div class="profile-description">{{ profile.user.date_joined }}</div>
          </div>

          <div class="profile-info">
            <div class="profile-key">I Like</div>
            <div class="profile-description">{{ profile.i_like }}</div>
          </div>

          <div class="profile-info">
            <div class="profile-key">I Dislike</div>
            <div class="profile-description">{{ profile.i_dislike }}</div>
          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<script>
import Input from './modules/form/Input'
import Button from './modules/form/Button'
import utils from '../utils'

export default {
  
  name: 'MyProfile',

  components: {
    Input,
    Button
  },

  data () {
    return {
      loading: true,
      editing: false,
      profile: {},
      apiUrl: this.$store.state.apiUrl
    }
  },

  watch: {
    '$route': 'initial'
  },

  created () {
    this.initial();
  },

  methods: {

    initial () {
      this.fetchData();
    },

    fetchData () {

      utils.get( this.apiUrl + '/api/user_profiles/' + this.$route.params.user_id )
        .then(
          data => {
            this.profile = data;
            this.loading = false;
          }
        )

    }

  }

}
</script>

<style scoped>

  .profile {
    display: flex;
  }

  .profile-avatar {
    width: 200px;
    margin-right: 12px;
  }

  .profile-avatar img {
    width: 200px;
  }

  .profile-content {
    width: 100%;
  }

  .profile-info {
    display: flex;
    font-size: .9em;
  }

  .profile-key {
    color: #bbb;
    margin-right: 12px;
    width: 80px;
  }

  .profile-description {
    width: 270px;
  }

  .big-input input {
    font-size: 1.2rem;
  }

</style>
