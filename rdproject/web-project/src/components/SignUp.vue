<template>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  </head>
  <div class="container">
    <div class="alert bg-success my-3 ">
        <h4 class="text-center" style="color: aliceblue;"> Create Your Account </h4>
    </div>
</div>
    <div class="container">
        <div class="row">
            <div class="col"></div>
            <div class="col">
                <!-- <form action="/user/signup" method="post"> -->
                    <div class="field my-3">
                        <label for="" class="form-label">First Name</label>
                        <input type="text" class="form-control" v-model="firstname" placeholder="Enter First Name">
                    </div>
                    <div class="field my-3">
                        <label for="" class="form-label">Last Name</label>
                        <input type="text" class="form-control" v-model="lastname" placeholder="Enter Last Name">
                    </div>
                    <div class="field my-3">
                        <label for="" class="form-label">Email</label>
                        <input type="text" class="form-control" v-model="email" placeholder="Enter Email Id">
                    </div>
                    <div class="field my-3">
                        <label for="" class="form-label">Password</label>
                        <input type="password" class="form-control" v-model="password" placeholder="Enter Password">
                    </div>
                    <!-- <input type="submit" value="Signup" class="btn btn-warning my-3 w-100"> -->
                    <button @click="addUser()">Create User</button>
                <!-- </form> -->
            </div>
            <div class="col"></div>
        </div>
    </div>


</template>


<script>
import axios from 'axios'

import router from '@/router'

    export default {
        name : 'SignUp',
        data(){
            return {
                firstname : '',
                lastname : '',
                email : '',
                password : ''
            }
        },
        methods : {
            async addUser() {
                try {
                    // alert(this.name)
                    let data = {
                        firstname : this.firstname,
                        lastname : this.lastname,
                        email : this.email,
                        password : this.password
                    }
                    let result = await axios({
                        method : 'post',
                        url : 'http://localhost:3000/user/create',
                        data : data
                    })
                    console.log(result , 'Result from server ... ');
                    if(result.data.success){
                        router.push({ 'path' : '/userlist'})
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        }
    }
</script>