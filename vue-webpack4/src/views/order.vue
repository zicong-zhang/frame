<template>
  <div class="order">
    <h2>Order Page</h2>
    <button @click="toHome">To List</button>
  </div>
</template>

<script>
export default {
  name: 'order-page',
  methods: {
    toHome() {
      this.$router.push('/');
    }
  }
}
</script>

<style lang="scss" scoped>
.order {
    display: flex;
    flex-flow: column;
    align-items: center;
    h2 {
      color: $red;
      font-size: 50px;
      padding: 24px 0;
    }
    button {
      height: 44px;
      border-radius: 8px;
      color: #fff;
      padding: 0 10px;
    }
  }
</style>
