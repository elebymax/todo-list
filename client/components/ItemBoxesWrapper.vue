<template>
  <div class="my-item-boxes-wrapper">
    <h3>{{ title }}</h3>
    <div class="my-item-boxes-wrapper-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      title: {
        type: String,
        default: ""
      }
    }
  }
</script>
<style lang="scss">
  .my-item-boxes-wrapper {
    margin-top: 24px;
  }
</style>
