import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  todoIndexCount: 1,
  todos: [
    {
      id: 1,
      date: '2018-03-18',
      text: '跟朋友吃飯',
      done: false
    }
  ]
}

const getters = {

}

const mutations = {
  addTodo (state, todo) {
    todo.id = ++state.todoIndexCount;

    state.todos.push(todo);
  }
}

const actions = {
  incrementAsync ({ commit }) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 200)
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
