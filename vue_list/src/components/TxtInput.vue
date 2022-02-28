<template>
<div>
  <h3>Input 공간</h3>
  <input type="text" v-model="keyword" placeholder="user name" @keydown.enter="submitTxt">
  <button @click="submitTxt">검색</button>
</div>
</template>

<script>
import { getUserList } from '@/api/api'
export default {
  data() {
    return {
      keyword:''
    }
  },
  methods: {
    async submitTxt() {
      const result = await getUserList(this.keyword);
      console.log(result);
      //avatar_url : 이미지
      //html_url : github url
    }
  },
}
</script>

<style>

</style>