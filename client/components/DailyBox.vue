<template>
  <div class="my-daily-box">
    <h2>{{ title }}</h2>
    <div class="my-daily-box-content">
      <item-boxes-wrapper title="未完成">
        <item-box v-for="(item, index) in undoneTodosByDate(date)"
                  :isChecked="false"
                  :key="item.id"
                  :id="item.id"
                  :text="item.text"></item-box>
      </item-boxes-wrapper>

      <edit-box hintText="請輸入事項"></edit-box>

      <item-boxes-wrapper title="已完成">
        <item-box v-for="(item, index) in doneTodosByDate(date)"
                  :isChecked="true"
                  :key="item.id"
                  :id="item.id"
                  :text="item.text"></item-box>
      </item-boxes-wrapper>
    </div>
  </div>
</template>
<script>
  import { mapGetters, mapMutations } from 'vuex';
  import EditBox from '../components/EditBox';
  import ItemBox from '../components/ItemBox';
  import ItemBoxesWrapper from '../components/ItemBoxesWrapper';

  export default {
    computed: {
      ...mapGetters([
        'doneTodosByDate',
        'undoneTodosByDate'
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
      ItemBox,
      ItemBoxesWrapper
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

      .my-daily-box-item-box-wrapper {
        margin-top: 24px;
      }
    }
  }
</style>
