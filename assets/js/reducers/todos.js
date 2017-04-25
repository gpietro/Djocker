import { combineReducers } from 'redux'
import todo from './todo'

const initialState = []

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_TODO':
      return action.todos || []
    case 'ADD_TODO':
      return [
        ...state,
        { 
          id: action.id,
          text: action.text,
          completed: action.completed
        }
      ]
    case 'REMOVE_TODO':
      return state.filter( task => task.id !== action.id )
      
    default:
      return state
  }
}

export default todos
