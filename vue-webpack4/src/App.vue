<template>

  <div id="app" v-cloak>
    <h1>{{ msg }}</h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      msg: 'Test'
    }
  },
  created() {
    console.log([1, 2, 3333].includes(2));
    this.cc();

    const a = { name: 'test' };
    const b = {
      age: 18,
      ...a
    }
    console.log(b);
  },
  methods: {
    async cc() {
      const p = await this.aa();
      console.log('p:_____', p);
    },
    aa() {
      return new Promise(res => {
        console.log('Promise');
        setTimeout(() => {
          res(this.msg.padStart(15, '77777777777777777777777777'));
        }, 2000);
      })
    }
  }
}
</script>

<style lang="scss">
#app {
  overflow: hidden;
}
h1 {
  color: #39f;
  text-align: center;
}
</style>
