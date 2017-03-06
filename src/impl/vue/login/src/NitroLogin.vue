<template>
  <form v-on:submit.prevent="onSubmit">
  <nitro-input input-name="userName" description="User Name"></nitro-input>
  <nitro-input  input-name="password" input-type="password" description="Password"></nitro-input>
  <nitro-button v-on:clicked="login" text="Submit"></nitro-button>
  </form>
</template>

<script>
import NitroInput from './NitroInput.vue'
import NitroButton from './NitroButton.vue'
export default {
  components: {
    "nitro-input": NitroInput,
    "nitro-button": NitroButton
  },
  props: [],
  data () {
    return {

    }
  },
  methods: {
    login: function () {
      alert("I was clicked");
    },
    onSubmit: function () {
      alert("I stopped submitting");
    }
  }
}
</script>

<style lang="scss">
nitro-login {

}
</style>
