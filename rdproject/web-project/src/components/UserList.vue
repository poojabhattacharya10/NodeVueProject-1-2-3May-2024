<template>
    <div>
        <h1>User List</h1>
    {{ usersList }}
    </div>
    <!-- <h1>User List</h1>
    {{ usersList }} -->
</template>


<script>
import axios from 'axios';



export default {
    name : 'UserList',
    data(){
        return{
            usersList : []
        }
    },
    // created() :: page load
    created() {
        this.getUsersList()
    },
    methods : {
        async getUsersList(){
            let result = await axios({
                method : 'get',
                url : 'http://localhost:3000/users/list'
            })
            console.log(result);
            this.usersList = result.data.data
        }
    }
}
</script>

<style >
    
</style>