<template>
  <div class="home">
    <content-img :img_src = 'img_src'></content-img>
    <article-list   ></article-list>
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
      img_src: require('../assets/images/vue.jpeg')
    }
  },
  
 
  components: {
    ContentImg,
    ArticleList,
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

