import Vue from "vue";

/**
 * @param string
 * @param noAddBase
 * @return {String}
 * @description 添加URL地址+自动去除第一斜杠
 * */
export const addBaseURL = (string, noAddBase) => {
  if (string && string !== "") {
    if (string.charAt(0) !== "/" && string.charAt(0) !== "\\")
      string = "/" + string;
    if (string.charAt(string.length - 1) === "/")
      string = string.substr(0, string.length - 1);
    if (noAddBase === true) {
      return string;
    } else {
      return process.env.VUE_APP_BASE_URL + string;
    }
  } else {
    return "";
  }
};

/**
 * @param html
 * @return {String}
 * @description 添加URL地址+自动去除第一斜杠
 * */
//过滤富文本HTML标签
export const getSimpleHtml = (html = "") => {
  html = html.replace("↵", "123");
  let re1 = new RegExp("<.+?>", "g"); //匹配html标签的正则表达式，"g"是搜索匹配多个符合的内容
  let msg = html.replace(re1, ""); //执行替换成空字符
  return msg;
};


/**
 * @description 判断浏览器是否为IE
 * */
export const isIE = () => { //ie?
  if (!!window.ActiveXObject || "ActiveXObject" in window)
    return true;
  else
    return false;
}

Vue.prototype.$addBaseURL = addBaseURL;
Vue.prototype.$getSimpleHtml = getSimpleHtml;
Vue.prototype.$isIE = isIE;
