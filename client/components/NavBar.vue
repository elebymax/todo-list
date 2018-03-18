<template>
  <mu-appbar :title="title">
    <mu-flat-button color="white" label="已完成項目" slot="right" @click="handleShowDoneTodosClicked"/>
    <mu-flat-button color="white" label="未完成項目" slot="right" @click="handleShowUndoneTodosClicked"/>
    <mu-flat-button color="white" label="單日項目" slot="right" @click="handleShowDailyTodosClicked"/>
  </mu-appbar>
</template>
<script>
  export default {
    props: {
      title: {
        type: String,
        default: ""
      }
    },
    methods: {
      handleShowDoneTodosClicked() {
        this.$emit("showDoneTodos");
      },
      handleShowUndoneTodosClicked() {
        this.$emit("showUndoneTodos");
      },
      handleShowDailyTodosClicked() {
        this.$emit("showDailyTodos");
      }
    }
  }
</script>
<style lang="scss">
  .navbar-search-field {
    color: #FFF !important;
    margin-bottom: 0 !important;

    .mu-text-field-hint {
      color: rgba(255, 255, 255, 0.54);
    }

    .mu-text-field-input {
      color: #FFF;
    }

    .mu-text-field-focus-line {
      background-color: #fff;
    }
  }
</style>
