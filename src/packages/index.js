// ? 所有组件的入口

import Button from './button/button'
import ButtonGroup from './button/button-group'
import Icon from './icon/icon.vue'

const install = (Vue) => {
  Vue.component(Button.name, Button)
  Vue.component(ButtonGroup.name, ButtonGroup)
  Vue.component(Icon.name, Icon)
}

// ! 有可能组件会通过script标签的方式引入 <script src="zy-ui"></script>
// todo 为了防止这种引入方式 自动触发 install方法
// if (typeof window.Vue !== 'undefined') {
//   install(Vue) // ? 全局直接通过script 引用的方式会默认调用install方法
// }

export default {
  install
}