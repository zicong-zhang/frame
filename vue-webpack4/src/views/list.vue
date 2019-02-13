<template>
  <div class="list">
    <h2>List Page</h2>
    <h3 @click="toOrder">To Order Page</h3>
  </div>
</template>

<script>
export default {
  name: 'list',
  methods: {
    toOrder() {
      this.$router.push('order')
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  h2 {
    color: #fc0;
    font-size: 50px;
  }
}
</style>
