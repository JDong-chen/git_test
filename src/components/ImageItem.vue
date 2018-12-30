<template>
  <img :src='getImgSrc' alt="vue.jpeg" ref="imgItem">
</template>
<script>
export default {
  computed: {
    getImgSrc () {
      return this.$store.getters.imgSrc
    }
  }
}
</script>
<style lang="less" scoped>
img {
  width: 100%;
  height: 100%;
}
</style>
