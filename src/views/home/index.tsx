import { defineComponent } from "vue"
import { providerFoundation  } from "./index.context";
import Home from './index.vue'
export default defineComponent({
  setup() {
    return () => (
      <providerFoundation.ProviderComponent>
        <Home></Home>
      </providerFoundation.ProviderComponent>
    )
  },
})