<template>
  <div class="userListContainer">
    <div v-if="isEmptyList === true && totalCount === 0">
      검색 결과가 없습니다.
    </div>
    <div v-else-if="isEmptyList === false && totalCount > 0">
      <div v-for="(user, idx) in userList" :key="idx" class="listContainer">
        <div class="listUserAvatarImg">
          <img :src="user.avatar_url">
        </div>
        <div class="listUserInfo">
          <div class="userName">{{user.login}}</div>
          <hr>
          <div class="userPage">{{user.html_url}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      userList : 'fetchedUserInfo',
      isEmptyList: 'fetchedIsEmptyList',
      totalCount: 'fetchedTotalCount',
    })
  },
}
</script>

<style>
  hr {
    width: 100%;
  }

  .userListContainer {
    margin-top: 1rem;
  }

  .listContainer {
    width: 450px;
    position: relative;
    border: 1px solid gray;
    margin: 0.5rem 0;
  }

  .listUserAvatarImg {
    width: 20%;
    position: relative;
    display: inline-block;
  }

  .listUserAvatarImg > img {
    width: 100%;
    position: relative;
  }

  .listUserInfo {
    width: 79.5%;
    display: inline-block;
    position: absolute;
  }

  .listUserInfo > div {
    font: 25px;
    padding: 6px 10px;
  }
</style>