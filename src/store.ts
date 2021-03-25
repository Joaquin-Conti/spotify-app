import { rootReducer, RootState } from './state/reducers/rootReducer';
import { applyMiddleware, combineReducers, compose, createStore, Middleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import rootSaga from './state/sagas';


const sagaMiddleware = createSagaMiddleware()

const saveToLocalStorage = (state: any) => {
  try {
    const serializedState = JSON.stringify(state)
    if (localStorage.getItem("app-version") !== '7') {
      localStorage.clear();
      localStorage.setItem("app-version", "7");
    }
    localStorage.setItem('state', serializedState)
  } catch (err) {
    console.log(err)
  }
}

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch (err) {
    console.log(err)
    return undefined
  }
}


declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
      __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
    }
}

export const logger:
  Middleware<{}, RootState> = store => next => action => {
  console.log('[Middleware] Dispatching:', action)
  const result = next(action)
  console.log('[Middleware] next state:', store.getState( ))
  return result
}

export const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = loadFromLocalStorage()

export const store = createStore(rootReducer, persistedState, composeEnhancers(applyMiddleware(thunk),applyMiddleware(sagaMiddleware)));

store.subscribe(() => saveToLocalStorage(store.getState()))

// Run the saga now
sagaMiddleware.run(rootSaga);


// sagaMiddleware.run(mySaga)

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
