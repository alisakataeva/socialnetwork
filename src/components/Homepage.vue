<template>
  <div class="hello">
    <h1>homepage</h1>
  </div>
</template>

<script>
export default {

  name: 'Homepage',

  props: {
    msg: String
  },

  data () {
    return {
      hoho: 'hello, worldies ><',
      users: [],
      loading: true,
    }
  },

  created () {
    this.getUsers();
  },

  methods: {

    start () {
      // this.hello();
      this.getCookie( 'csrftoken' );
    },

    getUsers () {

      fetch( 'http://localhost:8000/api/user_profiles/', { method: 'GET', credentials: 'include',  } )
        .then(response => response.json() )
        .then(data => {
          this.users = data.results;
          this.loading = false;
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

a.link-normal {
  color: inherit;
  text-decoration: none;
}
a.link-normal:hover,
a.link-normal:active,
a.link-normal:focus {
  text-decoration: underline;
}

.fullname {
  font-weight: bold;
  margin-right: 1em;
}

.username {
  color: grey;
}

</style>
