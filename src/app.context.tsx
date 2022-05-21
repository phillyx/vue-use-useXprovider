import App from './App.vue'
import { useXProvider } from '@/hooks/useXprovider'
import { defineComponent } from 'vue'

interface IRootState {
  menu: {
    isCollapse: boolean
  }
  loading: boolean
  count: number
  action: {
    increase: VoidFunction
  }
}

const state: IRootState = {
  menu: {
    isCollapse: false,
  },
  loading: false,
  count: 0,
  // unrecommend
  action: {
    increase() {
      rootState.count += 1
    },
  },
}

const providerFoundation = useXProvider<IRootState>(state, 'AppRootContext.Provider', Symbol('root'))

export const setRootState = providerFoundation.setState
export const setRootStateWithStr = providerFoundation.setStateWithStr
export const rootState = providerFoundation.state as IRootState
export const useRootContext = providerFoundation.useContext

export default defineComponent({
  setup() {
    return () => (
      <providerFoundation.ProviderComponent>
        <App></App>
      </providerFoundation.ProviderComponent>
    )
  },
})
