<template>
  <div class="page">
    <nav-bar title="Eleby's Todos"></nav-bar>
    <div id="container">
      <daily-box title="Day1" date="2018-03-18"></daily-box>
    </div>
  </div>
</template>

<script>
  import NavBar from '../components/NavBar';
  import DailyBox from '../components/DailyBox';

  export default {
    components: {
      NavBar,
      DailyBox
    }
  }
</script>
<style lang="scss" scoped>
  #container {
    padding: 12px 36px;
  }
</style>
