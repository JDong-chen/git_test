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
  width: 120px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  background-color: #42b983;
  cursor: pointer;
  user-select: none;
  margin-top: 160px;
  margin-left: 50px;
}
</style>


