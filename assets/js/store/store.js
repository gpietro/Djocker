import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import { Router, Route, hashHistory } from 'react-router'
import { routerMiddleware, push } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import todoAppReducer from '../reducers'
import WebsocketBridge from '../utils/WebsocketBridge'

const router = routerMiddleware(hashHistory)

const actionsToExclude = ['INIT_TODO']
const notify = store => next => action => {
    if( !actionsToExclude.includes(action.type) && !action.done ) {
        WebsocketBridge.send({ ...action })
    }
    return next(action)
}

let middlewares = [thunk, router, notify]

if( process.env.NODE_ENV !== 'production' ) {
    middlewares.push(createLogger())
}

const store = createStore(todoAppReducer, composeWithDevTools(applyMiddleware(...middlewares)))

WebsocketBridge.connect()
WebsocketBridge.listen(store)

export default store