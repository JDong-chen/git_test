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
    overflow-y: auto;
    position: absolute;
    #artContent {
      width: 60%;
      position: absolute; 
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
    }
  }
  #artBack {
    position: absolute;
    bottom: 5%; 
    right: 5%; 
  }
}
</style>


