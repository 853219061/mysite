import Vue from 'vue';
import VueRouter from "vue-router"
import routes from '@/router/routes.js';
Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode:'hash'
})


export default router;