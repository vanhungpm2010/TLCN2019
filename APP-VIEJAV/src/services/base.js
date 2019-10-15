import axios from "axios";
import Host from "./host";
import Navigator from "../components/navigator/Navigator";

const methods = {
  get: "GET",
  post: "POST",
  put: "PUT",
  patch: "PATCH",
  delete: "DELETE"
};

const client = axios.create({
  baseURL: Host,
  headers: { "Content-Type": "application/json" }
});
const Authorization = { token: "" };

const init = ({ token }) => {
  if (token) {
    client.defaults.headers.common.Authorization = `Bearer ${token}`;
    Authorization.token = token;
  }
  client.defaults.timeout = 30000;
};
const request = async (options, isHeader = true) => {
  if (!isHeader) {
    client.defaults.headers.common.Authorization = null;
  }
  const onSuccess = response => {
    console.log('respone',response.data)
    console.log('status',response.status)
    // console.log('[RESPONSE]', JSON.stringify(response, null, 2));
    if (response && response.status !== 200 && response.status !== 202) {
      throw response.data ? response.data.message : "";
    }
    console.log('ok')
    return response.data ? response.data : {};
  };
  const onError = error => {
    console.log('vanviet errereara',error.message)
    // console.log('[ERROR]', JSON.stringify(error, null, 2));
    if (error.response) {
      if (error.response.status === 401) {
        Navigator.navigate("Login");
        return;
      }
      throw error.response.data;
    } else if (error.request) {
      throw error;
    } else {
      // Something happened in setting up the request that triggered an Error
      throw error;
    }
  
  };

  return client(options).then(onSuccess).catch(onError);
};
const get = (url, params, header = true) => request({ url, params, method: methods.get }, header);

const post = (url, data, header = true) => request({ url, method: methods.post, data: JSON.stringify(data) }, header);

const put = (url, data, header = true) => request({ url, method: methods.put, data: JSON.stringify(data) }, header);

const patch = (url, data, header = true) => request({ url, method: methods.patch, data: JSON.stringify(data) }, header);

const del = (url, data, header = true) => request({ url, method: methods.delete, data: JSON.stringify(data) }, header);

export default {
    init,
    get,
    post,
    put,
    patch,
    del,
  };
  