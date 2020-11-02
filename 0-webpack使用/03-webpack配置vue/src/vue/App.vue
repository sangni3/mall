<template>
  <div>
    <h2 class='title'>{{message}}</h2>
    <button @click="change">按钮</button>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "App",
  data() {
    return {
      message: "我是组件1"
    };
  },
  methods:{
    change(){
      this.message='你好'
    }
  }
};
</script>

<style scoped>
.title {
  color: red;
}
</style>