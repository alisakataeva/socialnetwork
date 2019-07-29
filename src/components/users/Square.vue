<template>
  <div>

    <div class="profile">
      <div class="profile-thumbnail">
        <div class="profile-thumbnail-inner"
          :style="{'background-image': 'url(' + thumbnail + ')'}"></div>
      </div>
      <div class="profile-header">
        <div class="profile-fullname">
          <a href="#"> {{ lastname }} {{ firstname }} </a>
        </div>
        <div class="profile-username"> @{{ username }} </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  
  name: 'SquareProfile',
  props: {
    firstname: String,
    lastname: String,
    username: String,
    thumbnail: String,
    biography: String,
  }

}
</script>

<style scoped>

  .profile {
    margin: 4px;
    display: flex;
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
    display: inline;
  }

</style>
