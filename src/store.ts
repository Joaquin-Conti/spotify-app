import { rootReducer, RootState } from './state/reducers/rootReducer';
import { applyMiddleware, compose, createStore, Middleware } from "redux";
import thunk from 'redux-thunk';

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

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
