<template>
  <div class="zy-button-group" v-if="isBtnDom">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "zy-button-group",
  data() {
    return {
      isBtnDom: true
    };
  },
  mounted() {
    // ? 该组件元素只能是zy-button
    const children = this.$el.children;
    for (let index = 0; index < children.length; index++) {
      const element = children[index];
      if (element.tagName !== "BUTTON") {
        console.error("button-group of Child element must be button!");
        this.isBtnDom = false;
      }
    }
  }
};
</script>

<style lang="scss">
@import '../styles/_var.scss';
.zy-button-group {
  .zy-button {
    border-radius: 0;
    &:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      border-right-color: hsla(0, 0%, 100%, 0.5);
    }
    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      border-left-color: hsla(0, 1%, 70%, 0.5);
    }
    &:not(:last-child) {
      margin-right: -1px;
    }
    &:not(:first-child):not(:last-child) {
      border-left-color: hsla(0, 1%, 70%, 0.5);
      border-right-color: hsla(0, 1%, 70%, 0.5);
    }
    @each $type
      in (
        primary,
        success,
        warning,
        danger,
        info
      )
    {
      &-#{$type} {
        border-left-color: hsla(0, 0%, 100%, 0.5);
        border-right-color: hsla(0, 0%, 100%, 0.5);
      }
      &-#{$type}:last-child {
        border-left-color: hsla(0, 0%, 100%, 0.5);
      }
    }
  }
  .zy-button + .zy-button {
    margin-left: 0 !important;
  }
}
</style>