import WebService from "../services";
import * as typeAction from "./typeAction";
import Storage from '../storages' 
 
export const LoginACtion={
  loginRequest,

}

loginSuccess = data => {
  return {
    type: typeAction.LOGIN_SUCCESS,
    data: data
  };
};
loginFalsed = data => {
  return {
    type: typeAction.LOGIN_FALSED,
    data: data
  };
};

function loginRequest(loginData) {
  return dispatch => {
    dispatch({type:typeAction.IS_LOADING_LOGIN})
     WebService.login(loginData)
      .then(data => {
        Storage.saveUser(loginData)
        Storage.saveToken(data.token)
        dispatch(loginSuccess(data));
      })
      .catch(err => {
        dispatch(loginFalsed(err));
      });
  };
}
