<script lang="ts">
export default {
  name: 'App',
}
</script>
<script setup lang="ts">
import TestHeader from './components/TestHeader.vue'
import TestMenu from './components/TestMenu.vue'
import HelloWorld from './components/HelloWorld.vue'
import Home from './views/home'
</script>

<template>
  <el-main style="--el-main-padding: 0">
    <TestHeader></TestHeader>
    <el-container>
      <test-menu></test-menu>
      <div style="padding:20px">
        <HelloWorld msg="hello world"></HelloWorld>
        <Home></Home>
      </div>
    </el-container>
  </el-main>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
}
</style>
