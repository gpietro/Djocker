import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { Provider, connect } from 'react-redux'
import { push } from 'react-router-redux'
import { BrowserRouter, Link, Match, Miss, withRouter } from 'react-router'
import { Row, Col } from 'react-bootstrap'
import AddTodo from '../containers/AddTodo'
import VisibileTodoList from '../containers/VisibleTodoList'
import TodoList from './TodoList'
import Footer from './Footer'
import * as actions from '../actions'

const mapStateToProps = (state) => (
  state
)

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        push,
        ...actions
    },
    dispatch
);

class App extends Component {

  render() {

    const { params, todos } = this.props

    return (
      <Row>
        <Col xs={12}>
          <AddTodo />
          <TodoList todos={todos} onTodoClick={()=>{}}/>
          {/*<VisibileTodoList filter={params.filter || 'all'} />*/}
          {/*<Footer />*/}
        </Col>
      </Row>
    )
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)