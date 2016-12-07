import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import createLogger from 'redux-logger'
import todoApp from './reducers'
import { loadState, saveState } from './localStorage'


const configureStore = () => {
  let middlewares = [promise]
  // const persistedStore = loadState()

  if( process.env.NODE_ENV !== 'production' ) {
    middlewares.push(createLogger())
  }

  const store = createStore(
    todoApp,
    // persistedStore,
    applyMiddleware(...middlewares)
  )

  store.subscribe(() => {
    saveState({
      todos: store.getState().todos
    });
  });

  return store
}

export default configureStore
