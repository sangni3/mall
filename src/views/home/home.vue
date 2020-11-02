<template>
  <div id="home">
    <navbar class="home-nav">
      <div slot="center">购物街</div>
      </navbar>
    <HomeSwiper :banner="banner"></HomeSwiper>
  </div>
</template>


<script>
import navbar from "@/components/common/navbar/navbar"
import {getHomedata} from "../../network/home"
import HomeSwiper from "./HomeSwiper"
export default {
name: "home",
  data(){
  return{
    banner:[]
  }
  },
  components:{
    navbar,
    HomeSwiper
  },
  mounted() {
  getHomedata().then(res =>{
    this.banner=res.data.data.banner.list
  })
  }
}
</script>

<style scoped>
.home-nav{
  background: var(--color-tint);
  color:#fff;
}
</style>
