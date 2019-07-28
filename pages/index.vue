<template>
  <div class="container">
    <div class>
      <h1>Memo Appだよ</h1>
      <div class="input_container">
        <p>
          <input
           v-model="inputText"
           type="text"
            >
        </p>
        <button @click="addMemo()">Save</button>
      </div>
    </div>

    <!-- 閉じタグなし MemoListから来ているケバブケース -->
    <!-- HTMLの属性とJSの変数 -->
    <!-- @deleteは、ただのきっかけでscript内のdeleteMemoメソッドに伝えているだけ-->
    <memo-list
      :memo-contents="memoContents"
      @delete="deleteMemo()"
    />
  </div>
</template>
​
<script>
// MemoList.vueからimportしたら、exportdefaultの中にcompornentとして記述
import MemoList from '~/components/MemoList'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    MemoList
  },
  data: () => ({
    inputText: ""
  }),
  // 表示されるものがcomputed
  computed: {
    ...mapState({
      // どうindex.vueで呼ぶか宣言して、stateの中のmemo.jsの中のmemoContentsを参照
      memoContents: state => state.memo.memoContents
    }),
    // ...mapState('memo', ['memoContents'])
  },
  methods: {
    ...mapActions('memo', ['addMemoContents','deleteMemoContents']),
    addMemo() {
      // methods内の関数として呼び出し
      this.addMemoContents({
        text: this.inputText,
        date: new Date()
      })
      this.inputText = ""
    },
    // memoContensを消すものなのでindex.vueにあるべき
    // 子(MemoList.vueからの)のindexを受け取っている
    deleteMemo(index) {
      this.deleteMemoContents(index)
      // this.memoContents.splice(index,1)
    }
  }
}
</script>
​
<style>
.container {
  margin: 0 auto;
}
​
.input_container {
  display: flex;
}
</style>