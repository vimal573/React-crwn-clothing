import { compose, createStore, applyMiddleware } from "redux";

// import { logger } from "redux-logger";

import { rootReducer } from "./root-reducer";

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log("Type", action.type);
  console.log("payload", action.payload);
  console.log("Current State", store.getState());

  next(action);

  console.log("next State", store.getState());
};

const middleware = [loggerMiddleware];

const composeEnhancers = compose(applyMiddleware(...middleware));

export const store = createStore(rootReducer, undefined, composeEnhancers);
