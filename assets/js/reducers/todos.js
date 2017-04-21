import { combineReducers } from 'redux'
import todo from './todo'

const initialState = []

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_TODO':
      return action.payload || []
    case 'ADD_TODO':
      return [
        ...state,
        action.payload
      ]
    default:
      return state
  }
}

export default todos
