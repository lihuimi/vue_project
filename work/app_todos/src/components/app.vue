<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todo-header :add-todo="addTodo"></todo-header>
      <todo-main :todos="todos" :delete-todo="deleteTodo"></todo-main>
      <todo-footer :todos="todos" :clear-todos="clearTodos" :update-todos="updateTodos"></todo-footer>
    </div>
  </div>
</template>

<script>
  import todoHeader from './todoHeader.vue'
  import todoMain from './todoMain.vue'
  import todoFooter from './todoFooter.vue'
  import todoStorage from '../util/todoStorage'

  export default {
    data () {
      return {
        todos: []
      }
    },
    created () {
      this.todos = todoStorage.local.get()
    },
    methods: {
      addTodo (todo) {
        this.todos.unshift(todo)
      },
      deleteTodo (todo) {
        this.todos.$remove(todo)
      },
      clearTodos () {
        this.todos = this.todos.filter((todo, index) => {
          return !todo.isDone
        })
      },
      updateTodos (isAllDone) {
        this.todos.forEach((todo, index) => {
          todo.isDone = isAllDone
        })
      }
    },
    watch: {
      'todos': {
        handler: todoStorage.local.set,
        deep: true
      }
    },
    components: {todoHeader, todoMain, todoFooter}
  }
</script>

<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }

  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
