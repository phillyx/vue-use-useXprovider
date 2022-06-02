<template>
  <p>status: {{ demoContext.status }}</p>
  <p>foo.bar.a {{ demoContext.foo.bar.a }}</p>
  <button @click="onclick">setSate</button>
  <button @click="onClick1">setStateWithStr</button>
</template>
<script lang="ts" setup>
import { useDemoContext, setDemoState, setDemoStateWithStr } from './demo.context'

const demoContext = useDemoContext()

const onclick = () => {
  setDemoState({ status: true })
}
const onClick1 = () => {
  setDemoState('foo.bar.a', 'hello world')

  setTimeout(() => {
    // equal to
    setDemoStateWithStr('foo.bar.a','hello')
  }, 3e3);
}
</script>
