import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import login from './api/users/login/reducers'
// import helloSaga from './api/users/login/sagas'

const sagaMiddleware = createSagaMiddleware()

const _window: any = window;
const composeEnhancer =
    (process.env.NODE_ENV !== 'production' && _window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']) || compose;

const store = createStore(

    login,
    // {},
    composeEnhancer(applyMiddleware(sagaMiddleware))
);

// sagaMiddleware.run(helloSaga)

const action = (type: string) => store.dispatch({ type })

export { store, action }
