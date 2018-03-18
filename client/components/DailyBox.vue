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

      <div ref="adding-label" class="my-daily-box-adding-label" @click="handleAddingLabelClicked">
        <i class="material-icons">add</i>
        <div>新增項目</div>
      </div>

      <edit-box :isModifying="false" hintText="請輸入事項"></edit-box>

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

  export default {
    computed: {
      ...mapGetters([
        'doneTodosByDate',
        'undoneTodosByDate',
        'todoById',
        'elementStorage'
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
      ]),
      handleItemTextClicked({e, id}) {
        this.edit = this.todoById(id);
        this.isModifying = true;

        if (this.elementStorage !== null) {
          this.$refs['edit-box'].$el.replaceWith( this.elementStorage );
        }

        const itemBox = e.target.parentNode;
        this.storeElement(item);
        itemBox.replaceWith(this.$refs['edit-box'].$el);
      },
      handleAddingLabelClicked() {
        const addingLabel = this.$refs['adding-label'];
        this.storeElement(addingLabel);
        addingLabel.replaceWith(this.$refs['edit-box'].$el);
        this.showEditBox = true;
      }
    },
    components: {
      EditBox,
      ItemBox,
      ItemBoxesWrapper,
      DisplayBox
    }
  }
</script>
<style lang="scss" scoped>
  .my-daily-box {
    padding: 8px;

    h2 {
      border-bottom: 1px solid #eee;
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

      .my-daily-box-adding-label {
        height: 48px;
        width: 100%;
        display: flex;
        color: #afafaf;
        align-items: center;
        font-size: 1.2em;
        display: none;

        &.isActive {
          display: flex;
        }

        i {
          color: #afafaf;
        }
      }
    }
  }
</style>
