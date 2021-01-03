import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
// import 'lib-flexible/flexible.js'

let echart = require('echarts')
Vue.prototype.$echarts = echart
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(ViewUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
