<template>
  <v-list>
    <template v-if="isEmptyList === false && totalCount > 0">
      <v-virtual-scroll :items="userList" :item-height="70" height="500">
        <template v-slot:default="{ index, item }">
          <v-list-item :href="item.html_url">
            <v-list-item-avatar>
              <v-img :src="item.avatar_url"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-html="item.login"></v-list-item-title>
              <v-list-item-subtitle v-html="item.html_url"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider v-if="index < userList.length-1"></v-divider>
        </template>
      </v-virtual-scroll>
      <!-- <infinite-loading
        @infinite="infiniteScrollHandler" >
      ></infinite-loading> -->
    </template>
    <template v-else-if="isEmptyList === true && totalCount === 0">
      <v-list-item>
        검색 결과가 없습니다.
      </v-list-item>
    </template>
  </v-list>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      userList : 'fetchedUserInfo',
      isEmptyList: 'fetchedIsEmptyList',
      totalCount: 'fetchedTotalCount',
      keyword: 'fetchedKeyword'
    })
  },
  // methods: {
  //   infiniteScrollHandler($state) {
  //     this.$store.dispatch('getUserList');
  //   }
  // },
}
</script>

<style>
  .v-list-item__content {
    margin-left: 0.5rem;
  }
</style>