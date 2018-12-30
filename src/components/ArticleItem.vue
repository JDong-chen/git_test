<template>
  <article 
  @mouseenter="changeImg"
  @click="artClick"
  >
    <a href="#"><h1>{{title}}</h1></a>
    <span>{{publish_time}}</span>
  </article>
</template>
<script>
export default {
  methods: {
    changeImg () {
      this.$emit('changeImg')
    },
    artClick () {
      this.$emit('artClick')
    }
  },
  props: {
    title: String,
    publish_time: String
  }
}
</script>
<style lang="less" scoped>
article {
  padding: 10px;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration-line: none;
    h1 {
      margin: 1px;
    }
  }

  span {
    font-size: 0.7em;
    color: rgb(150, 150, 150);
  }

}
</style>
