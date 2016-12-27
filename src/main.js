import Vue from 'vue'
import App from './App'
import store from './store'

import 'jquery'
import 'bootstrap-loader'

new Vue({
  store,
  el: '#app',
  components: { App },
  render: h => h(App)
})
