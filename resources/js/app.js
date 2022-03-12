/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require("vue").default;

import VueRouter from "vue-router";
import Vuex from "vuex";
import routes from './routes'
import StoreData from './store';

Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store(StoreData);

const router = new VueRouter({
    mode: "history",
    routes,
    store
});

const app = new Vue({
    el: '#app',
    router,
});