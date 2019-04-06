import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    online:0
}

const mutations = {
    add(state,n){
        state.online += n;
    },
    reduce(state){
        if(state.online > 0){
            state.online--;
        }
    }
}

const getters = {
    online:function(state){
        return state.online += 100;
    }
}

export default new Vuex.Store({
    state,mutations,getters
})