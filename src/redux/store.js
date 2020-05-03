import logger from 'redux-logger';
import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist";
import { createStore, applyMiddleware } from "redux";

const middleWares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middleWares));

const persistor = persistStore(store);

export default { store, persistor };