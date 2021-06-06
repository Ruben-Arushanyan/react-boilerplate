import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'
import createSagaMiddleware from 'redux-saga'

// root reducer
import {rootReducer} from './slices/rootReducer'

// root saga
import {rootSaga} from './slices/rootSaga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(sagaMiddleware)
    )
)

// run saga
sagaMiddleware.run(rootSaga)

export {store}