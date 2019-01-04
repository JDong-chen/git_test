<template>
  <div>
    <transition name="myfade">
      <article-content v-if="!!articleData"></article-content>
    </transition>
    <transition name="myfade">
      <div id="home" v-if="!articleData">
        <content-img id="conImg"></content-img>
        <article-list></article-list>
      </div>
    </transition>
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
@media screen and (min-width: 600px) {
  #home {
    display: grid;
    grid-template-columns: 50% 50%;
    height: 100%;
    width: 100%;
  }
}
@media screen and (max-width: 600px) {
   #home {
    height: 100%;
    width: 100%;
    overflow: auto;
    #conImg {
      display: none;
    }
  }
}
.myfade-enter-active {
  transition: opacity .5s linear
}
.myfade-enter {
  opacity: 0;
}
</style>
