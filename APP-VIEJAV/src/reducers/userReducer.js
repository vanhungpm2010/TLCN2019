import * as typeAction from "../actions/typeAction";
import Storage from "../storages";


initialState = {
  user: {}
};
export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case typeAction.GET_USER:
      return { ...state,user:action.user };
    default:
      return state;
  }
}
