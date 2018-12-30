<template>
  <article id="art">
    <div id="artContent" v-html="getArticleData" v-once></div>
  </article>
</template>
<script>
export default {
  computed: {
    getArticleData () {
      console.log(this.$store.getters)
      return this.$store.getters.articleData
    }
  }
}
</script>
<style lang="less" scoped>
#art{
  height: 100%;
  overflow: scroll;
  #artContent {
    padding: 0 20%;
  }
}
</style>


