import React from 'react'
import { Row, Col } from 'react-bootstrap'
import AddTodo from '../containers/AddTodo'
import VisibileTodoList from '../containers/VisibileTodoList'

const App = () => (
  <Row>
    <Col xs={12}>
        <AddTodo />
        <VisibileTodoList />
        <Footer />
    </Col>
  </Row>
)

export default App
