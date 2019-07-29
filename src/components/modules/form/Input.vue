<template>

    <input
      :type="type || 'text'"
      :name="name"
      :placeholder="placeholder"
      v-model="data[field]" />

</template>

<script>
export default {
  
  name: 'Input',

  props: {
    data: Object,
    field: String,
    type: String,
    name: String,
    value: String,
    placeholder: String,
    model: String
  }

}
</script>
