<template>
  <div class="my-edit-box">
    <div class="my-edit-box-date-picker" @click="handleDateClick()">
      <div class="my-edit-box-date-picker-wrapper">
        <div class="my-edit-box-date-picker-icon">
          <i class="material-icons">access_time</i>
        </div>
        <div class="my-edit-box-date-text">{{ selectDate }}</div>
        <mu-date-picker ref="date-picker" v-model="selectDate" hintText="選擇時間" style="display: none;"/>
      </div>
    </div>
    <div class="my-edit-box-text-field">
      <input class="my-edit-box-input-box" v-model="inputContent" type="text" :placeholder="hintText"/>
    </div>
    <div class="my-edit-box-operation-button">
      <mu-raised-button label="加入" class="demo-raised-button" primary/>
      <mu-flat-button label="清空" class="demo-flat-button" @click="handleClearClick"/>
    </div>
  </div>
</template>
<script>
  export default {
    mounted() {
      this.selectDate = new Date().toISOString().slice(0,10);
    },
    props: {
      hintText: {
        type: String,
        default: ""
      }
    },
    data () {
      return {
        selectDate: "",
        inputContent: ""
      }
    },
    methods: {
      handleDateClick() {
        this.$refs['date-picker'].$el.querySelector(".mu-text-field-content").click();
      },
      handleClearClick() {
        this.inputContent = "";
      }
    }
  }
</script>
<style lang="scss">
  .my-edit-box {
    display: flex;
    box-sizing: border-box;
    border: 1px solid #eee;
    border-radius: 3px;

    .my-edit-box-date-picker {
      border-right: 1px solid #eee;
      flex: 2;
      display: flex;
      justify-content: center;
      cursor: pointer;
      -webkit-transition: background-color 0.3s;
      -moz-transition: background-color 0.3s;
      -ms-transition: background-color 0.3s;
      -o-transition: background-color 0.3s;
      transition: background-color 0.3s;

      &:hover {
        background-color: #eee;
      }

      .my-edit-box-date-picker-wrapper {
        display: flex;

        .my-edit-box-date-picker-icon {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .my-edit-box-date-text {
          margin-left: 8px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }

    .my-edit-box-text-field {
      padding: 0 8px;
      box-sizing: border-box;
      flex: 8;

      .my-edit-box-input-box {
        border: none;
        height: 48px;
        width: 100%;
        font-size: 1.2em;

        &:focus {
          outline: none;
        }
      }
    }

    .my-edit-box-operation-button {
      border-left: 1px solid #eee;
      display: flex;
      align-items: center;
      justify-content: space-around;
      box-sizing: border-box;
      padding: 0 2px;
      flex: 2;
    }
  }
</style>
