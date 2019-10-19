import LoadingReducer from "../reducers/loadingReducer";
import LoginReduce from "../reducers/loginReduces";
import RegisterReduce from "../reducers/registerReducer";
import UserReducer from "../reducers/userReducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  isloading: LoadingReducer,
  login: LoginReduce,
  register: RegisterReduce,
  UserReducer,
});

let store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
