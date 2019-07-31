<template>
  <div class="hello">
    <h1>homepage</h1>
  </div>
</template>

<script>
import utils from '../utils'

export default {

  name: 'Homepage',

  data () {
    return {
      loading: false,
    }
  },

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
