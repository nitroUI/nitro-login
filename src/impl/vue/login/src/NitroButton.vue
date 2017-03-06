<template>
  <button v-on:click="clicked">{{text}}</button>
</template>

<script>
export default {
  props: ['text'],
  data () {
    return {

    }
  },
  methods: {
    clicked: function() {
      this.$emit('clicked');
    }
  }
}
</script>

<style lang="scss">
nitro-button {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
