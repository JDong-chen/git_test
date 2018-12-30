<template>
  <img :src='img_src3' alt="vue.jpeg" ref="imgItem">
</template>
<script>
export default {
  props: {
    img_src3: String
  }
}
</script>
<style lang="less" scoped>
img {
  width: 100%;
  height: 100%;
}
</style>
