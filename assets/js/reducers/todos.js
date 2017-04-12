import { combineReducers } from 'redux'
import todo from './todo'

const initialState = {
  todos: []
}

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_TODO':
      return {
        todos: action.todos
      }    
    default:
      return initialState
  }
}

export default todos
