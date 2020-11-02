<template>
  <div id="tabbar-root">
    <tabbar>
      <tabbar-item path="/home">
        <img slot="item-icon" src='../../assets/img/tabbar/home.svg' alt="">
        <img slot="item-icon-active" src="../../assets/img/tabbar/home(1).svg" alt="">
        <div slot="item-text">首页</div>
      </tabbar-item>
      <tabbar-item path="/category">
        <img slot="item-icon" src="../../assets/img/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="../../assets/img/tabbar/category(1).svg" alt="">
        <div slot="item-text">分类</div>
      </tabbar-item>
      <tabbar-item path="/cart">
        <img slot="item-icon" src="../../assets/img/tabbar/shop.svg" alt="">
        <img slot="item-icon-active" src="../../assets/img/tabbar/shop(1).svg" alt="">
        <div slot="item-text">购物车</div>
      </tabbar-item>
      <tabbar-item path="/profile" >
        <img slot="item-icon" src="../../assets/img/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="../../assets/img/tabbar/profile(1).svg" alt="">
        <div slot="item-text">我的</div>
      </tabbar-item>
    </tabbar>

  </div>
</template>

<script>
import Tabbar from '../common/tabbar/tabbar'
import tabbarItem from "../common/tabbar/tabbar-item"
export default {
  name: 'tabbartoot',
  components:{
    Tabbar,
    tabbarItem
  }
}
</script>

<style>

</style>
