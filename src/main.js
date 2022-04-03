import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'


const readLocalStorage = () => {

    let todoItems = [];

    for (let i = 0; i < localStorage.length; i++) { // localstorage에 저장된 데이터를 읽어온다.
        todoItems.push(localStorage.getItem(localStorage.key(i)));
    }

    return todoItems;
}

const store = createStore({
    state () {
      return {
        todoItems: readLocalStorage(),   // 화면에 표현 될 할일 리스트 배열
      }
    },
    mutations: {
        addTodoItem(state, todoInputData) {
            state.todoItems.push(todoInputData);
        },
        removeTodoItem(state, index) {
            state.todoItems.splice(index, 1);
        },
        removeAllTodoItem(state) {
            state.todoItems = [];
        }
    }
  })


const app = createApp(App);
app.use(store);
app.mount('#app')
