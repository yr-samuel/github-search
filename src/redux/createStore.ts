import * as Redux from "redux";
import ReduxThunk from "redux-thunk";
import * as RDevTools from "redux-devtools-extension";
import githubReducer from "./reducers";

const reducers = { github: githubReducer };

const rootReducers = Redux.combineReducers(reducers);
export type IReducers = ReturnType<typeof rootReducers>;
const store = Redux.createStore(
  rootReducers,
  RDevTools.composeWithDevTools(Redux.applyMiddleware(ReduxThunk))
);

export default store;
