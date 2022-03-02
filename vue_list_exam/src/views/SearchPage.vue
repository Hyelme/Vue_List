<template>
    <v-container fluid >
        <v-card max-width="450" height="700" class="mx-auto my-12">
            <v-toolbar color="cyan" dark>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
                <v-toolbar-title>Github API Search Users</v-toolbar-title>
                <v-spacer></v-spacer>
            </v-toolbar>
            <TxtInput />
            <UserList />
        </v-card>
    </v-container>
</template>

<script>
import TxtInput from '@/components/TxtInput'
import UserList from '@/components/UserList'

export default {
    components: {
        TxtInput,
        UserList
    },
    beforeCreate() {
        this.$store.commit('fetchPerPage', 20);
        // this.$store.commit('fetchCurrentPage', 0);
    },
}
</script>