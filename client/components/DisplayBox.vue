<template>
  <div class="my-display-box">
    <item-box v-if="!isModifying"
              :id="id"
              :text="text"
              :date="date"
              :isChecked="done"
              @textClicked="handleItemTextClicked"></item-box>
    <edit-box v-if="isModifying"
              :isModifying="isModifying"
              :id="id"
              :date="date"
              :text="text"
              hintText="請輸入事項"
              @completeModifying="handleEditBoxComplete"
              @cancelModifying="handleEditBoxCancel"></edit-box>
  </div>
</template>
<script>
  import EditBox from '../components/EditBox';
  import ItemBox from '../components/ItemBox';

  export default {
    props: {
      id: {
        type: Number,
        default: 0
      },
      date: {
        type: String,
        default: ""
      },
      text: {
        type: String,
        default: ""
      },
      done: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        isModifying: false
      }
    },
    methods: {
      handleItemTextClicked() {
        this.isModifying = true;
      },
      handleEditBoxComplete() {
        this.isModifying = false;
      },
      handleEditBoxCancel() {
        this.isModifying = false;
      }
    },
    components: {
      EditBox,
      ItemBox
    }
  }
</script>
<style lang="scss">

</style>
