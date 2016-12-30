<template>
  <li :style="{background:hasBgColor}" @mouseenter="showDelete(true)"
      @mouseleave="showDelete(false)">
    <label>
      <input type="checkbox" v-model="todo.isDone"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteItem">删除</button>
  </li>
</template>

<script>
  export default {
    props: {
      todo: {
        type: Object,
        required: true
      },
      deleteTodo: {
        type: Function,
        required: true
      }
    },
    data () {
      return {
        isShow: false,
        hasBgColor: '#fff'
      }
    },
    methods: {
      showDelete (isShow) {
        if (isShow) {
          this.hasBgColor = '#eee'
        } else {
          this.hasBgColor = '#fff'
        }
        this.isShow = isShow
      },
      deleteItem () {
        const todo = this.todo
        if (window.confirm(`确定删除${todo.title}吗？`)) {
          this.deleteTodo(todo)
        }
      }
    }
  }
</script>

<style>
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
