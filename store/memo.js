// state データの保管庫
export const state = () => ({
  memoContents: []
})

//mutations データを更新できる
export const mutations = {
  //引数に state と書く memo は actions から渡される
  updateMemoContents(state, memo) {
    state.memoContents.push(memo)
  },
  deleteMemoItem(state, index) {
    state.memoContents.splice(index,1)
  }
}

//actions mutationsを発動する
export const actions = {
  // { commit }と書くことでmutationsに渡せる
  // index.vueからのmemoDateを受け取ってから mutationsにcommit
  addMemoContents({ commit }, memoData) {
    commit('updateMemoContents', memoData)
  },
  deleteMemoContents({ commit }, index) {
    commit('deleteMemoItem', index)
  }
}