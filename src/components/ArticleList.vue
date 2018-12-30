<template>
  <ul id="artItemList">
    <article-item
    v-for="(item, index) in articles"
    :key="index"
    :title="item.title"
    :publish_time="item.mtime"
    @changeImg="changeImg(index)"
    @artClick="artClick(index)"
    ></article-item>
  </ul>
</template>
<style lang="less">
#artItemList {
  overflow: auto;
}
</style>

<script>
import ArticleItem from '@/components/ArticleItem.vue'
import axios from 'axios'
export default {
  name: 'itemList',
  data () {
    return {
      articles: []
    }
  },
  methods: {
    changeImg (index) {
      this.$store.dispatch('modifyImgSrc', require(`../article/${this.articles[index].title}/${this.articles[index].img}`))
    },
    artClick (index) {
      this.$store.dispatch('modifyArticleData', this.articles[index].fileData)
      this.$router.push('article')
    }
  },
  components: {
    ArticleItem
  },
  mounted () {
    axios({
      method: 'get',
      url: 'http://localhost:3000/articleList'
    })
      .then(res => {
        this.articles = res.data
        this.$store.dispatch('modifyArticleData', this.articles[0].fileData)
      })
      .catch(err => {
        if (err) return console.log(err)
      })
  }
}
</script>
