<template>
  <div class="my-item-box">
    <div class="my-item-box-checker">
      <div class="my-item-box-checker-outline">
        <i class="material-icons">check_circle</i>
      </div>
    </div>
  </div>
</template>
<script>

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
  }
</style>
