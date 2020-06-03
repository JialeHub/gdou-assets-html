import Vue from "vue";

/**
 * @description 过滤时间
 * @return YYYY.MM.DD
 **/
Vue.filter("formatDate2", value => {
  if (value){
    let date = new Date(value.replace(/-/g,'/'));
    let year = date.getFullYear();
    let month = (date.getMonth() + 1).toString().padStart(2, "0");
    let day = date
      .getDate()
      .toString()
      .padStart(2, "0");
    return `${year}.${month}.${day}`;
  }else{
    return value
  }

});

/**
 * @description 过滤时间
 * @return YYYY-MM-DD
 **/
Vue.filter("formatDate", value => {
  if (value){
    let v=value.replace(/-/g,'/')
    let date = new Date(v);
    let year = date.getFullYear();
    let month = (date.getMonth() + 1).toString().padStart(2, "0");
    let day = date
      .getDate()
      .toString()
      .padStart(2, "0");
    return `${year}-${month}-${day}`;
  }else{
    return value
  }
});

/**
 * @description 过滤时间
 * @return YYYY-MM-DD hh:mm:ss
 **/
Vue.filter("formatDateMM", value => {
  if (value){
    let date = new Date(value.replace(/-/g,'/'));
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
  }else{
    return value
  }
});

/**
 * @description 过滤时间
 * @return YYYY-MM-DD hh:mm:ss
 **/
Vue.filter("formatDateSS", value => {
  if (value){
    let date = new Date(value.replace(/-/g,'/'));
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
  }else{
    return value
  }
});
