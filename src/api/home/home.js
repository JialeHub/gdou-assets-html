/*eslint prettier/prettier:0*/
import { axiosD, axiosG, axiosK, axiosP } from "@/api/request";

// 分页获得活动列表
export const pageActivityApi = data => axiosG("/activity/pageActivity", data);
// 分页获得活动列表
export const getArticleApi = data => axiosG("/activity/getArticle", data);
// 添加活动报名列表
export const addActivityApplyApi = data => axiosK("/activity/addActivityApply", data);
// 添加活动报名列表
export const SendSmsApi = data => axiosK("/systemConfig/SendSms", data);
// 添加商务合作
export const addCooperationApi = data => axiosK("/cooperation/addCooperation", data);

