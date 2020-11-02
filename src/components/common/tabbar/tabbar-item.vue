<template>
    <div class="tabbar-item" @click="itemclick">
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <div :class={active:isActive} ><slot name="item-text"></slot></div>
    </div>
</template>

<script>
export default {
  name: "tabbar-item",
  props:{
    path: String
  },
  data(){
    return{
      // isActive: true
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path)!==-1
    }
  },
  methods:{
    itemclick(){
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>
.tabbar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tabbar-item img{
  height: 24px;
  width: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
.active{
  color: red;
}
</style>
