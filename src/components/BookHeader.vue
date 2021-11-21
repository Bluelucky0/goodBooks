<template>
  <div :class="['header',{'deep':deepBgcolor}]">
      <div class="icon-wrap">
          <router-link to='/' v-if="leftIconShow" class="link">
            <span class="iconfont icon-zuojiantou"></span>
          </router-link>
      </div>
      <h1><slot></slot></h1>
      <div class="icon-wrap">
          <router-link to="/Cart" v-if="rightIconShow" class="link">
            <span class="iconfont icon-gouwuchetianjia"></span>
          </router-link>
      </div>
  </div>
</template>

<script>
export default {
    name:'bookHeader',
    props:{
        deepBgcolor:Boolean,
        leftIconShow:Boolean,
        rightIconShow:Boolean,
    }
}
</script>

<style lang='scss' scoped>
    .header{
        width: 100%;
        height: 60px;
        border-bottom: 1px solid rgb(207, 207, 207);
        display: flex;
        justify-content: space-between;
        align-items: center;
        .icon-wrap{
            width: 60px;
            height: 60px;
            .link{
                margin: 0;
                padding: 0;
                width: 100%;
                height: 100%;
                text-align: center;
                text-decoration: none;
                span{
                    // width: 40px;
                    // height: 40px;
                    line-height: 60px;
                    font-size: 30px;
                    text-align: center;
                    color: rgb(14, 0, 0);
                    }
                }
            }
        }
    .deep{
        background-color: pink;
    }
</style>