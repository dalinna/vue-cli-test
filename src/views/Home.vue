<template>
  <div class="home">
    <div>{{message}}</div>
    <el-button
    plain
    @click="open">
    可自动关闭
  </el-button>
  <el-button
    plain
    @click="open2">
    不会自动关闭
    </el-button>
      <h5>下面这些就是el开头的是一个插件”element-ui“,<a href="https://element.eleme.cn/#/zh-CN/component/layout">插件地址</a> </h5>
      <!-- 进度条组件 -->
      <el-progress :percentage="70"></el-progress>
      <el-progress :percentage="80" color="#8e71c7"></el-progress>
      <el-progress :percentage="100" status="success"></el-progress>
      <el-progress :percentage="50" status="exception"></el-progress>
       <!-- 冒号”:“代表是vue的v-bind的简写，表示数据绑定  -->
       <!-- @是v-on的简写，表示绑定时间，例如handleNodeClick是在methods中定义的  -->
      <!-- tree组件 -->
      <el-tree :data="dataMenu" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
      <div class="box">我是box</div>
  </div>
</template>

<script>
// @ is an alias to /src
// 引用components中的组件
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  // 上面引用的组件要在这里注册，才能使用
  components: {
    HelloWorld
  },
  // vue比较好用的双向数据绑定就样用的，在data里面设置，在template里面使用,可以再下边的method中修改
  //，修改之上面的模板的展示自动就换了
  data(){
    return {
      message: 'Hello 强哥!',
      defaultProps: {
          children: 'children',
          label: 'label'
        },
        dataMenu: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
    }
  },
  //在这里面写方法 
  methods: {
    handleNodeClick(data) {
        console.log(data);
      },
      open() {
        const h = this.$createElement;

        this.$notify({
          title: '标题名称',
          message: h('i', { style: 'color: teal'}, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案')
        });
      },

      open2() {
        this.$notify({
          title: '提示',
          message: '这是一条不会自动关闭的消息',
          duration: 0
        });
      }
  },
}
</script>
// 这个less是一个插件，这样的话写样式就好写一些，
// scoped表示以下样式只对这个页面的元素起作用，不会污染别的页面

<style lang="less" scoped>
  .box{
    width:500px;
    height:100px;
    border:solid 1px #eee;
    border-radius : 5px;
    background: #bdde95;
  }
</style>
