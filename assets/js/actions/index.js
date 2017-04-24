import { v4 } from 'node-uuid'


// Actions Creator
export const initTodo = (todos) => {
  return {
    type: 'INIT_TODO',
    todos
  }
}

export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: v4(),
    text,
    completed: false
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}
