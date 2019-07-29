<template>
  <div>

    <div v-if="loading">
      Loading...
    </div>

    <div v-else>

      <h6>Profile Settings : {{ profile.user.last_name }} {{ profile.user.first_name }}</h6>
      
      <div class="form">

        <div class="form-row">
          <div class="form-label">
            Username:
          </div>
          <div class="form-input">
            <Input :data="profile.user" :field="'username'" />
          </div>
        </div>

        <div class="form-row">
          <div class="form-label">
            First name:
          </div>
          <div class="form-input">
            <Input :data="profile.user" :field="'first_name'" />
          </div>
        </div>

        <div class="form-row">
          <div class="form-label">
            Last name:
          </div>
          <div class="form-input">
            <Input :data="profile.user" :field="'last_name'" />
          </div>
        </div>

        <div class="form-row">
          <div class="form-label">
            E-mail:
          </div>
          <div class="form-input">
            <Input :data="profile.user" :field="'email'" />
          </div>
        </div>

        <div class="form-row">
          <div class="form-label">
            Biography:
          </div>
          <div class="form-input">
            <Textarea :data="profile" :field="'biography'" />
          </div>
        </div>

        <div class="form-row">
          <div class="form-label">
            I Like:
          </div>
          <div class="form-input">
            <Textarea :data="profile" :field="'i_like'" />
          </div>
        </div>

        <div class="form-row">
          <div class="form-label">
            I Dislike:
          </div>
          <div class="form-input">
            <Textarea :data="profile" :field="'i_dislike'" />
          </div>
        </div>

        <div style="text-align:center">
          <Button text="Save" classes="button-primary"
            :onClick="saveData" />
        </div>

      </div>
      
    </div>

  </div>
</template>

<script>
import Input from './modules/form/Input'
import Textarea from './modules/form/Textarea'
import Button from './modules/form/Button'
import utils from '../utils'

export default {
  
  name: 'ProfileSettings',

  components: {
    Input,
    Button,
    Textarea
  },

  data () {
    return {
      loading: true,
      profile: {}
    }
  },

  created () {
    this.initial()
  },

  methods: {

    initial () {
      this.fetchData()
    },

    fetchData () {

      fetch (
        'http://localhost:8000/api/user_profiles/' + this.$route.params.user_id,
        { method: 'GET', credentials: 'include' }
      ).then(
        response => response.json()
      ).then(
        data => {
          this.profile = data;
          this.loading = false;
        }
      )

    },
    
    saveData () {
      var csrf = utils.getCookie( 'csrftoken' );
      Promise.all([
        fetch(
          'http://localhost:8000/api/user_profiles/' + this.profile.id + '/',
          { method: 'PATCH', credentials: 'include', 
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'X-CSRFToken': csrf
            },
            body: JSON.stringify({
              biography: this.profile.biography,
              i_like: this.profile.i_like,
              i_dislike: this.profile.i_dislike
            }) }
        ),
        fetch(
          'http://localhost:8000/api/users/' + this.profile.user.id + '/',
          { method: 'PATCH', credentials: 'include', 
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'X-CSRFToken': csrf
            },
            body: JSON.stringify({
              username: this.profile.user.username,
              first_name: this.profile.user.first_name,
              last_name: this.profile.user.last_name,
              email: this.profile.user.email,
            }) }
        ),

      ])
    }

  }

}
</script>
