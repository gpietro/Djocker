import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import { getVisibleTodos } from '../reducers/index'
import { fetchTodos } from '../api'

const mapStateToProps = (state, ownProps) => {
  const filter = ownProps.filter || 'all'

  return {
    todos: getVisibleTodos(state, filter),
    filter
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onTodoClick: (id) => {
//       dispatch(toggleTodo(id))
//     }
//   }
// }

class VisibleTodoList extends Component {

  componentDidMount() {
    fetchTodos(this.props.filter).then( todos =>
      console.log('componentDidMount', this.props.filter, todos)
    )
  }

  componentDidUpdate() {
    fetchTodos(this.props.filter).then( todos =>
      console.log('componentDidUpdate', this.props.filter, todos)
    )
  }

  render() {
    return <TodoList {...this.props} />
  }
}

VisibleTodoList = connect(
  mapStateToProps,
  { onTodoClick: toggleTodo }
)(VisibleTodoList)

export default VisibleTodoList
