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
<script>
import ArticleItem from '@/components/ArticleItem.vue'
import{ mapGetters, mapActions } from 'vuex'

export default {
  name: 'itemList',
  data () {
    return {
      timer: null
    }
  },
  computed: {
    ...mapGetters([
      'articles'
    ])
  },
  methods: {
    changeImg (index) {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.$store.dispatch('modifyImgSrc', `./server/article/${this.articles[index].title}/${this.articles[index].img}`)
      },500)
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
<style lang="less">
#artItemList {
  overflow: auto;
  padding: 0 40px;
}
</style>
