<template>
  <div class="my-daily-box">
    <div class="my-daily-box-title-bar">
      <h2 @click="handleDateClick">
        <i class="material-icons">date_range</i>
        {{ selectDate }}
      </h2>
      <div class="my-item-boxes-wrapper-operation-button" @click="handleRemoveDoneTodo" v-if="mode !== 'undone-mode'">
        <i class="material-icons">delete</i>
        <div v-if="windowWidth >= 768">清除已完成項目</div>
      </div>
    </div>
    <mu-date-picker ref="daily-date-picker" v-model="selectDate" hintText="選擇時間" style="display: none;"/>
    <div class="my-daily-box-content">
      <item-boxes-wrapper title="未完成" v-if="mode !== 'done-mode'">
        <display-box v-for="(item, index) in undoneTodosByDate(selectDate)"
                     :key="item.key"
                     :id="item.id"
                     :date="item.date"
                     :text="item.text"
                     :done="item.done">
        </display-box>
      </item-boxes-wrapper>

      <display-add-box v-if="mode !== 'done-mode'"></display-add-box>

      <item-boxes-wrapper title="已完成" v-if="mode !== 'undone-mode'">
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

      let vue = this;
      this.$nextTick(function() {
        window.addEventListener('resize', function(e) {
          vue.windowWidth = window.innerWidth
        });
      })
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
      },
      mode: {
        type: String,
        default: "daily"
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
        selectDate: "",
        windowWidth: 0
      }
    },
    methods: {
      ...mapMutations([
        'removeDoneTodoByDate'
      ]),
      handleDateClick() {
        if (this.mode !== 'daily-mode') {
          return;
        }

        this.$refs['daily-date-picker'].$el.querySelector(".mu-text-field-content").click();
      },
      handleRemoveDoneTodo() {
        this.removeDoneTodoByDate(this.selectDate);
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

    .my-daily-box-title-bar {
      position: relative;
      border-bottom: 2px solid #eee;

      h2 {
        margin: 0;
        padding: 8px 16px;
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        -ms-transition: all 0.3s;
        -o-transition: all 0.3s;
        transition: all 0.3s;
        position: relative;

        &:hover {
          background-color: #eee;
        }

        i {
          padding-right: 16px;
          -webkit-transition: all 0.3s;
          -moz-transition: all 0.3s;
          -ms-transition: all 0.3s;
          -o-transition: all 0.3s;
          transition: all 0.3s;
        }
      }

      .my-item-boxes-wrapper-operation-button {
        position: absolute;
        display: flex;
        align-items: center;
        height: 100%;
        right: 0;
        top: 0;
        padding: 0 8px;
        cursor: pointer;
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        -ms-transition: all 0.3s;
        -o-transition: all 0.3s;
        transition: all 0.3s;

        &:hover {
          background-color: #eee;
        }

        i {
          -webkit-transition: all 0.3s;
          -moz-transition: all 0.3s;
          -ms-transition: all 0.3s;
          -o-transition: all 0.3s;
          transition: all 0.3s;
        }
      }
    }

    .my-daily-box-content {

      .my-daily-box-item-box-wrapper {
        margin-top: 24px;
      }
    }
  }
</style>
