import createSagaMiddleware from "redux-saga";
import createRootReducer from "../reducers";
import { createStore, compose, applyMiddleware } from "redux";
import rootSagas from "../sagas";

const preloadedState = {};
const reducers = createRootReducer();
const sagaMiddleware = createSagaMiddleware();
const middlewares = [
    sagaMiddleware,
];

// create store
export const store = createStore(
    reducers,
    preloadedState,
    compose(applyMiddleware(...middlewares))
);
sagaMiddleware.run(rootSagas);