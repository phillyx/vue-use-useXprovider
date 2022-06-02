import { useXprovider } from 'use-x-provider'
import { defineComponent } from 'vue'
import DemoApp from './Demo.vue'

interface IDemoState{
  status: boolean
  foo: {
    bar: {
      a: string
    }
  }
}
const demoState = {
  status: false
} as IDemoState

const DemoContext = useXprovider<IDemoState>(demoState)

export const setDemoState = DemoContext.setState
export const setDemoStateWithStr = DemoContext.setStateWithStr
export const useDemoContext = DemoContext.useContext

export default defineComponent({
  setup() {
    return () => (
      <DemoContext.ProviderComponent>
        <DemoApp></DemoApp>
      </DemoContext.ProviderComponent>
    )
  },
})