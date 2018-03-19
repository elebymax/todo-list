import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'

Vue.use(Vuex)

const state = {
  todoIndexCount: 6,
  editUid: 0,
  todos: [
    {
      id: 1,
      date: '2018-03-16',
      text: '繞國父紀念館跑10圈',
      done: false
    },
    {
      id: 2,
      date: '2018-03-16',
      text: '跟黃小明吃飯',
      done: true
    },
    {
      id: 3,
      date: '2018-03-16',
      text: '開源社社團活動',
      done: true
    },
    {
      id: 4,
      date: '2018-03-18',
      text: '背100個單字',
      done: false
    },
    {
      id: 5,
      date: '2018-03-18',
      text: '忠孝東路走九遍',
      done: false
    },
    {
      id: 6,
      date: '2018-03-18',
      text: '晚上 6:00 去聽音樂會',
      done: true
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
  },
  isDoneDateArr: (state) => (isDone) => {
    let dateArr = [];
    const doneArr = _.filter(state.todos, { done: isDone });
    const uniqArr = _.uniqBy(doneArr, 'date');
    const sortedArr = _.sortBy(uniqArr, function(o) { return o.date; });

    _.forEach(sortedArr, function(o) { return dateArr.push(o.date) });

    return dateArr.reverse();
  },
  todoIndexCount: (state) => {
    return state.todoIndexCount;
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
  },
  removeDoneTodoByDate (state, date) {
    for(let i=state.todos.length-1; i>=0; i--) {
      const item = state.todos[i];
      if (item.date === date && item.done === true) {
        state.todos.splice(i, 1);
      }
    }
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
