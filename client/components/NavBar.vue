<template>
  <mu-appbar :title="title">
    <mu-flat-button v-if="!isSmallDevice" color="white" label="已完成項目" slot="right" @click="handleShowDoneTodosClicked"/>
    <mu-flat-button v-if="!isSmallDevice" color="white" label="未完成項目" slot="right" @click="handleShowUndoneTodosClicked"/>
    <mu-flat-button v-if="!isSmallDevice" color="white" label="單日項目" slot="right" @click="handleShowDailyTodosClicked"/>
    <mu-icon-menu
      icon="more_vert"
      slot="right"
      v-if="isSmallDevice"
      :anchorOrigin="rightTop"
      :targetOrigin="rightTop">
      <mu-menu-item title="已完成項目" @click="handleShowDoneTodosClicked"/>
      <mu-menu-item title="未完成項目" @click="handleShowUndoneTodosClicked"/>
      <mu-menu-item title="單日項目" @click="handleShowDailyTodosClicked"/>
    </mu-icon-menu>
  </mu-appbar>
</template>
<script>
  export default {
    mounted() {
      let vue = this;
      this.$nextTick(function() {
        window.addEventListener('resize', function(e) {
          vue.windowWidth = window.innerWidth
        });
      })
    },
    computed: {
      isSmallDevice() {
        return this.windowWidth < 768
      }
    },
    props: {
      title: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        windowWidth: 0,
        rightTop: {horizontal: 'right', vertical: 'top'}
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
