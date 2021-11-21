import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducer'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './rootSaga'
import { persistStore } from 'redux-persist'


const sagaMiddleWare = createSagaMiddleware()
const middleWares = [sagaMiddleWare]

export const store = createStore(rootReducer, applyMiddleware(...middleWares))

sagaMiddleWare.run(rootSaga)

export const persistor = persistStore(store)