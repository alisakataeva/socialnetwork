<template>
  <div>

    <article :id="'post-id' + data.id" class="post">
      
      <div class="post-header">
        <div class="post-title">{{ data.title }}</div>
        <div class="post-date">{{ new Date(data.date_posted).toLocaleString() }}</div>
      </div>

      <div class="post-body">
        {{ data.content }}
      </div>

      <div class="post-tags">
        <div v-for="tag in data.tags" :key="tag.id"
          class="post-tag"> {{ tag.tag }} </div>
      </div>

    </article>

  </div>
</template>

<script>
export default {
  
  name: 'Post',

  props: {
    data: Object
  }

}
</script>

<style scoped>

  .post {
    padding: 20px;
  }

  .post-header {
    display: flex;
    justify-content: space-between;
  }

  .post-title {
    font-weight: bold;
    font-size: 1.5em;
  }

  .post-date {
    color: #aaa;
  }

  .post-body {
    padding-top: 12px;
    padding-bottom: 12px;
  }

  .post-tags {
    display: flex;
  }

  .post-tag {
    font-size: .9em;
    background-color: #def9df;
    border: 1px solid #eee;
    padding: 0 8px;
    border-radius: 3px;
    margin-right: 4px;
  }

</style>
