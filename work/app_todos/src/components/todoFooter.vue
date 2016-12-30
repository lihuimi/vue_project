<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAllDone"/>
    </label>
    <span>
      <span>已完成{{getDoneCount}}</span> / 全部{{getTotalCount}}
    </span>
    <button class="btn btn-danger" v-show="getDoneCount>0" @click="clearItem">清除已完成任务</button>
  </div>
</template>

<script>
  export default {
    props: {
      todos: {
        type: Array,
        required: true
      },
      clearTodos: {
        type: Function,
        required: true
      },
      updateTodos: {
        type: Function,
        required: true
      }
    },
    methods: {
      clearItem () {
        this.clearTodos()
      }
    },

    computed: {
      getDoneCount () {
        return this.todos.filter((todo, index) => todo.isDone).length
      },
      getTotalCount () {
        return this.todos.length
      },
      isAllDone: {
        get () {
          return this.todos.filter(todo => !todo.isDone).length === 0 && this.todos.length > 0
        },
        set (isAllDone) {
          this.updateTodos(isAllDone)
        }
      }
    }
  }
</script>

<style>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
