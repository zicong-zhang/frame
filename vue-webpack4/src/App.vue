<template>
  <div
    id="app"
    v-cloak
  >
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";

  export default {
    name: "app",
    data() {
      return {
        msg: "Test"
      };
    },
    computed: {
      ...mapGetters({
        routeTransitionName: "root/name"
      })
    },
    watch: {
      $route(to, from) {
        console.log('to, from:_____', to, from);
      }
    },
    created() {
      console.log([1, 2, 3333].includes(2));
      this.asyncFn();

      const a = { name: "test" };
      const b = {
        age: 18,
        ...a
      };
      console.log(b);
    },
    methods: {
      async asyncFn() {
        const p = await this.promiseFn();
      },
      promiseFn() {
        return new Promise(res => {
          setTimeout(() => {
            res(this.msg.padStart(15, "777777777777777"));
          }, 2000);
        });
      }
    }
  };
</script>

<style lang="scss">
  h1 {
    color: #39f;
    text-align: center;
  }
</style>
