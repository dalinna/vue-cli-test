<template>
  <div class="home">
    <div>{{message}}</div>
    <div class="progress">
      <h5>下面这些就是一个插件”element-ui“ </h5>
      <el-progress :percentage="70"></el-progress>
      <el-progress :percentage="80" color="#8e71c7"></el-progress>
      <el-progress :percentage="100" status="success"></el-progress>
      <el-progress :percentage="50" status="exception"></el-progress>
    </div>
    

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  // vue比较好用的双向数据绑定就样用的，在data里面设置，在template里面使用
  data(){
    return {
      message: 'Hello 强哥!'
    }
  }
}
</script>
<style >
  .progress{
    width:500px;
    height:100px;
  }
</style>
