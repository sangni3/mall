<template>
  <div>
    <h1>用户界面</h1>
    <p>用户详细信息</p>
    <p>{{userId}}</p>
  </div>
</template>

<script>
export default {
name: "user",
  computed:{
  userId(){
    return this.$route.params.userId
  }
  }
}
</script>

<style scoped>

</style>