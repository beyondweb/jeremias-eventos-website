import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        toggle: false,
    },
    mutations: {
        TOGGLE_CLICK(state, payload) {
            state.toggle = payload;
        },
    },
    actions: {
        toggleClick(context, payload) {
            context.commit("TOGGLE_CLICK", payload);
            console.log(this.state.toggle)
        },
    },
    modules: {},
});