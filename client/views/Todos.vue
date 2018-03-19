<template>
  <div id="todos-container" class="container">
    <daily-box v-for="(item, index) in dateArr"
               :key="item.id"
               :date="item"
               :mode="mode"></daily-box>
  </div>
</template>
<script>
  import { mapGetters, mapMutations } from 'vuex';
  import DailyBox from '../components/DailyBox';

  export default {
    watch: {
      todoIndexCount () {
        this.reloadPage();
      },
      '$route' () {
        this.reloadPage();
        this.setEditUid();
      }
    },
    mounted() {
      this.reloadPage();
    },
    props: {
      mode: {
        type: String,
        default: ""
      }
    },
    computed: {
      ...mapGetters([
        'isDoneDateArr',
        'todoIndexCount'
      ]),
      resetDate() {
        return new Date().toISOString().slice(0,10);
      }
    },
    data() {
      return {
        dateArr: []
      }
    },
    methods: {
      ...mapMutations([
        'setEditUid'
      ]),
      reloadPage() {
        if (this.mode === 'done-mode') {
          this.dateArr = this.isDoneDateArr(true);
        } else if (this.mode === 'undone-mode') {
          this.dateArr = this.isDoneDateArr(false);
        }
      }
    },
    components: {
      DailyBox
    }
  }
</script>
<style lang="scss">
  .container {
    padding: 12px 36px;

    @media (max-width: 768px) {
      padding: 12px;
    }
  }
</style>
