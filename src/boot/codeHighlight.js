import { component as VueCodeHighlight } from 'vue-code-highlight'

export default async ({ Vue }) => {
  Vue.component('vue-code-highlight', VueCodeHighlight)
}
