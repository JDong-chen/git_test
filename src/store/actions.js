// 给action注册事件处理函数。当这个函数被触发时候，将状态提交到mutations中处理
export const modifyArticleData = ({ commit }, value) => {
  commit('modifyArticleData', value)
}
export const modifyImgSrc = ({ commit }, value) => {
  commit('modifyImgSrc', value)
}
// ES6精简写法
// export const modifyAName = ({commit},name) => commit('modifyAName', name)
