<template>
  <article>
    <div id="art">
      <div id="artContent" v-html="articleData"></div>
    </div>
    <article-back id="artBack"></article-back>
  </article>
</template>
<script>
import ArticleList from '@/components/ArticleList.vue'
import ArticleBack from '@/components/ArticleBack.vue'
import { mapGetters } from 'vuex' 

export default {
  computed: {
    ...mapGetters([
      'articleData'
    ])
  },
  components: {
    ArticleList,
    ArticleBack
  }
}
</script>
<style lang="less" scoped>
article {
  height: 100%;
  width: 100%;
  position: relative;
  #art{
    height: 100%;
    width: 100%;
    overflow-y: scroll;
    position: absolute;
    #artContent {
      padding: 0 20%;
    }
  }
  #artBack {
    position: absolute;
  }
}
</style>


