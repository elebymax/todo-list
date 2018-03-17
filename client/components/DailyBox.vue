<template>
  <div class="my-daily-box">
    <h2>{{ title }}</h2>
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
<style lang="scss" scoped>
  .my-daily-box {
    padding: 8px;

    h2 {
      border-bottom: 1px solid #eee;
      padding-bottom: 8px;
    }
  }
</style>
