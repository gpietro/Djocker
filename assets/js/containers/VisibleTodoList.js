import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import { getVisibleTodos } from '../reducers/index'

const mapStateToProps = (state, ownProps) => {
  return {
    todos: getVisibleTodos(
      state,
      ownProps.filter || 'all' )
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onTodoClick: (id) => {
//       dispatch(toggleTodo(id))
//     }
//   }
// }

const VisibleTodoList = connect(
  mapStateToProps,
  { onTodoClick: toggleTodo }
)(TodoList)

export default VisibleTodoList
