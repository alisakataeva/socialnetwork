<template>
  <div>

    <div v-if="loading">
      Loading...
    </div>

    <div v-else>

      <h5>Register</h5>

      <form class="form register" v-on:submit.prevent="register">

        <div class="form-row">
          <label class="form-label">
            Userame:
          </label>
          <div class="form-input">
            <Input type="text" name="username" :data="userData" field="username" />
          </div>
        </div>

        <div class="form-row">
          <label class="form-label">
            First name:
          </label>
          <div class="form-input">
            <Input type="text" name="first_name" :data="userData" field="first_name" />
          </div>
        </div>

        <div class="form-row">
          <label class="form-label">
            Last name:
          </label>
          <div class="form-input">
            <Input type="text" name="last_name" :data="userData" field="last_name" />
          </div>
        </div>

        <div class="form-row">
          <label class="form-label">
            E-mail:
          </label>
          <div class="form-input">
            <Input type="text" name="email" :data="userData" field="email" />
          </div>
        </div>

        <div class="form-row">
          <label class="form-label">
            Password:
          </label>
          <div class="form-input">
            <Input type="password" name="password" :data="userData" field="password" />
          </div>
        </div>

        <div class="form-row">
          <label class="form-label">
            Repeat password:
          </label>
          <div class="form-input">
            <Input type="password" name="password2" :data="userData" field="password2" />
          </div>
        </div>

        <div class="form-row">
          <label class="form-label">
            Load an avatar:
          </label>
          <div class="form-input">
            <Input type="file" name="avatar" :data="userData" field="avatar" />
          </div>
        </div>

        <div style="text-align:center">
          <button class="button-primary" typr="submit">Register</button>
        </div>

      </form>

    </div>

  </div>
</template>

<script>
import Input from './modules/form/Input'
import Button from './modules/form/Button'
import utils from '../utils'

export default {

  name: 'Signup',

  components: {
    Input,
    Button
  },

  data () {
    return {
      loading: false,
      userData: {}
    }
  },

  methods: {

    register (e) {
      var csrf = utils.getCookie( 'csrftoken' );
      var formData = new FormData( e.target );
      fetch(
        'http://localhost:8000/register/',
        { method: 'POST', credentials: 'include',
          headers: {
            'X-CSRFToken': csrf
          },
          body: formData }
      ).then(
        response => response.json()
      ).then(
        data => {
          if (data.hasOwnProperty('user')) {
            this.$store.commit(
              'setProfile',
              data.user
            )
            this.$router.push({
              name: 'profile',
              params: {
                'user_id': data.user.id
              }
            })
          };
        }
      )
    }

  }

}
</script>

<style>

  .form-row {
    display: flex;
    align-items: center;
  }

  .form-label {
    width: 40.7%;
    margin-bottom: 1.5rem;
    margin-right: 1rem;
    text-align: right;
  }

</style>
