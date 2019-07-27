<template>
  <div class="container">
    <div class>
      <h1>Memo Appだよ</h1>
      <div class="input_container">
        <p><input v-model="inputText" type="text"></p>
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


export default {
  components: {
    MemoList
  },
  data: () => ({
    memoContents: [],
    inputText: ""
  }),
  methods: {
    addMemo() {
      this.memoContents.push({
        text: this.inputText,
        date: new Date()
      })
      this.inputText = ""
    },
    // memoContensを消すものなのでindex.vueにあるべき
    // 子(MemoList.vueからの)のindexを受け取っている
    deleteMemo(index) {
      this.memoContents.splice(index,1)
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