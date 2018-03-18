<template>
  <div class="my-daily-box">
    <h2 @click="handleDateClick"><i class="material-icons">date_range</i>{{ selectDate }}</h2>
    <mu-date-picker ref="daily-date-picker" v-model="selectDate" hintText="選擇時間" style="display: none;"/>
    <div class="my-daily-box-content">
      <item-boxes-wrapper title="未完成">
        <display-box v-for="(item, index) in undoneTodosByDate(selectDate)"
                     :key="item.key"
                     :id="item.id"
                     :date="item.date"
                     :text="item.text"
                     :done="item.done">
        </display-box>
      </item-boxes-wrapper>

      <display-add-box></display-add-box>

      <item-boxes-wrapper title="已完成">
        <display-box v-for="(item, index) in doneTodosByDate(selectDate)"
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
    mounted() {
      this.selectDate = this.date;
    },
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
        },
        selectDate: ""
      }
    },
    methods: {
      handleDateClick() {
        this.$refs['daily-date-picker'].$el.querySelector(".mu-text-field-content").click();
      }
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
      display: flex;
      align-items: center;
      cursor: pointer;

      i {
        padding: 0 16px 0 8px;
      }
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
