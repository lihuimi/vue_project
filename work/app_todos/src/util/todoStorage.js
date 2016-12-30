/**
 * todoStorage
 */
const TODOS_KEY = 'todos'
export default {
  local: {
    get () {
      return JSON.parse(window.localStorage.getItem(TODOS_KEY) || '[]')
    },
    set (todos) {
      console.log(todos)
      window.localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
    },
    remove () {
      window.localStorage.removeItem(TODOS_KEY)
    }
  }
}
