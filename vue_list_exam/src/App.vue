<template>
  <div id="app">
    <TxtInput />
    <UserList />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TxtInput from './components/TxtInput.vue'
import UserList from './components/UserList.vue'

@Component({
  components: {
    TxtInput,
    UserList
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
