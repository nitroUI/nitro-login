import Vue from 'vue'
import NitroLogin from './NitroLogin.vue';

// dynamic import statements could be used to generate the components inside
// the  vue statement below.  If I want to use button, grid, and header, these would be imported
// And generated to the vue build file to be used.
// This main.js file needs to sit as the build file for vue.

//TODO: This piece should be part of the top level bundle and extracted.  Only should mount vue one time.
new Vue({
  el: 'div',
  components: {
    "nitro-login": NitroLogin,
  }
});
