import api from "./base";
import * as Url from "./url";

export default class WebService {
  // Auth
  static login = async (data) => {
    console.log(Url.loginApi);
    return api.post(Url.loginApi, data);
  };

  static loginSocial = data => {
    return api.post(Url.loginSocial, data)
  }

  static register = async (data) => {
    console.log(Url.registerApi);
    return api.post(Url.registerApi, data);
  };
  static createCourse = async (data) => {
    console.log(Url.createCoures);
    return api.post(Url.createCoures, data);
  };
  static putAvartar = async (data) => {
    console.log(Url.putAvartar);
    return api.postFormData(Url.putAvartar, data, "PUT");
  };
  static getCourses = async () => {
    console.log(Url.getCourses);
    return api.get(Url.getCourses);
  };
  static deleteCourses = async (id) => {
    console.log(Url.deleteCoures);
    return api.del(Url.deleteCoures, id);
  };
  static getDetailCourses = async (id) => {
    console.log(Url.getDetailCourses);
    return api.get(Url.getDetailCourses, id);
  };
  static getTopic = async (id) => {
    console.log(Url.getTopic);
    return api.get(Url.getTopic);
  };
  static getDetailLesson = async (id) => {
    return api.get(`/topics/${id}`);
  };
  static getQuizDetail = async (id) => {
    return api.get(`/topics/${id}/learn`);
  };
  static setHistory = async (data) => {
    console.log(Url.setHistory);
    return api.post(Url.setHistory, data);
  };
  //challenge
  static getChallenge = () => {
    console.log(Url.getChallenge);
    return api.get(Url.getChallenge);
  };
  static getDetailChanll = (id) => {
    console.log(Url.getChallenge);
    return api.get(`/challenge/${id}`);
  };
  static getChallengeByLevel = level => {
    return api.get(`/challenge?level=${level}`)
  };
  static updateHightMark = data => {
    return api.put(Url.updateHightMark, data)
  }

  // Friend
  static getMe = () => {
    return api.get(Url.getMe);
  };
  static getFriends = () => {
    return api.get(Url.getFriends);
  };
  static searchFriend = (name) => {
    return api.get(`/users/search?q=${name}`)
  }
  static addFriend = (body) => {
    return api.put(Url.addFriend, body);
  }
  
  // Game Challenge
  static inviteFriend = body => {
    return api.post(Url.inviteFriend, body)
  }
  static acceptGame = body => {
    return api.post(Url.acceptGame, body)
  }

  static getBoard = () => {
    return api.get(Url.getBoard);
  };

  // Notification
  static getListNoti = () => {
    return api.get(Url.getListNoti);
  }
  static seenNotify = () => {
    return api.put(Url.updateSeenNotify);
  }
  static deleteNotify = id => {
    return api.del(`/notify?_id=${id}`)
  }
  static updateTokenNotify = data => {
    return api.put(`/users/token`, data)
  }

  // Alphabet
  static getAlphabet = (type, limit, page = 0) => {
    return api.get(`/alphabet?limit=${limit}&type=${type}&page=${page}`)
  }
}
