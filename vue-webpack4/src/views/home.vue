<template>
  <div class="home">
    <b-header />
    <h2 class="bb">{{ h2 }}</h2>
    <i class="i i-ios-pricetags"></i>
    <h3 class="aa">My position is fixed</h3>
    <button
      v-button
      @click="toList"
    >{{ p }}</button>
    <div
      v-button
      class="sub-img"
    ></div>
    <img src="../assets/img/home/6.jpg" />
    <img src="~@img/2.jpg" />
    <img src="../assets/img/home/6.jpg" />
    <img src="~@img/2.jpg" />
    <img src="../assets/img/home/6.jpg" />
    <img src="~@img/2.jpg" />
    <b-footer />
  </div>
</template>

<script>
  import { CHANGE_ROUTER_TRANSITION } from "@vuex/mutation-types";
  import { mapMutations } from "vuex";

  export default {
    name: "home",
    data() {
      return {
        h2: "HOME PAGE",
        p: "Click me to the ListRouter!!!",
        opt: {
          name: "name",
          age: "age"
        }
      };
    },
    created() {},
    methods: {
      ...mapMutations({
        CHANGE_ROUTER_TRANSITION: `root/${CHANGE_ROUTER_TRANSITION}`
      }),
      toList() {
        this.CHANGE_ROUTER_TRANSITION("route-in");
        this.$router.push("list");
      }
    }
  };
</script>

<style lang="scss">
  .home {
    line-height: 1;
    overflow: hidden;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
    * {
      padding: 0;
      margin: 0;
    }
    h2 {
      // color: #8c8c8c;
      text-align: center;
      padding: 12px 0;
    }
    .aa {
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 12;
      color: #fff;
    }
    button {
      height: 44px;
      border-radius: 8px;
      color: #fff;
      padding: 0 10px;
      margin: 24px 0;
    }
  }
  .bb {
    color: $yellow;
    font-size: 40px;
    font-family: "arial";
  }
  .bg-img,
  .sub-img {
    width: 100%;
    height: 300px;
  }
  .sub-img {
    background: url(~@img/home/sub/2.jpg);
    background-size: contain;
  }
</style>
