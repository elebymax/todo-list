<template>
  <div class="my-display-add-box">
    <div v-if="!isModifying"
         class="my-daily-box-adding-label"
         @click="handleAddingLabelClicked">
      <i class="material-icons" style="padding: 0 8px">add</i>
      <div style="padding-left: 8px">新增項目</div>
    </div>
    <edit-box v-if="isModifying"
              :isModifying="false"
              hintText="請輸入事項"
              @completeAdding="handleEditBoxComplete"></edit-box>
  </div>
</template>
<script>
  import { mapGetters, mapMutations } from 'vuex';
  import EditBox from '../components/EditBox';

  export default {
    watch: {
      editUid(value) {
        if (this.isModifying && this._uid !== value) {
          this.isModifying = false;
        }
      }
    },
    computed: {
      ...mapGetters([
        'editUid'
      ])
    },
    data() {
      return {
        isModifying: false,
      }
    },
    methods: {
      ...mapMutations([
        'setEditUid'
      ]),
      handleAddingLabelClicked() {
        this.isModifying = true;
        this.setEditUid(this._uid);
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
      margin-top: 16px;
      cursor: pointer;

      &.isActive {
        display: flex;
      }

      &:hover {
        color: gray;

        i {
          color: gray;
        }
      }

      i {
        color: #afafaf;
      }
    }
  }
</style>
