<template>
  <div id="app">
    <book-header
    :leftIconShow="RouterName ==='detail' || RouterName === 'cart'"
    :deepBgcolor="RouterName === 'detail'"
    :rightIconShow="RouterName === 'home'"
    >
    {{ HeaderTitle }}
    </book-header>
    <router-view/>
  </div>
</template>

<script>
import BookHeader from './components/BookHeader.vue'
export default {
  name:'App',
  components: { BookHeader },
  data() {
    return {
      HeaderTitle:'',
      RouterName:''
    }
  },
  mounted() {
    this.SetHeaderTitle();
  },
  watch:{
    $route(to){
      this.RouterName = to.name;
      this.SetHeaderTitle();
    }
  },
  methods:{
    SetHeaderTitle(){
      this.RouterName = this.$route.name;
      switch (this.RouterName) {
        case 'home':
          this.HeaderTitle = '好书库';
          break;
        case 'detail':
          this.HeaderTitle = '图书详情';
          break;
        case 'cart':
          this.HeaderTitle = '我的图书';
          break;
        default:
          break;
      }
    }
  }
}
</script>

<style lang="scss">

</style>
