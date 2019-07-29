<template>
  <div id="app">

    <header>
      <div class="header-menu">
        <router-link class="header-link" :to="{'name': 'homepage'}">Facebook</router-link>
        |
        <router-link class="header-link" :to="{'name': 'users'}">Users</router-link>
      </div>
      <div class="header-user">

        <template v-if="$store.state.profile.id">
          <div class="header-avatar" :style="{'background-image': 'url(' + $store.state.profile.avatar + ')'}"></div>
          <div class="header-menu">
            <router-link class="header-link":to="{'name': 'profile_settings',
              params: {'user_id': $store.state.profile.id}}">Settings</router-link>
            |
            <a class="header-link" v-on:click="logout" href="#">Log out</a>
          </div>
        </template>

        <template v-else>
          <div class="header-menu">
            <router-link class="header-link" :to="{'name': 'signin'}">Log in</router-link>
            |
            <router-link class="header-link" :to="{'name': 'signup'}">Register</router-link>
          </div>
        </template>

      </div>
    </header>

    <div class="main">

      <aside v-if="$store.state.profile.id">
        <nav>
          <router-link :to="{'name': 'profile', params: {'user_id': $store.state.profile.id}}" class="nav-item">
            <span>My Profile</span>
          </router-link>
          <router-link :to="{'name': 'blog', params: {'user_id': $store.state.profile.id}}" class="nav-item">
            <span>My Blog</span>
          </router-link>
          <router-link :to="{'name': 'friends', params: {'user_id': $store.state.profile.id}}" class="nav-item">
            <span>My Friends</span>
          </router-link>
          <router-link :to="{'name': 'homepage'}" class="nav-item">
            <span>My Images</span>
          </router-link>
          <router-link :to="{'name': 'homepage'}" class="nav-item">
            <span>My Messages</span>
          </router-link>
        </nav>
      </aside>

      <section :class="{'half-width': $store.state.profile.id, 'full-width': !$store.state.profile.id}">
        <router-view />
      </section>

    </div>

  </div>
</template>

<script>
export default {

  name: 'app',

  created () {
    this.setCurrentUserData()
  },

  methods: {

    setCurrentUserData () {
      fetch(
        'http://localhost:8000/api/user_data/',
        { method: 'GET', credentials: 'include' }
      ).then(
        response => response.json()
      ).then(
        data => {

          if (!data.hasOwnProperty('nodetail')) {
            this.$store.commit(
              'setProfile',
              data
            )
          }

        }
      )
    },

    logout () {
      fetch(
        'http://localhost:8000/logout',
        { method: 'GET', credentials: 'include' }
      ).then(
        response => response.text()
      ).then(
        data => {
          this.$store.commit(
            'setProfile',
            {}
          );
          this.$router.push({
            name: 'homepage'
          })
        }
      )
      // window.location = "http://localhost:8000/logout";
    }

  }

}
</script>

<style>

@import '../node_modules/skeleton-framework/dist/skeleton.css';

body {
  margin: 0;
  background-color: #fbfbfb;
}
nav {
  display: flex;
  flex-direction: column;
}
.nav-item {
  color: inherit;
  text-decoration: none;
  padding: 4px 8px;
  border-radius: 4px;
}
.nav-item:hover {
  background-color: #f2f2f2;
  color: inherit;
}
.main {
  width: 800px;
  margin: 60px auto;
  display: flex;
  justify-content: space-between;
}
aside {
  width: 200px;
  padding: 0 12px;
  background-color: #fbfbfb;
}
section {
  padding: 12px;
  border: 1px solid #eee;
  background-color: #fff;
}
section.half-width {
  width: 600px;
}
section.full-width {
  width: 800px;
}
.sectiontop {
  display: flex;
  justify-content: space-between;
}
.sectiontop-action {
  color: grey;
  margin-top: 5px;
}
.sectiontop-action:hover,
.sectiontop-action:focus,
.sectiontop-action:active {
  color: grey;
}
header {
  background-color: #7575d0;
  padding: 10px;
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
  justify-content: space-between;
}
.header-menu {
  color: #fff;
}
.header-link {
  color: #fff;
  font-weight: bold;
  text-decoration: none;
}
.header-link:hover,
.header-link:focus,
.header-link:active {
  color: #fff
}

.header-user {
  display: flex;
}

.header-avatar {
  width: 25px;
  height: 25px;
  background-size: cover;
  margin-right: 12px;
}

.box {
  border: 1px solid #eee;
}

.box-item {
  border-bottom: 1px solid #eee;
}
.box-item:last-child {
  border-bottom: none;
}

.input-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
}
.input-group .input {
  margin: 4px 0;
}
.input-group input {
  margin: 0;
}
</style>
