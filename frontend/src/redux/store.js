import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../saga/rootSaga";
import { postSliceReducer } from "./post";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = configureStore({
  reducer: {
    post: postSliceReducer,
  },
  middleware,
});

sagaMiddleware.run(rootSaga);

export default store;
