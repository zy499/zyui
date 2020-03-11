<template>
  <svg class="zy-icon" aria-hidden="true">
    <use :xlink:href="`#icon-${icon}`" />
  </svg>
</template>

<script>
export default {
  name: "zy-icon",
  props: {
    icon: {
      type:String,
      required:true
    }
  },
  mounted () {
    import('./iconfont.js')
  }
};
</script>

<style lang="scss" scoped>
.zy-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>