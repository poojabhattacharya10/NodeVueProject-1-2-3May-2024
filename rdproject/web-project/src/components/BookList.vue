<template>

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Bootstrap demo</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    </head>

    <div class="container">
        <div class="alert bg-success my-3">
            <h4 class="text-center" style="color:aliceblue" >Book List</h4>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col"></div>

            <div class="col">

                <div class="field my-3">
                    <label for="" class="form-label" >Book Name</label>
                    <input type="text" class="form-control" v-model="bookName" placeholder="Enter Book Name">
                </div>

                <div class="field my-3">
                    <label for="" class="form-label" >Book Code</label>
                    <input type="text" class="form-control" v-model="bookCode" placeholder="Enter Book Code">
                </div>

                <div class="field my-3">
                    <label for="" class="form-label" >Book Title</label>
                    <input type="text" class="form-control" v-model="bookTitle" placeholder="Enter Book Title">
                </div>

                <div class="field my-3">
                    <label for="" class="form-label" >Author Name</label>
                    <input type="text" class="form-control" v-model="authorName" placeholder="Enter Author Name">
                </div>

                <div class="field my-3">
                    <label for="" class="form-label" >ISBN Number</label>
                    <input type="text" class="form-control" v-model="isbnNumber" placeholder="Enter ISBN Number">
                </div>

                <div class="field my-3">
                    <label for="" class="form-label" >Price</label>
                    <input type="text" class="form-control" v-model="price" placeholder="Enter Price">
                </div>

                <div class="field my-3">
                    <label for="" class="form-label" >Published Date</label>
                    <input type="text" class="form-control" v-model="publishedDate" placeholder="Enter Published Date">
                </div>

                <div class="field my-3">
                    <label for="" class="form-label" >Sample Copy</label>
                    <input type="text" class="form-control" v-model="sampleCopy" placeholder="Enter Sample Copy">
                </div>

                <div class="field my-3">
                    <label for="" class="form-label" >IsPurchaseable</label>
                    <input type="text" class="form-control" v-model="isPurchaseable" placeholder="Enter IsPurchaseable">
                </div>

                <button @click="addBook()"> Create Book </button>

            </div>

            <div class="col"></div>
        </div>
    </div>

    <!-- <h1>Book List</h1> -->
</template>

<script>

    import axios from 'axios'


    export default {
        name : 'BookList',
        data(){
            return{
                bookName : '',
                bookCode : '',
                bookTitle : '',
                authorName : '',
                isbnNumber : '',
                price : '',
                publishedDate : '',
                sampleCopy : '',
                isPurchaseable : ''
            }
        },
        methods : {
            async addBook(){
                try {
                    let data = {
                        bookName : this.bookName,
                        bookCode : this.bookCode,
                        bookTitle : this.bookTitle,
                        authorName : this.authorName,
                        isbnNumber : this.isbnNumber,
                        price : this.price,
                        publishedDate : this.publishedDate,
                        sampleCopy : this.sampleCopy,
                        isPurchaseable : this.isPurchaseable
                    }
                    await axios({
                        method : 'post',
                        url : 'http://localhost:3000/book/create',
                        data : data
                    })
                } catch (error) {
                    console.log(error);
                }
            }
        }
    }
</script>

<style>
    h1{
        color : red
    }
</style>


<!-- <input type="radio" v-model="isPurchaseable">Yes
<input type="radio" v-model="isPurchaseable">No -->