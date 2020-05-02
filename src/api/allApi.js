import { axiosG } from "./request";

/**********轮播图**********/

// 根据id查找轮播图
export const slideShowFindApi = (data) => axiosG("slideShow/byId", data);
// 获取展示轮播图列表
export const slideShowGetApi = (data) => axiosG("slideShow/list", data);

/**********轮播图**********/

/*********子公司模块*********/

//子公司查询
export const subsidiaryFindApi = (data) => axiosG("subsidiary/"+ data.id);
//获取子公司列表
export const subsidiaryGetApi = (data) => axiosG("subsidiary/nameList", data);


/*********子公司模块*********/

/**********合作平台**********/

// 分页查找合作成果
export const pageCooperationApi = (data) => axiosG("cooperation/page", data);
// 获取合作类型列表
export const typeListCooperationApi = (data) => axiosG("cooperation/typeList", data);
// 合作成果模糊查询
export const dimFindCooperationApi = (data) => axiosG("cooperation/dimFind", data);

/**********合作平台**********/


/**********公司概况**********/

// 获取主公司联系方式
export const companyContactGetApi = (data) => axiosG("company/contact", data);
// 获取主公司组织架构图
export const companyFrameworkImgGetApi = (data) => axiosG("company/frameworkImg", data);
// 获取主公司简介
export const companyIntroduceGetApi = (data) => axiosG("company/introduce", data);
// 获取主公司员工列表
export const teamMemberGetApi = (data) => axiosG("member/list", data);

/**********公司概况**********/

