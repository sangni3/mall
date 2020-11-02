<template>
  <div id="app">
    <h1>我是主页</h1>
    <p>我是主页内容，xxxx</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "home"
}
</script>

<style scoped>

</style>