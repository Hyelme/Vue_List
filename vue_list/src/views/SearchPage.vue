<template>
    <div>
        <h1>Vue.js List</h1>
        <TxtInput />
        <UserList />
    </div>
</template>

<script>
import TxtInput from '@/components/TxtInput.vue'
import UserList from '@/components/UserList.vue'
export default {
  components: {
    TxtInput,
    UserList
  }
}
</script>

<style>

</style>