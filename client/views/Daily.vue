<template>
  <div id="daily-container" class="container">
    <daily-box title="Day1" :date="resetDate"></daily-box>
  </div>
</template>
<script>
  import DailyBox from '../components/DailyBox';

  export default {
    computed: {
      resetDate() {
        return new Date().toISOString().slice(0,10);
      }
    },
    components: {
      DailyBox
    }
  }
</script>
<style lang="scss">
  .container {
    padding: 12px 36px;
  }
</style>
