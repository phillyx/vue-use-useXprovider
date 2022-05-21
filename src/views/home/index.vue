<template>
  <div class="home-box">
   <p>car <el-button @click="onClick">set car</el-button></p>
   <p>brand: {{homeContext.car.brandName}}</p>
   <p>type: {{homeContext.car.type}}</p>
   <p>drivingMode: {{homeContext.car.drivingMode}}</p>
  </div>
  <div class="home-box">
    <el-checkbox
      v-for="(item, index) in arr"
      :key="item.label"
      :label="item.label"
      :checked="item.checked"
      @change="(value:any)=>{handleChange(index,item,value)}"
    ></el-checkbox>
    <div>
      <p v-for="(item, index) in arr">{{ item.label }} checked: {{ item.checked }}</p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { setHomeState, setHomeStateWithStr, useHomeContext } from './index.context'
import type { ICheckBox } from './index.context'

import { computed } from 'vue'

const homeContext = useHomeContext()
const arr = computed(() => homeContext.checkboxGroups)
const handleChange = (index: number, item: ICheckBox, value: boolean) => {
  //  setHomeStateWithStr(`checkboxGroups.${index}.checked`,value)
  // equal to
  setHomeState(`checkboxGroups.${index}.checked`, value)
}
const onClick = ()=>{
  setHomeStateWithStr('car.drivingMode','PHEV')
  setHomeState('car.type','SUV')
}
</script>
<style>
.home-box {
  border: 1px solid #dcdcdc;
  padding: 16px;
  margin-top: 12px;
  margin-bottom: 12px;
}
</style>
