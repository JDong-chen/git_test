// 提交 mutations是更改Vuex状态的唯一合法方法
export const modifyImgSrc = (state, value) => {
  state.imgSrc = value // 把方法传递过来的参数，赋值给state的img_src
}
export const modifyArticles = (state, value) => {
  state.articles = value
}
export const modifyArticleData = (state, value) => {
  state.articleData = value
}
