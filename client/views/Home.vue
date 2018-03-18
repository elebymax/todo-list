<template>
  <div class="page">
    <nav-bar title="Eleby's Todos"
             @showDoneTodos="handleShowDoneTodos"
             @showUndoneTodos="handleShowUndoneTodos"
             @showDailyTodos="handleShowDailyTodos"></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
  import NavBar from '../components/NavBar';

  export default {
    methods: {
      handleShowDoneTodos() {
        this.$router.replace("/done-todos");
      },
      handleShowUndoneTodos() {
        this.$router.replace("/undone-todos");
      },
      handleShowDailyTodos() {
        this.$router.replace("/daily-todos");
      }
    },
    components: {
      NavBar
    }
  }
</script>
<style lang="scss" scoped>

</style>
