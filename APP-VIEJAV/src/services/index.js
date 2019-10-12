import api from "./base";
import * as Url from "./url";

export default class WebService {
  static login = async data => {
      console.log(Url.loginApi)
    return api.post(Url.loginApi, data);
  };
}
