<template>
  <div id="app">
    <!-- 不带状态按钮 -->
    <zy-button>默认按钮</zy-button>
    <br />
    <br />
    <!-- 带状态按钮 -->
    <zy-button type="primary">主要按钮</zy-button>
    <zy-button type="success">成功按钮</zy-button>
    <zy-button type="warning">警告按钮</zy-button>
    <zy-button type="danger">危险按钮</zy-button>
    <zy-button type="info">信息按钮</zy-button>
    <br />
    <br />
    <!-- 带禁用的按钮 -->
    <zy-button type="primary" disabled>主要按钮</zy-button>
    <zy-button type="success" disabled>成功按钮</zy-button>
    <zy-button type="warning" disabled>警告按钮</zy-button>
    <zy-button type="danger" disabled>危险按钮</zy-button>
    <zy-button type="info" disabled>信息按钮</zy-button>
    <br />
    <br />
    <!-- 带圆角的按钮 -->
    <zy-button type="primary" round>主要按钮</zy-button>
    <zy-button type="success" round>成功按钮</zy-button>
    <zy-button type="warning" round>警告按钮</zy-button>
    <zy-button type="danger" round>危险按钮</zy-button>
    <zy-button type="info" round>信息按钮</zy-button>
    <br />
    <br />
    <!-- 圆的按钮 -->
    <zy-button type="primary" circle icon="search"></zy-button>
    <zy-button type="success" circle icon="question-circle-fill"></zy-button>
    <zy-button type="warning" circle icon="left"></zy-button>
    <zy-button type="danger" circle icon="right"></zy-button>
    <zy-button type="info" circle icon="twitter"></zy-button>
    <br />
    <br />
    <!-- 带图标的按钮 -->
    <zy-button type="primary" icon="search">主要按钮</zy-button>
    <zy-button type="success" icon="question-circle-fill">成功按钮</zy-button>
    <zy-button type="warning" icon="left">警告按钮</zy-button>
    <zy-button type="danger">危险按钮 <zy-icon icon="twitter"></zy-icon></zy-button>
    <zy-button type="info" icon="twitter">信息按钮</zy-button>
    <br />
    <br />
    <!-- 支持图标插入顺序 -->
    <zy-button type="primary" icon="search">主要按钮</zy-button>
    <zy-button type="success" icon="question-circle-fill" icon-position="right">成功按钮</zy-button>
    <br />
    <br />
    <!-- loading按钮 -->
    <zy-button type="primary" loading icon="search">加载中</zy-button>
    <br />
    <br />
    <!-- 事件 -->
    <zy-button type="primary" @click="fn">点击事件</zy-button>
    <br />
    <br />
    <!-- 按钮组 -->
    <zy-button-group>
      <zy-button type="primary" icon="left">上一页</zy-button>
      <zy-button type="primary" icon="right" icon-position="right">下一页</zy-button>
    </zy-button-group>
    <br />
    <zy-button-group>
      <zy-button icon="left">上一页</zy-button>
      <zy-button>中间</zy-button>
      <zy-button icon="right" icon-position="right">下一页</zy-button>
    </zy-button-group>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    fn() {
      alert(1)
    }
  }
}
</script>
<style lang="scss" scoped>
  #app {
    padding: 20px;
    .zy-button + .zy-button {
      margin-left: 10px;
    }
  }
</style>
