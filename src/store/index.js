import { createStore, combineReducers, applyMiddleware } from "redux";
import authenticationReducer from '../reducers/authenticationReducer';
import newsListReducer from '../reducers/newsListReducer';
import profileReducer from '../reducers/profileReducer';
import thunk from "redux-thunk";

const reducers = combineReducers({
  authenticationState: authenticationReducer,
  newsListState: newsListReducer,
  profileState: profileReducer
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
