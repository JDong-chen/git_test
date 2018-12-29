<template>
  <article >
    <h1>{{title}}</h1>
    <span>{{publish_time}}</span>
  </article>
</template>
<script>
export default {
  methods: {
   
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
  h1 {
    margin: 1px;
  }
  span {
    font-size: 0.7em;
    color: rgb(150, 150, 150);
  }
  
}
</style>

