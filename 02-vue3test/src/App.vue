<template>
  <div id="app">
    <router-link to="/home" tag="button">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link v-bind:to="'/user/'+userid">用户</router-link>
<!--    <button @click="homeclick">首页</button>-->
<!--    <button @click="aboutclick">关于</button>-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      userid:'lisi',
    }
  },
  methods:{
    homeclick() {
      console.log('hello')
      this.$router.push('/home')
    },
    aboutclick() {
      console.log('world')
      this.$router.push('/about')
    }
  },
  components: {

  }
}
</script>
<style>
a{
  margin-left:10px;
}
</style>
