import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

const state ={
    message:'Hello',
    username:'emresen'
};

const getters ={};
//state değiştirmek için mutation a ihtiyacım var
const mutations ={};
//mutation yalnız kullanılmıyor her mutation ı bir action göndermiş oluyor
const actions ={};

const store =new Vuex.Store({

    state,getters,mutations,actions

})


export default store;