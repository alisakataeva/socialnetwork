<template>
  
  <button :class="classes" @click="onClick()">
    {{ text }}
  </button>

</template>

<script>
export default {
  
  name: 'Button',

  props: {
    classes: String,
    text: String,
    onClick: Function
  }

}
</script>
