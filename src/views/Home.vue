<template>
  <div>
    <article-content v-show="articleData"></article-content>
    <div id="home" v-show="!articleData">
      <content-img></content-img>
      <article-list></article-list>
    </div>
  </div>
</template>

<script>
// @ 是 /src 的别名
import ContentImg from '@/components/ContentImg.vue'
import ArticleList from '@/components/ArticleList.vue'
import ArticleContent from '@/components/ArticleContent.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  computed: {
    ...mapGetters([
      'articleData'
    ])
  },
  components: {
    ContentImg,
    ArticleList,
    ArticleContent
  },
}
</script>
<style lang="less" scoped>
#home{
  display: grid;
  grid-template-columns: 50% 50%;
  height: 100%;
  width: 100%;
}
</style>
