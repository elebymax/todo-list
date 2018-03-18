<template>
  <div class="my-daily-box">
    <h2>{{ title }}</h2>
    <div class="my-daily-box-content">
      <item-boxes-wrapper title="未完成">
        <display-box v-for="(item, index) in undoneTodosByDate(date)"
                     :key="item.key"
                     :id="item.id"
                     :date="item.date"
                     :text="item.text"
                     :done="item.done">
        </display-box>
      </item-boxes-wrapper>

      <display-add-box></display-add-box>

      <item-boxes-wrapper title="已完成">
        <display-box v-for="(item, index) in doneTodosByDate(date)"
                     :key="item.key"
                     :id="item.id"
                     :date="item.date"
                     :text="item.text"
                     :done="item.done">
        </display-box>
      </item-boxes-wrapper>
    </div>
  </div>
</template>
<script>
  import { mapGetters, mapMutations } from 'vuex';
  import EditBox from '../components/EditBox';
  import ItemBox from '../components/ItemBox';
  import ItemBoxesWrapper from '../components/ItemBoxesWrapper';
  import DisplayBox from '../components/DisplayBox';
  import DisplayAddBox from '../components/DisplayAddBox';

  export default {
    computed: {
      ...mapGetters([
        'doneTodosByDate',
        'undoneTodosByDate',
        'todoById'
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
        isModifying: false,
        showEditBox: false,
        edit: {
          id: 0,
          date: "",
          text: "",
          done: false
        }
      }
    },
    methods: {
      ...mapMutations([
        'storeElement'
      ])
    },
    components: {
      EditBox,
      ItemBox,
      ItemBoxesWrapper,
      DisplayBox,
      DisplayAddBox
    }
  }
</script>
<style lang="scss" scoped>
  .my-daily-box {
    padding: 8px;

    h2 {
      border-bottom: 2px solid #eee;
      padding-bottom: 8px;
    }

    .my-daily-box-content {

      .my-daily-box-item-box-wrapper {
        margin-top: 24px;
      }

      .edit-box {

        &.isActive {
          display: flex;
        }
      }
    }
  }
</style>
