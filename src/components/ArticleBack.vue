<template>
  <div id="artBack" @click="artBack">返回</div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    artBack () {
      this.$store.dispatch('modifyArticleData',undefined)
    }
  }
}
</script>
<style lang="less" scoped>
#artBack {
  width: 15%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background-color: rgba(60, 65, 64, 0.082);
  cursor: pointer;
  user-select: none;
  margin-left: 10px;
  border-radius: 5px;
  &:hover {
    background-color: rgba(167, 233, 206, 0.938)
  }
}
</style>


