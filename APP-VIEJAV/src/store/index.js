import LoadingReducer from '../reducers/loadingReducer'
import LoginReduce from '../reducers/loginReduces'
import { createStore,combineReducers,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    isloading: LoadingReducer,
    login:LoginReduce
});

let store = createStore(rootReducer, applyMiddleware(thunk))
export default store
