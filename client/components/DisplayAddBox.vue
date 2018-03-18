<template>
  <div class="my-display-add-box">
    <div v-if="!isModifying"
         class="my-daily-box-adding-label"
         @click="handleAddingLabelClicked">
      <i class="material-icons">add</i>
      <div>新增項目</div>
    </div>
    <edit-box v-if="isModifying"
              :isModifying="false"
              hintText="請輸入事項"
              @completeAdding="handleEditBoxComplete"></edit-box>
  </div>
</template>
<script>
  import EditBox from '../components/EditBox';

  export default {
    data() {
      return {
        isModifying: false,
      }
    },
    methods: {
      handleAddingLabelClicked() {
        this.isModifying = true;
      },
      handleEditBoxComplete() {
        this.isModifying = false;
      }
    },
    components: {
      EditBox
    }
  }
</script>
<style lang="scss">
  .my-display-add-box {

    .my-daily-box-adding-label {
      height: 48px;
      width: 100%;
      display: flex;
      color: #afafaf;
      align-items: center;
      font-size: 1.2em;

      &.isActive {
        display: flex;
      }

      i {
        color: #afafaf;
      }
    }
  }
</style>
