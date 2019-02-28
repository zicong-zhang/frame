<template>
  <div class="list">
    <h2>List Page</h2>
    <button
      v-button
      @click="toOrder"
    >To Order Page</button>
    <div class="placeholder"></div>
  </div>
</template>

<script>
  export default {
    name: "list",
    methods: {
      toOrder() {
        this.$router.push("order");
      }
    }
  };
</script>

<style lang="scss" scoped>
  .list {
    display: flex;
    flex-flow: column;
    align-items: center;
    h2 {
      color: #fc0;
      font-size: 50px;
      padding: 24px 0;
    }
    button {
      height: 44px;
      border-radius: 8px;
      color: #fff;
      padding: 0 10px;
    }
    .placeholder {
      height: 2000px;
    }
  }
</style>
