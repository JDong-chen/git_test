<template>
  <img :src='imgSrc' alt="vue.jpeg" ref="imgItem">
</template>
<script>
import { mapGetters } from 'vuex'


export default {
  computed: {
    ...mapGetters([
      'imgSrc'
    ])
  }
}
</script>
<style lang="less" scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0 5px 5px 0;
}
</style>
