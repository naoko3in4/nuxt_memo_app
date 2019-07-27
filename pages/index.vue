<template>
  <div class="container">
    <div class>
      <h1>Memo Appだよ</h1>
      <div class="input_container">
        <p><input v-model="inputText" type="text"></p>
        <button @click="addMemo()">Save</button>
      </div>
    </div>
    <ul
      v-for="(item, index) in memoList"
      :key="index"
    >
      <li>
        <span>{{ item.text }}</span>
        <span>{{ item.date | dateConvert}}</span>
        <!-- 2019-07-27 00:00  -->
        <span @click="deleteMemo(index)">x</span>
      </li>
    </ul>
  </div>
</template>
​
<script>
export default {
  data: () => ({
    memoList: [],
    inputText: ""
  }),
  filters: {
    dateConvert: function (value) {
      const date = new Date(value)
      return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
    }
  },
  methods: {
    addMemo() {
      this.memoList.push({
        text: this.inputText,
        date: new Date()
      })
      this.inputText = ""
    },
    deleteMemo(index) {
      this.memoList.splice(index,1)
    }
  }
}
</script>
​
<style>
.container {
  margin: 0 auto;
  /* min-height: 100vh;
  display: flex; */
  /* justify-content: center; */
  /* align-items: center;
  text-align: center; */
}
​
.input_container {
  display: flex;
}
</style>