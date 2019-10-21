import api from "./base";
import * as Url from "./url";

export default class WebService {
  static login = async data => {
    console.log(Url.loginApi);
    return api.post(Url.loginApi, data);
  };
  static register = async data => {
    console.log(Url.registerApi);
    return api.post(Url.registerApi, data);
  };
  static createCourse = async data => {
    console.log(Url.createCoures);
    return api.post(Url.createCoures, data);
  };
  static putAvartar = async data => {
    console.log(Url.putAvartar);
    return api.postFormData(Url.putAvartar, data, "PUT");
  };
}
