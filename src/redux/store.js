import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { darkModeReducer } from "./reducers/darkModeReducers";
import { countryListReducer } from "./reducers/countryReducers";

const rootReducer = combineReducers({
  darkMode: darkModeReducer,
  countryList: countryListReducer,
});

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
