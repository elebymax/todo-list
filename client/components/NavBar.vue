<template>
  <mu-appbar title="Title">
    <mu-text-field icon="search" class="navbar-search-field" slot="right" hintText="請輸入搜尋內容"/>
    <mu-flat-button color="white" label="flat Button" slot="right"/>
  </mu-appbar>
</template>
<script>

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
