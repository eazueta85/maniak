import {createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

//Sagas root
import rootSaga from './rootSaga';

//Reducers root
import rootReducer from './rootReducer';

//Midlewares
const sagaMiddleware = createSagaMiddleware();

//Debbuguer
let composeEnhancers = compose;

if (process.env.NODE_ENV) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

export default store;