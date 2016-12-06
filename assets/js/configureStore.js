import { createStore } from 'redux'
import todoApp from './reducers'
import { loadState, saveState } from './localStorage'

const configureStore = () => {
  const persistedStore = loadState()
  const store = createStore(todoApp, persistedStore)

  store.subscribe(() => {
    saveState({
      todos: store.getState().todos
    });
  });

  return store
}

export default configureStore
