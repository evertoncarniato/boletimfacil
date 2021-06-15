import Vue from 'vue'
import Vuex from 'vuex'

// import example from './module-example'
import dados from './dados'

Vue.use(Vuex)

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      // example
      dados
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING
  })

  if (process.env.DEV && module.hot) {
    module.hot.accept(['./dados'], () => {
      const newDados = require('./dados').default
      Store.hotUpdate({ modules: { dados: newDados } })
    })
  }

  return Store
}
