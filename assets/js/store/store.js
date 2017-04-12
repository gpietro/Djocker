import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import { Router, Route, hashHistory } from 'react-router'
import { routerMiddleware, push } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import todoAppReducer from '../reducers'
import WebsocketBridge from '../utils/WebsocketBridge'

const router = routerMiddleware(hashHistory)

let middlewares = [thunk, router]

if( process.env.NODE_ENV !== 'production' ) {
    middlewares.push(createLogger())
}

const store = createStore(todoAppReducer, composeWithDevTools(applyMiddleware(...middlewares)))

WebsocketBridge.connect()
WebsocketBridge.listen(store)

export default store