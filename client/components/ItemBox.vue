<template>
  <div class="my-item-box">
    <div class="my-item-box-checker">
      <div class="my-item-box-checker-outline">
        <i class="material-icons"
           :class="{ 'isActive': isChecked }"
           @click="handleCheckerClicked">check_circle</i>
      </div>
    </div>
    <div class="my-item-box-content" @click="handleTextClicked">
      <span :class="{ 'isActive': isChecked }">
        <div v-if="isChecked" class="my-item-box-done-bar"></div>
        {{ text }}
      </span>
    </div>
    <div class="my-item-box-operation-button">
      <i class="material-icons" @click="handleRemoveClicked">clear</i>
    </div>
  </div>
</template>
<script>
  import { mapGetters, mapMutations } from 'vuex';

  export default {
    props: {
      isChecked: {
        type: Boolean,
        default: false
      },
      id: {
        type: Number,
        default: 0
      },
      text: {
        type: String,
        default: ""
      }
    },
    methods: {
      ...mapMutations([
        'toggleTodo',
        'removeTodo'
      ]),
      handleTextClicked(e) {
        const data = {
          e: e,
          id: this.id
        };
        this.$emit('textClicked', data);
      },
      handleCheckerClicked() {
        this.toggleTodo(this.id);
      },
      handleRemoveClicked() {
        this.removeTodo(this.id);
      }
    }
  }
</script>
<style lang="scss">
  .my-item-box {
    display: flex;
    box-sizing: border-box;
    height: 48px;
    border-bottom: 1px solid #eee;
    margin: 8px 0 ;
    align-items: center;

    .my-item-box-checker {
      padding: 0 8px;

      .my-item-box-checker-outline {
        height: 24px;
        width: 24px;
        border: 2px #d7d7d7 solid;
        border-radius: 99px;

        &:hover i {
          opacity: 1;
        }

        &:active i {
          color: #cdcdcd;
        }

        i {
          height: 100%;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #eee;
          opacity: 0;
          cursor: pointer;

          -webkit-transition: color 0.3s, opacity 0.3s;
          -moz-transition: color 0.3s, opacity 0.3s;
          -ms-transition: color 0.3s, opacity 0.3s;
          -o-transition: color 0.3s, opacity 0.3s;
          transition: color 0.3s, opacity 0.3s;

          &.isActive {
            color: #cdcdcd;
            opacity: 1;
          }
        }
      }
    }

    .my-item-box-content {
      padding: 0 8px;
      box-sizing: border-box;
      width: 100%;
      cursor: text;

      span {
        position: relative;
        font-size: 1.2em;

        &.isActive {
          color: #cdcdcd;
        }

        .my-item-box-done-bar {
          width: 100%;
          height: 2px;
          background-color: #afafaf;
          position: absolute;
          top: calc(50% - 1px);
          left: 0;
        }
      }
    }

    .my-item-box-operation-button {
      height: 100%;
      padding: 0 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;

      i {
        color: #d7d7d7;
        font-size: 2em;
        cursor: pointer;

        &:hover {
          color: #cdcdcd;
        }
      }
    }
  }
</style>
