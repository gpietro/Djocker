import React from 'react'
import { bindActionCreators } from 'redux'
import { Provider, connect } from 'react-redux'
import { push } from 'react-router-redux'
import { BrowserRouter, Link, Match, Miss, withRouter } from 'react-router'
import App from './app'
import LoginPage from '../containers/LoginPage'
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

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter basename="/dashboard">
      <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login-page/">Login</Link></li>
          </ul>

          <hr/>

          <Match exactly pattern="/login-page/" component={LoginPage} />
          <Match pattern="/:filter?" component={App} />
          <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  </Provider>
)

const NotFound = ({ location }) => (
  <div>
    <h1>404</h1>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)

export default Root
