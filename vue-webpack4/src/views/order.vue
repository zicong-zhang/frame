<template>
  <div class="order">
    <h3>Test Order Page</h3>
    <h4 @click="toHome">to List</h4>
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
  h3 {
    color: $red;
  }
}
</style>
