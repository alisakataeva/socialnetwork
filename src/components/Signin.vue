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

export default {

  name: 'Signin',

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

    login (e) {
      var formData = new FormData( e.target );
      fetch(
        'http://localhost:8000/login/?username=' + formData.get("username") + '&password=' + formData.get("password"),
        { method: 'GET', credentials: 'include' }
      ).then(
        response => response.json()
      ).then(
        data => {
          console.log(data)
          if (data.hasOwnProperty('user')) {
            this.$store.commit(
              'setProfile',
              data.user
            )
          };
          this.$router.push({
            name: 'profile',
            params: {
              'user_id': data.user.id
            }
          })
          console.log( data );
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
