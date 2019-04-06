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

/**
 * 这里的方法是异步执行的，测试时可先单击异步增加，再单击同步增加，可看到效果
 */
const actions = {
    // 注意所接收的参数的不同
    addAction(context){
        // 调用mutations的方法
        context.commit('add',10);
        // 延迟执行reduceAction
        setTimeout(() => {
            context.commit('reduce')
        }, 3000);
        console.log('我比reduce先执行')
    },
    reduceAction(commit){
        commit('reduce');
    }
}

export default new Vuex.Store({
    state,mutations,getters,actions
})