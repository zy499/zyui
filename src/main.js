import Vue from 'vue'
import App from './App.vue'

// todo 引入zy-ui 并全局注册
import zyUi from './packages/index'
Vue.use(zyUi)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
