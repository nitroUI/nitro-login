<template>
  <div>
  <label :for="inputName">{{description}}</label>
  <input v-if="inputType==='password'" type="password" v-model="text" :name="inputName"/>
  <input v-else type="text" v-model="text" :name="inputName"/>
  </div>
</template>

<script>
export default {
  props: ['inputName', 'description', 'inputType'],
  data () {
    return {
      text: null
    }
  }
}
</script>

<style lang="scss">
nitro-input {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
