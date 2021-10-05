import { createStore } from 'vuex'
import camelCase from 'lodash/camelCase'

const requireModule = require.context('.', false, /\.js$/) // extract js files inside modules folder
const modules = {}

requireModule.keys().forEach(fileName => {
  if (fileName === './index.js') return // reject the index.js file

  const moduleName = camelCase(fileName.replace(/(\.\/|\.js)/g, ''))

  modules[moduleName] = requireModule(fileName).default
})

const store = createStore({
  modules
})

for (const moduleName of Object.keys(modules)) {
  if (modules[moduleName].actions && modules[moduleName].actions.initStore) {
    store.dispatch(`${moduleName}/initStore`)
  }
}

export default store
