<template>
    <v-col>
        <v-text-field
            v-model="keyword"
            label="user name" 
            :append-outer-icon="keyword?'mdi-send':''"
            @keydown.enter="searchUserList"
            @click:append-outer="searchUserList"
        ></v-text-field>
    </v-col>
</template>

// <script lang="ts">
// import Vue from 'vue';
// import { Component } from 'vue-property-decorator'

// @Component
// export default class TxtInput extends Vue{
//     computed: {
//         keyword: {
//             get():string {
//                 return this.$store.getters.fetchedKeyword;
//             },
//             set(value):void {
//                 this.$store.commit('fetchKeyword', value);
//             }
//         }
//     },
//     methods: {
//         searchUserList(this:Vue):void {
//             this.$store.dispatch('getUserList');
//         }
//     },
// }
// </script>