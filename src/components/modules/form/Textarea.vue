<template>

    <textarea
      :name="name"
      :placeholder="placeholder"
      v-model="data[field]" />

</template>

<script>
export default {
  
  name: 'Textarea',

  props: {
    data: Object,
    field: String,
    name: String,
    value: String,
    placeholder: String,
    model: String
  }

}
</script>
