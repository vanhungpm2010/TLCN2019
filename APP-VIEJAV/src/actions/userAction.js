import WebService from "../services";
import * as typeAction from "./typeAction";
import Storage from "../storages";
import { showMessage, hideMessage } from "react-native-flash-message";
import Navigator from "../components/navigator/Navigator";

export const UserACtion = {
  getUser
};
function getUser() {
  return {
    type: typeAction.GET_USER,
    user: Storage.getUserInfo()
  };
}
