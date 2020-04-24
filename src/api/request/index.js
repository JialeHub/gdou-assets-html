import axios from "axios";
import qs from "qs";
import store from "@/store";
import { Dialog } from "vant";
import router from "@/router";

let errorMsg = "";

const service = axios.create({
  timeout: 10000,
  baseURL: process.env.VUE_APP_BASE_API
  // withCredentials: false
});
service.defaults.withCredentials = false;
service.interceptors.request.use(
  //请求拦截
  config => {
    //成功
    let token = store.getters.token;
    let url = config.url;
    if (isAddToken(url)) {
      config.headers.Authorization = token;
    }
    return config;
  },
  error => {
    //错误
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  //响应拦截
  response => {
    //成功
    /*const { message } = response.data;
    if (message) Toast(message);*/
    return response;
  },
  error => {
    //错误
    let code = 0;
    try {
      code = error.response.status;
    } catch (e) {
      if (error.toString().includes("timeout")) {
        let msg = "网络请求超时！";
        if (msg === errorMsg) return Promise.reject(error);
        errorMsg = msg;
      }
      return Promise.reject(error);
    }
    const { message } = error.response.data;
    if (code === 504) {
      if (error.response.statusText === "Gateway Timeout") {
        let msg = "网络错误！";
        if (msg === errorMsg) return;
        errorMsg = msg;
      }
    } else if (code === 401) {
      Dialog.alert({
        title: "提示",
        message: "登陆过期，请重新登陆"
      }).then(() => {
        store.dispatch("setToken");
        store.dispatch("changeActive", {
          key: "fieldActive",
          value: 1
        });
      });
    }
    return Promise.reject(error);
  }
);

/**
 * @param {String} url 请求地址
 * @param params
 * @param {boolean} needToken 是否需要加入token请求头
 * @description get
 * */
export const axiosG = (url, params, needToken = false) => {
  if (needToken) ignoreTokenArray.push(url);
  return new Promise((resolve, reject) => {
    return service({
      method: "get",
      url,
      params,
      paramsSerializer: params => qs.stringify(params)
    })
      .then(result => {
        resolve(result);
      })
      .catch(error => {
        reject(error);
      });
  });
};
/**
 * @param {String} url 请求地址
 * @param params
 * @param {boolean} needToken 是否需要加入token请求头
 * @description delete，删除多条数据。
 * */
export const axiosD = (url, params, needToken = false) => {
  if (needToken) ignoreTokenArray.push(url);
  if (needToken && params)
    ignoreTokenArray.push(url + "?" + qs.stringify(params));
  return new Promise((resolve, reject) => {
    if (params) {
      return service({
        method: "delete",
        url: url + "?" + qs.stringify(params)
      })
        .then(result => {
          resolve(result);
        })
        .catch(error => {
          reject(error);
        });
    } else {
      return service({
        method: "delete",
        url: url
      })
        .then(result => {
          resolve(result);
        })
        .catch(error => {
          reject(error);
        });
    }
  });
};
/**
 * @param {String} url 请求地址
 * @param {Object} param {name: LiHua, age: 18}
 * @param {boolean} needToken 是否需要加入token请求头
 * @description post，键值对格式。
 * */
export const axiosK = (url, param, needToken = false) => {
  if (needToken) ignoreTokenArray.push(url);
  return new Promise((resolve, reject) => {
    service({
      method: "post",
      url: url,
      data: param,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      transformRequest: [
        data => {
          return qs.stringify(data);
        }
      ]
    })
      .then(result => {
        resolve(result);
      })
      .catch(error => {
        reject(error);
      });
  });
};
/**
 * @param {String} url 请求地址
 * @param {Object} param {name: LiHua, age: 18}
 * @param {boolean} needToken 是否需要加入token请求头
 * @description put，键值对格式。
 * */
export const axiosP = (url, param, needToken = false) => {
  if (needToken) ignoreTokenArray.push(url);
  return new Promise((resolve, reject) => {
    service({
      method: "put",
      url: url,
      data: param,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      transformRequest: [
        data => {
          return qs.stringify(data);
        }
      ]
    })
      .then(result => {
        resolve(result);
      })
      .catch(error => {
        reject(error);
      });
  });
};
/**
 * @param {String} url 请求地址
 * @param {Object} param {name: LiHua, age: 18}
 * @param {boolean} needToken 是否需要加入token请求头
 * @description post，JSON格式。
 * */
export const axiosJ = (url, param, needToken = false) => {
  if (needToken) ignoreTokenArray.push(url);
  return new Promise((resolve, reject) => {
    service({
      method: "post",
      url: url,
      data: param,
      headers: {
        "Content-Type": "application/json"
      },
      transformRequest: [
        data => {
          return JSON.stringify(data);
        }
      ]
    })
      .then(result => {
        resolve(result);
      })
      .catch(error => {
        reject(error);
      });
  });
};
/**
 * @param {String} url 请求地址
 * @param {FormData} param new FormData()
 * @param {boolean} needToken 是否需要加入token请求头
 * @description post，文件格式。
 * */
export const axiosF = (url, param, needToken = false) => {
  if (needToken) ignoreTokenArray.push(url);
  // 文件 formData
  return new Promise((resolve, reject) => {
    service({
      method: "post",
      url: url,
      data: param,
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
      .then(result => {
        resolve(result);
      })
      .catch(error => {
        reject(error);
      });
  });
};
/**
 * @param {String} url 请求地址
 * @param {Object} param {id: 1, file: [1.png, 2.png]}
 * @param {boolean} needToken 是否需要加入token请求头
 * @description post，文件格式。
 * */
export const axiosFs = (url, param, needToken = false) => {
  if (needToken) ignoreTokenArray.push(url);
  return new Promise((resolve, reject) => {
    service({
      method: "post",
      url: url,
      data: param,
      headers: {
        "Content-Type": "multipart/form-data"
      },
      transformRequest: [
        data => {
          const formData = new FormData();
          for (let key in data) {
            if (data[key] instanceof Array) {
              for (let i = 0; i < data[key].length; i++) {
                formData.append(key, data[key][i]);
              }
            } else {
              formData.append(key, data[key]);
            }
          }
          return formData;
        }
      ]
    })
      .then(result => {
        resolve(result);
      })
      .catch(error => {
        reject(error);
      });
  });
};
/**
 * @param {String} url 请求地址
 * @param {boolean} needToken 是否需要加入token请求头
 * @description 下载文件。
 * */
export const axiosL = (url, needToken = false) => {
  if (needToken) ignoreTokenArray.push(url);
  return new Promise((resolve, reject) => {
    service({
      method: "get",
      url: url,
      responseType: "blob"
    })
      .then(result => {
        resolve(result);
      })
      .catch(error => {
        reject(error);
      });
  });
};

/*白名单*/
const ignoreTokenArray = [];

const isAddToken = url => {
  if (ignoreTokenArray.length === 0) return false;
  return ignoreTokenArray.some(item => {
    return url === item;
  });
};
