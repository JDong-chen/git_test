<template>
  <div class="home">
    <content-img :img_src2="img_src1"></content-img>
    <article-list @changeImg="changeImg"></article-list>
  </div>
</template>

<script>
// @ 是 /src 的别名
import ContentImg from '@/components/ContentImg.vue'
import ArticleList from '@/components/ArticleList.vue'

export default {
  name: 'home',
  data () {
    return {
      img_src1: require('../assets/images/vue.jpeg')
    }
  },
  methods: {
    changeImg (article) {
      const timer = setTimeout(() => {
        if (timer) clearTimeout(timer)
        if (article.img) {
          this.img_src1 = require(`../article/${article.title}/${article.img}`)
        } else {
          this.img_src1 = require('../assets/images/vue.jpeg')
        }
      }, 500)
    }
  },
  components: {
    ContentImg,
    ArticleList
  }
}
</script>
<style lang="less" scoped>
.home{
  display: grid;
  grid-template-columns: 50% 50%;
  height: 90%;
  width: 100%;
}
</style>
