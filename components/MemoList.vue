<template>
  <div>
    <ul
      v-for="(item, index) in memoContents"
      :key="index"
    >
      <li>
        <span>{{ item.text }}</span>
        <span>{{ item.date | dateConvert}}</span>
        <!-- 2019-07-27 00:00  -->
        <button @click="handleDelete(index)">x</button>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  props: {
    memoContents: {
      type: Array,
      default: () => []
    }
  },
  // component内で完結するもの
  filters: {
    dateConvert: function (value) {
      const date = new Date(value)
      return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
    }
  },
  // 親のメソッドを発火させるためだけのもの
  methods: {
    //上記のクリックイベントのindexを受け取って$emitで親に受け渡す
    handleDelete(index) {
      this.$emit('delete', index)
    }
  }
}
</script>

<style>

</style>
