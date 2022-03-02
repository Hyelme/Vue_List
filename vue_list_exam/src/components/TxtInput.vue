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

<script>
export default {
    computed: {
        keyword: {
            get() {
                return this.$store.getters.fetchedKeyword
            },
            set(value) {
                this.$store.commit('fetchKeyword', value)
            }
        }
    },
    methods: {
        searchUserList() {
            this.$store.dispatch('getUserList');
        }
    },
}
</script>