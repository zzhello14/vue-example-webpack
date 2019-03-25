import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    online:0
}

const mutations = {
    add(state){
        state.online++;
    },
    reduce(state){
        if(state.online > 0){
            state.online--;
        }
    }
}

export default new Vuex.Store({
    state,mutations
})