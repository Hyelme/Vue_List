<template>
  <div>
      <input type="text" v-model="keyword" placeholder="user name" @keydown.enter="test">
      <button @click="test">검색</button>
  </div>
</template>

<script>
// import { getUserList } from '@/api/api'
export default {
    data() {
        return {
            keyword:''
        }
    },
    methods: {
        test() {
            this.$store.dispatch('getUserList', this.keyword);
            //avatar_url : 프로필 이미지
            //html_url : github url
        }
    },
}
</script>