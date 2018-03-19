<template>
  <div id="daily-container" class="container">
    <daily-box :date="resetDate"
               :mode="mode"></daily-box>
  </div>
</template>
<script>
  import DailyBox from '../components/DailyBox';

  export default {
    props: {
      mode: {
        type: String,
        default: ""
      }
    },
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

    @media (max-width: 768px) {
      padding: 12px;
    }
  }
</style>
