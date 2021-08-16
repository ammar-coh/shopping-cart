import {createStore,compose, applyMiddleware} from 'redux';
import reducer from './reducer/index';
import createSagaMiddleware from 'redux-saga';
import {watcherSaga} from './sagas/rootSaga'

export  const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(preloadedState) {
    const middlewares = [sagaMiddleware]
    const middlewareEnhancer = applyMiddleware(...middlewares)
  
    const enhancers = [middlewareEnhancer]
    const composedEnhancers = compose(...enhancers)
  
    const store = createStore(reducer, preloadedState, composedEnhancers)
  sagaMiddleware.run(watcherSaga)
    return store
  }