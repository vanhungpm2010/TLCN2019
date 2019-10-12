import { AsyncStorage } from "react-native";
import api from "../services/base";

export default class Storage {
 static saveToken = async (token) => {
    try {
      if (!token) {
        return;
      }
      await AsyncStorage.setItem("token", token);
      api.init({ token });
    } catch (error) {
      return error;
    }
  };
static  saveUser= async(user)=>{
    try {
        if (!token) {
          return;
        }
        await AsyncStorage.setItem("token", token);
        api.init({ token });
      } catch (error) {
        return error;
      }
    };
  }

