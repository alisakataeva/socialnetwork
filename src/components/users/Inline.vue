<template>
  <div>

    <router-link :to="{'name': 'profile', params:{'user_id':id}}" class="profile">
      <div class="profile-thumbnail">
        <div class="profile-thumbnail-inner" :style="{'background-image': 'url(' + thumbnail + ')'}"></div>
      </div>
      <div class="profile-header">
        <div class="profile-fullname"> {{ lastname }} {{ firstname }} </div>
        <div class="profile-username"> @{{ username }} </div>
      </div>
    </router-link>

  </div>
</template>

<script>
export default {
  
  name: 'InlineProfile',
  props: {
    firstname: String,
    lastname: String,
    username: String,
    thumbnail: String,
    biography: String,
    id: Number
  }

}
</script>

<style scoped>

  .profile {
    padding: 4px;
    display: flex;
    text-decoration: none;
    color: inherit;
  }
  .profile:hover {
    background-color: #fafafa;
  }

  .profile-thumbnail {
    margin-right: 12px;
  }

  .profile-thumbnail-inner {
    width: 40px;
    height: 40px;
    background-size: 100%;
    background-position: center;
  }

  .profile-fullname {
    font-weight: bold;
    display: inline;
  }
  .profile-fullname a {
    text-decoration: none;
    color: inherit;
  }
  .profile-fullname a:hover,
  .profile-fullname a:focus,
  .profile-fullname a:active {
    text-decoration: underline;
  }

  .profile-username {
    color: grey;
    font-size: .9em;
    margin-top: -8px;
    display: inline;
  }

</style>
