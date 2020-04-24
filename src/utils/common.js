/**
 * @param value
 * @return {Boolean}
 * @description 判断是否为空
 * */
export const isEmpty = value => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  );
};

/**
 * @param {String} value
 * @return {String}
 * @description 格式化时间
 * */
export const formatDate = value => {
  let date = new Date(value);
  let year = date.getFullYear();
  let month = (date.getMonth() + 1).toString().padStart(2, "0");
  let day = date
    .getDate()
    .toString()
    .padStart(2, "0");
  return `${year}-${month}-${day}`;
};

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
 * @param string
 * @return {String}
 * @description 价格处理
 * */
export const priceSwitch = string => {
  //强制保留两位小数
  let f = parseFloat(string);
  if (isNaN(f)) return false;
  f = Math.round(string * 100) / 100;
  let s = f.toString();
  let rs = s.indexOf(".");
  if (rs < 0) {
    rs = s.length;
    s += ".";
  }
  while (s.length < rs + 1 + 2) {
    s += "0";
  }
  //每三位用一个逗号隔开
  let leftNum = s.split(".")[0];
  let rightNum = "." + s.split(".")[1];
  let result;
  //定义数组记录截取后的价格
  let resultArray = [];
  if (leftNum.length > 3) {
    let i = true;
    while (i) {
      resultArray.push(leftNum.slice(-3));
      leftNum = leftNum.slice(0, leftNum.length - 3);
      if (leftNum.length < 4) {
        i = false;
      }
    }
    //由于从后向前截取，所以从最后一个开始遍历并存到一个新的数组，顺序调换
    let sortArray = [];
    for (let i = resultArray.length - 1; i >= 0; i--) {
      sortArray.push(resultArray[i]);
    }
    result = leftNum + "," + sortArray.join(",") + rightNum;
  } else {
    result = s;
  }
  return result;
};

/**
 * @description 过滤时间
 * @return {String}
 **/
export const formatDateTime = value => {
  let date = new Date(value);
  let year = date.getFullYear();
  let month = (date.getMonth() + 1).toString().padStart(2, "0");
  let day = date
    .getDate()
    .toString()
    .padStart(2, "0");
  let hours = date
    .getHours()
    .toString()
    .padStart(2, "0");
  let minutes = date
    .getMinutes()
    .toString()
    .padStart(2, "0");
  let seconds = date
    .getSeconds()
    .toString()
    .padStart(2, "0");
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};
