<template>
  <ul>
    <article-item 
    v-for="(item, index) in ariticles" 
    :key="index" 
    :title="item.title" 
    :publish_time="item.mtime" 
    ></article-item>
  </ul>
</template>
<script>
import ArticleItem from '@/components/ArticleItem.vue'
import axios from 'axios'
export default {
  name: 'itemList',
  data () {
    return {
      ariticles:[]
    }
  },
  methods: {
  
  },
  components: {
    ArticleItem
  },
  mounted () {
    axios({
      method:'get',
      url: 'http://localhost:3000/articleList',
    })
    .then(res => {
      this.ariticles = res.data
      console.log(this.ariticles)
    })
    .catch(err => {
      if(err) return console.log(err)
    })
  }
}
</script>

