<template>
  <div class="my-daily-box">
    <h2>{{ title }}</h2>
    <div class="my-daily-box-content">
      <item-box v-for="(item, index) in todosByDate(date)"
                :key="item.id"
                :text="item.text"></item-box>
      <edit-box hintText="請輸入事項"></edit-box>
    </div>
  </div>
</template>
<script>
  import { mapGetters, mapMutations } from 'vuex';
  import EditBox from '../components/EditBox';
  import ItemBox from '../components/ItemBox';

  export default {
    computed: {
      ...mapGetters([
        'todosByDate'
      ])
    },
    props: {
      title: {
        type: String,
        default: ""
      },
      date: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        
      }
    },
    components: {
      EditBox,
      ItemBox
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

    .my-daily-box-content {

    }
  }
</style>
