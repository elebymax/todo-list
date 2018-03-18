<template>
  <div class="my-item-box">
    <div class="my-item-box-checker">
      <div class="my-item-box-checker-outline">
        <i class="material-icons">check_circle</i>
      </div>
    </div>
    <div class="my-item-box-content">
      <span>{{ text }}</span>
    </div>
    <div class="my-item-box-operation-button">
      <i class="material-icons">clear</i>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      isChecked: {
        type: Boolean,
        default: false
      },
      text: {
        type: String,
        default: ""
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
    margin-bottom: 8px;
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
        }
      }
    }

    .my-item-box-content {
      padding: 0 8px;
      box-sizing: border-box;
      width: 100%;
      cursor: text;

      span {
        font-size: 1.2em;
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
