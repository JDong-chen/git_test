<template>
  <article 
  @mouseenter="changeImg"
  @click="artClick"
  >
    <a href="#"><h1>{{title}}</h1></a>
    <span>{{publish_time}}</span>
    <hr/>
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
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  &:hover {
    background-color: rgba(167, 233, 206, 0.938)
  }
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
