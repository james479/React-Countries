import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { darkModeReducer } from "./reducers/darkModeReducers";
import { countryListReducer } from "./reducers/countryReducers";

const reducer = combineReducers({
  darkMode: darkModeReducer,
  countryList: countryListReducer,
});

const initialState = {
  darkMode: false,
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
