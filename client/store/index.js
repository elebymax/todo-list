import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  todoIndexCount: 2,
  editUid: 0,
  todos: [
    {
      id: 1,
      date: '2018-03-18',
      text: '跟朋友吃飯',
      done: false
    },
    {
      id: 2,
      date: '2018-03-18',
      text: '跟朋友吃飯2',
      done: false
    }
  ]
}

const getters = {
  todosByDate: (state) => (date) => {
    let todos = [];

    for(let i=0; i<state.todos.length; i++) {
      const item = state.todos[i];
      if (item.date === date) {
        todos.push(item);
      }
    }

    return todos;
  },
  doneTodosByDate: (state) => (date) => {
    let todos = [];

    for(let i=0; i<state.todos.length; i++) {
      const item = state.todos[i];
      if (item.date === date && item.done === true) {
        todos.push(item);
      }
    }

    return todos;
  },
  undoneTodosByDate: (state) => (date) => {
    let todos = [];

    for(let i=0; i<state.todos.length; i++) {
      const item = state.todos[i];
      if (item.date === date && item.done === false) {
        todos.push(item);
      }
    }

    return todos;
  },
  todoById: (state) => (id) => {
    let todos = [];

    for(let i=0; i<state.todos.length; i++) {
      const item = state.todos[i];
      if (item.id === id) {
        return item;
      }
    }
  },
  editUid: (state) => {
    return state.editUid;
  }
}

const mutations = {
  addTodo (state, todo) {
    todo.id = ++state.todoIndexCount;

    state.todos.push(todo);
  },
  removeTodo (state, id) {
    for(let i=0; i<state.todos.length; i++) {
      const item = state.todos[i];
      if (item.id === id) {
        state.todos.splice(i, 1);
        return;
      }
    }
  },
  toggleTodo (state, id) {
    for(let i=0; i<state.todos.length; i++) {
      const item = state.todos[i];
      if (item.id === id) {
        item.done = !item.done;
        return;
      }
    }
  },
  updateTodo (state, todo) {
    for(let i=0; i<state.todos.length; i++) {
      const item = state.todos[i];
      if (item.id === todo.id) {
        item.date = todo.date;
        item.text = todo.text;
        return;
      }
    }
  },
  setEditUid (state, uid) {
    state.editUid = uid;
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
