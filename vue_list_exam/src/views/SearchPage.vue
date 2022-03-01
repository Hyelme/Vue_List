<template>
    <div>
        <h1>Github API Example</h1>
        <TxtInput />
        <UserList />
    </div>
</template>

<script>
import TxtInput from '@/components/TxtInput'
import UserList from '@/components/UserList'

export default {
    components: {
        TxtInput,
        UserList
    }    
}
</script>