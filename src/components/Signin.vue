<template>
  <div>

    <div v-if="loading">
      Loading...
    </div>

    <div v-else>

      <h5>Log in</h5>

      <form class="form signin" v-on:submit.prevent="login">

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
            Password:
          </label>
          <div class="form-input">
            <Input type="password" name="password" :data="userData" field="password" />
          </div>
        </div>

        <div style="text-align:center">
          <!-- <Button text="Log in" classes="button-primary" /> -->
          <button type="submit" class="button-primary">Log in</button>
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

  name: 'Signin',

  components: {
    Input,
    Button
  },

  data () {
    return {
      loading: false,
      userData: {},
      apiUrl: this.$store.state.apiUrl
    }
  },

  methods: {

    login (e) {
      
      var csrf = utils.getCookie( 'csrftoken' );
      var formData = new FormData( e.target );

      utils.post( this.apiUrl + '/login/', csrf, formData )
        .then(
          data => {
            if (data.hasOwnProperty('user')) {
              this.$store.commit( 'setProfile', data.user )
              this.$router.push({ name: 'profile', params: { 'user_id': data.user.id } })
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
