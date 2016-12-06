import React from 'react'
import { Row, Col } from 'react-bootstrap'
import AddTodo from '../containers/AddTodo'
import VisibileTodoList from '../containers/VisibleTodoList'
import Footer from './Footer'


const App = ({ params }) => (
  <Row>
    <Col xs={12}>
      <AddTodo />
      <VisibileTodoList filter={params.filter || 'all'} />
      <Footer />
    </Col>
  </Row>
)

export default App
