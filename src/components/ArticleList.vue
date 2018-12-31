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
import{ mapGetters, mapActions } from 'vuex'

export default {
  name: 'itemList',
  computed: {
    ...mapGetters([
      'articles'
    ])
  },
  methods: {
    changeImg (index) {
      this.$store.dispatch('modifyImgSrc', require(`../article/${this.articles[index].title}/${this.articles[index].img}`))
    },
    artClick (index) {
      this.$store.dispatch('modifyArticleData', this.articles[index].fileData)
    }
  },
  components: {
    ArticleItem
  },
}
</script>
