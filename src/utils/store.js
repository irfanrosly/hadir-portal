import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import rootSaga from "../sagas";
import reducers from "../redux";

const sagaMiddleware = createSagaMiddleware();

let store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
    // other store enhancers if any
  )
);

sagaMiddleware.run(rootSaga);

export default store;
