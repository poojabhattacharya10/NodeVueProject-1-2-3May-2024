import { createRouter, createWebHistory } from "vue-router";
import SignUp from "./components/SignUp.vue";
import BookList from "./components/BookList.vue";
import UserList from "./components/UserList.vue";


const routes = [
    {
        path : '/signup',
        component : SignUp
    },
    {
        path : '/book/create',
        component : BookList
    },
    {
        path : '/userlist',
        component : UserList
    }
]


const router = createRouter({
    history : createWebHistory(),
    routes : routes
})

export default router
