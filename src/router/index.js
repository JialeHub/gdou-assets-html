import Vue from "vue";
import VueRouter from "vue-router";
const originalPush = VueRouter.prototype.push;

/*屏蔽同页面跳转报错*/
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
Vue.use(VueRouter);

const routes = [
  { path: "/home", redirect: "/" },
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home"),
    meta: {
      title: "广东海洋大学湛江资产经营有限公司",// 标题设置
      activeTag:'home'
    }
  },
  /**********************公司概况**********************/
  {
    path: "/profile",
    name: "profile",
    component: () => import("@/views/profile"),
    meta: {
      title: "公司概况", // 标题设置
      activeTag: 'profile'
    }
  },
  /**********************公司概况**********************/
  /**********************公司动态**********************/
  {
    path: "/dynamic",
    name: "dynamic",
    component: () => import("@/views/dynamic"),
    meta: {
      title: "公司动态", // 标题设置
      activeTag: 'dynamic'
    }
  },
  {
    path: "/dynamic/:content/",
    name: "dynamicInside",
    component: () => import("@/views/dynamic"),
    meta: {
      title: "公司动态", // 标题设置
      activeTag: 'dynamic'
    }
  },
  {
    path: "/dynamic/:content/:inside",
    name: "dynamicInside",
    component: () => import("@/views/dynamic/inside"),
    meta: {
      title: "公司动态", // 标题设置
      activeTag: 'dynamic'
    }
  },
  /**********************公司动态**********************/
  /**********************下属企业**********************/
  {
    path: "/subordinate",
    name: "subordinate",
    component: () => import("@/views/subordinate"),
    meta: {
      title: "下属企业", // 标题设置
      activeTag: 'subordinate'
    }
  },
  {
    path: "/subordinate/:content/",
    name: "subordinateInside",
    component: () => import("@/views/subordinate"),
    meta: {
      title: "下属企业", // 标题设置
      activeTag: 'subordinate'
    }
  },
  {
    path: "/subordinate/:content/:inside",
    name: "subordinateInside",
    component: () => import("@/views/subordinate/inside"),
    meta: {
      title: "下属企业", // 标题设置
      activeTag: 'subordinate'
    }
  },
  /**********************下属企业**********************/
  /**********************下属企业**********************/
  {
    path: "/subordinate",
    name: "subordinate",
    component: () => import("@/views/subordinate"),
    meta: {
      title: "下属企业", // 标题设置
      activeTag: 'subordinate'
    }
  },
  {
    path: "/subordinate/:content/",
    name: "subordinateInside",
    component: () => import("@/views/subordinate"),
    meta: {
      title: "下属企业", // 标题设置
      activeTag: 'subordinate'
    }
  },
  {
    path: "/subordinate/:content/:inside",
    name: "subordinateInside",
    component: () => import("@/views/subordinate/inside"),
    meta: {
      title: "下属企业", // 标题设置
      activeTag: 'subordinate'
    }
  },
  /**********************下属企业**********************/
  /**********************合作平台**********************/
  {
    path: "/cooperation",
    name: "cooperation",
    component: () => import("@/views/cooperation"),
    meta: {
      title: "合作平台", // 标题设置
      activeTag: 'cooperation'
    }
  },
  /**********************合作平台**********************/
  /**********************党群之窗**********************/
  {
    path: "/party",
    name: "party",
    component: () => import("@/views/party"),
    meta: {
      title: "党群之窗", // 标题设置
      activeTag: 'party'
    }
  },
  {
    path: "/party/:content/",
    name: "partyInside",
    component: () => import("@/views/party"),
    meta: {
      title: "党群之窗", // 标题设置
      activeTag: 'party'
    }
  },
  {
    path: "/party/:content/:inside",
    name: "partyInside",
    component: () => import("@/views/party/inside"),
    meta: {
      title: "党群之窗", // 标题设置
      activeTag: 'party'
    }
  },
  /**********************党群之窗**********************/
  /**********************政策法律**********************/
  {
    path: "/policy",
    name: "policy",
    component: () => import("@/views/policy"),
    meta: {
      title: "政策法律", // 标题设置
      activeTag: 'policy'
    }
  },
  {
    path: "/policy/:content/",
    name: "policyInside",
    component: () => import("@/views/policy"),
    meta: {
      title: "政策法律", // 标题设置
      activeTag: 'policy'
    }
  },
  {
    path: "/policy/:content/:inside",
    name: "policyInside",
    component: () => import("@/views/policy/inside"),
    meta: {
      title: "政策法律", // 标题设置
      activeTag: 'policy'
    }
  },
  /**********************政策法律**********************/
  /**********************服务指南**********************/
  {
    path: "/directory",
    name: "directory",
    component: () => import("@/views/directory"),
    meta: {
      title: "服务指南", // 标题设置
      activeTag: 'directory'
    }
  },
  {
    path: "/directory/:content/",
    name: "directoryInside",
    component: () => import("@/views/directory"),
    meta: {
      title: "服务指南", // 标题设置
      activeTag: 'directory'
    }
  },
  {
    path: "/directory/:content/:inside",
    name: "directoryInside",
    component: () => import("@/views/directory/inside"),
    meta: {
      title: "服务指南", // 标题设置
      activeTag: 'directory'
    }
  },
  /**********************服务指南**********************/
  {
    path: "/404",
    name: "error404",
    component: () => import("@/views/error/404"),
    meta: {
      title: "未找到页面", // 标题设置
      type: "error"
    }
  },
  {
    path: "*",
    redirect: "/404"
  }
];

const router = new VueRouter({
  mode: "history",
  //base: process.env.BASE_URL,
  routes
});

export default router;
