<template>
  <button class="zy-button" :disabled="btnDisabled || loading" 
    @click="handleClick"
    :class="[
      btnClass,
      {
        'is-round':round,
        'is-disabled':btnDisabled,
        'is-circle':circle,
        'is-loading':loading
      }
    ]">
    <zy-icon icon="loading" class="zy-icon-loading icon" v-if="loading"></zy-icon>
    <zy-icon :icon="icon" v-if="icon && !loading" class="icon"></zy-icon>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "zy-button",
  props: {
    type: {
      type: String,
      default: "",
      // ? 如果type 传入的类型不符合 给与开发者错误提示信息
      validator(type) {
        const typeList = ["primary", "success", "warning", "danger", "info"];
        if (type && !typeList.includes(type)) {
          console.error(
            "type should be one of " +
              ["primary", "success", "warning", "danger", "info"].join(",")
          );
        }
        return true;
      }
    },
    iconPosition: {
      type:String,
      default:'left',
      validator (type) {
        const typeList = ['left','right']
        if (type && !typeList.includes(type)) {
          console.error(
            "type should be one of " +
              ["left", "right"].join(",")
          );
        }
        return true;
      }
    },
    icon: String,
    disabled: Boolean,
    round: Boolean,
    loading: Boolean,
    circle:Boolean
  },
  computed: {
    btnClass() {
      let classes = [];
      if (this.type) {
        classes.push(`zy-button-${this.type}`);
      }
      if (this.iconPosition) {
        classes.push(`zy-button-${this.iconPosition}`)
      }
      return classes;
    },
    btnDisabled () {
      return this.disabled
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click',evt)
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./button.scss";
</style>