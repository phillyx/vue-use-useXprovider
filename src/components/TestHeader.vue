<template>
  <el-header class="test-header" style="background-color:#1d1e1f">
      <img alt="Vue logo" src="@/assets/logo.png" style="height:34px;margin-right: 8px;"/>
    <el-radio-group @change="handleRadioChange">
      <el-radio-button :label="false">expand</el-radio-button>
      <el-radio-button :label="true">collapse</el-radio-button>
    </el-radio-group>
  </el-header>
</template>
<script lang="ts" setup>
import { setRootStateWithStr } from '@/app.context'

const handleRadioChange = (val: any) => {
  setRootStateWithStr('menu.isCollapse',val)
}
</script>
<style>
.test-header{
  display: flex;
  align-items: center;
}
</style>