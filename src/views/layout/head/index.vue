<template>
  <div id="Head">
    <!--------------------------头部Start-------------------------->
    <div class="container-fluid">
      <!--banner-->
      <div class="row bannerOut h-100">
        <div class="container-xl">
          <div class="row">
            <div
              class="banner"
              :style="
                'background-image: url(' +
                  require('@/assets/img/banner.png') +
                  ')'
              "
            >
              <div class="logoImg">
                <a href="https://www.gdou.edu.cn/">
                  <img src="@/assets/logo_224x224.png" alt="" />
                </a>
              </div>
              <div class="title">
                <h1 class="title1">
                  <span>广东海洋大学湛江资产经营有限公司</span>
                </h1>
                <h2 class="title2">
                  <span
                    >Guangdong Ocean University Zhanjiang Assets Management Co.
                    LTD</span
                  >
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--banner-->

      <!--Nav-->
      <div class="row navOut sticky-top">
        <div class="container-xl p-0">
          <nav class="nav nav-pills nav-fill">
            <a
              href="/"
              :class="
                'nav-item nav-link' +
                  ($route.meta.activeTag === 'home' ? ' active' : '')
              "
              @click.prevent="$router.push({ path: '/' })"
              ><span>公司首页</span></a
            >
            <a
              href="/profile"
              :class="
                'nav-item nav-link' +
                  ($route.meta.activeTag === 'profile' ? ' active' : '')
              "
              @mouseenter="nav2_1 = true"
              @mouseleave="nav2_1 = false"
              @click.prevent="$router.push({ path: '/profile' })"
            >
              <span>公司概况</span>
              <div class="nav2" v-show="nav2_1">
                <div class="box">
                  <nav class="nav nav-pills">
                    <a
                      href="/profile#intro"
                      :class="
                        'nav-item nav-link' +
                          ($route.meta.activeTag === 'profile' &&
                          $route.hash === '#intro'
                            ? ' active'
                            : '')
                      "
                      @click.prevent.stop="
                        $router.push({ path: '/profile#intro' })
                      "
                      ><span>公司简介</span></a
                    >
                    <a
                      href="/profile#team"
                      :class="
                        'nav-item nav-link' +
                          ($route.meta.activeTag === 'profile' &&
                          $route.hash === '#team'
                            ? ' active'
                            : '')
                      "
                      @click.prevent.stop="
                        $router.push({ path: '/profile#team' })
                      "
                      ><span>公司团队</span></a
                    >
                    <a
                      href="/profile#framework"
                      :class="
                        'nav-item nav-link' +
                          ($route.meta.activeTag === 'profile' &&
                          $route.hash === '#framework'
                            ? ' active'
                            : '')
                      "
                      @click.prevent.stop="
                        $router.push({ path: '/profile#framework' })
                      "
                      ><span>组织架构</span></a
                    >
                    <a
                      href="/profile#contact"
                      :class="
                        'nav-item nav-link' +
                          ($route.meta.activeTag === 'profile' &&
                          $route.hash === '#contact'
                            ? ' active'
                            : '')
                      "
                      @click.prevent.stop="
                        $router.push({ path: '/profile#contact' })
                      "
                      ><span>联系我们</span></a
                    >
                  </nav>
                </div>
              </div>
            </a>
            <a
              href="/dynamic"
              :class="
                'nav-item nav-link' +
                  ($route.meta.activeTag === 'dynamic' ? ' active' : '')
              "
              @mouseenter="nav2_2 = true"
              @mouseleave="nav2_2 = false"
              @click.prevent="$router.push({ path: '/dynamic' })"
            >
              <span>公司动态</span>
              <div class="nav2" v-show="nav2_2">
                <div class="box">
                  <nav class="nav nav-pills">
                    <a
                      href="/dynamic/news"
                      :class="
                        'nav-item nav-link' +
                          ($route.meta.activeTag === 'dynamic' &&
                          $route.params.content === 'news'
                            ? ' active'
                            : '')
                      "
                      @click.prevent.stop="
                        $router.push({ path: '/dynamic/news' })
                      "
                      ><span>新闻快讯</span></a
                    >
                    <a
                      href="/dynamic/notice"
                      :class="
                        'nav-item nav-link' +
                          ($route.meta.activeTag === 'dynamic' &&
                          $route.params.content === 'notice'
                            ? ' active'
                            : '')
                      "
                      @click.prevent.stop="
                        $router.push({ path: '/dynamic/notice' })
                      "
                      ><span>通知公告</span></a
                    >
                  </nav>
                </div>
              </div>
            </a>
            <a
              href="/subordinate"
              :class="
                'nav-item nav-link' +
                  ($route.meta.activeTag === 'subordinate' ? ' active' : '')
              "
              @mouseenter="nav2_3 = true"
              @mouseleave="nav2_3 = false"
              @click.prevent="$router.push({ path: '/subordinate' })"
            >
              <span>下属企业</span>
              <div class="nav2" v-show="nav2_3">
                <div class="box">
                  <nav class="nav nav-pills">
                    <a
                      :href="'/subordinate/' + item.id"
                      v-for="item in nameList"
                      :key="item.id"
                      :class="
                        'nav-item nav-link' +
                          ($route.meta.activeTag === 'subordinate' &&
                          $route.params.id === item.id + ''
                            ? ' active'
                            : '')
                      "
                      @click.prevent.stop="
                        $router.push({ path: '/subordinate/' + item.id })
                      "
                      ><span>{{ item.name }}</span></a
                    >
                  </nav>
                </div>
              </div>
            </a>
            <a
              href="/cooperation"
              :class="
                'nav-item nav-link' +
                  ($route.meta.activeTag === 'cooperation' ? ' active' : '')
              "
              @mouseenter="nav2_4 = true"
              @mouseleave="nav2_4 = false"
              @click.prevent="$router.push({ path: '/cooperation' })"
            >
              <span>合作平台</span>
              <div class="nav2" v-show="nav2_4 && false">
                <div class="box">
                  <nav class="nav nav-pills">
                    <a
                      href="/cooperation#product"
                      :class="
                        'nav-item nav-link' +
                          ($route.meta.activeTag === 'cooperation' &&
                          $route.hash === '#product'
                            ? ' active'
                            : '')
                      "
                      @click.prevent.stop="
                        $router.push({ path: '/cooperation#product' })
                      "
                      ><span>产品展示</span></a
                    >
                    <a
                      href="/cooperation#technology"
                      :class="
                        'nav-item nav-link' +
                          ($route.meta.activeTag === 'cooperation' &&
                          $route.hash === '#technology'
                            ? ' active'
                            : '')
                      "
                      @click.prevent.stop="
                        $router.push({ path: '/cooperation#technology' })
                      "
                      ><span>科技成果</span></a
                    >
                    <a
                      href="/cooperation#hatch"
                      :class="
                        'nav-item nav-link' +
                          ($route.meta.activeTag === 'cooperation' &&
                          $route.hash === '#hatch'
                            ? ' active'
                            : '')
                      "
                      @click.prevent.stop="
                        $router.push({ path: '/cooperation#hatch' })
                      "
                      ><span>孵化转化平台</span></a
                    >
                  </nav>
                </div>
              </div>
            </a>
            <a
              href="/party"
              :class="
                'nav-item nav-link' +
                  ($route.meta.activeTag === 'party' ? ' active' : '')
              "
              @mouseenter="nav2_5 = true"
              @mouseleave="nav2_5 = false"
              @click.prevent="$router.push({ path: '/party' })"
            >
              <span>党群之窗</span>
              <div class="nav2" v-show="nav2_5">
                <div class="box">
                  <nav class="nav nav-pills">
                    <a
                      href="/party/dynamic"
                      :class="
                        'nav-item nav-link' +
                          ($route.meta.activeTag === 'party' &&
                          $route.params.content === 'dynamic'
                            ? ' active'
                            : '')
                      "
                      @click.prevent.stop="
                        $router.push({ path: '/party/dynamic' })
                      "
                      ><span>党建动态</span></a
                    >
                    <a
                      href="/party/tradeUnions"
                      :class="
                        'nav-item nav-link' +
                          ($route.meta.activeTag === 'party' &&
                          $route.params.content === 'tradeUnions'
                            ? ' active'
                            : '')
                      "
                      @click.prevent.stop="
                        $router.push({ path: '/party/tradeUnions' })
                      "
                      ><span>公司工会</span></a
                    >
                    <!--<a
                      href="/party/about"
                      :class="
                        'nav-item nav-link' +
                          ($route.meta.activeTag === 'party' &&
                          $route.params.content === 'about'
                            ? ' active'
                            : '')
                      "
                      @click.prevent.stop="
                        $router.push({ path: '/party/about' })
                      "
                      ><span>相关链接</span></a
                    >-->
                  </nav>
                </div>
              </div>
            </a>
            <a
              href="/policy"
              :class="
                'nav-item nav-link' +
                  ($route.meta.activeTag === 'policy' ? ' active' : '')
              "
              @mouseenter="nav2_6 = true"
              @mouseleave="nav2_6 = false"
              @click.prevent="$router.push({ path: '/policy' })"
            >
              <span>政策法规</span>
              <div class="nav2" v-show="nav2_6">
                <div class="box">
                  <nav class="nav nav-pills">
                    <a
                      href="/policy/public"
                      :class="
                        'nav-item nav-link' +
                          ($route.meta.activeTag === 'policy' &&
                          $route.params.content === 'public'
                            ? ' active'
                            : '')
                      "
                      @click.prevent.stop="
                        $router.push({ path: '/policy/public' })
                      "
                      ><span>国家政策</span></a
                    >
                    <a
                      href="/policy/school"
                      :class="
                        'nav-item nav-link' +
                          ($route.meta.activeTag === 'policy' &&
                          $route.params.content === 'school'
                            ? ' active'
                            : '')
                      "
                      @click.prevent.stop="
                        $router.push({ path: '/policy/school' })
                      "
                      ><span>学校文件</span></a
                    >
                    <a
                      href="/policy/company"
                      :class="
                        'nav-item nav-link' +
                          ($route.meta.activeTag === 'policy' &&
                          $route.params.content === 'company'
                            ? ' active'
                            : '')
                      "
                      @click.prevent.stop="
                        $router.push({ path: '/policy/company' })
                      "
                      ><span>公司制度</span></a
                    >
                  </nav>
                </div>
              </div>
            </a>
            <a
              href="/directory"
              :class="
                'nav-item nav-link' +
                  ($route.meta.activeTag === 'directory' ? ' active' : '')
              "
              @click.prevent="$router.push({ path: '/directory' })"
              ><span>服务指南</span></a
            >
          </nav>
        </div>
      </div>
      <!--Nav-->
    </div>
    <!--------------------------头部End-------------------------->
  </div>
</template>
<script>
import { subsidiaryGetApi } from "@/api/allApi";

export default {
  name: "Head",
  data() {
    return {
      nav2_1: false,
      nav2_2: false,
      nav2_3: false,
      nav2_4: false,
      nav2_5: false,
      nav2_6: false,
      nameList: []
    };
  },
  components: {},
  methods: {
    //获取子公司列表
    getNameList() {
      subsidiaryGetApi().then(response => {
        this.nameList = response.data.data.filter(
          item => item.name !== "isDisable"
        );
      });
    }
  },
  mounted() {
    this.getNameList();
  }
};
</script>
<style lang="scss">
#Head {
  margin-bottom: 50px;

  .navOut {
    background-color: rgb(33, 77, 200);

    .nav {
      .nav-item:hover,
      .active {
        background-color: rgb(19, 56, 145);
      }

      .active {
        font-weight: bold;
      }

      .nav-item {
        color: white;
        border-radius: 0;
        padding: 12px 0 12px 16px;
        position: relative;
        cursor: pointer;
        width: auto;

        .nav2 {
          width: auto;
          position: absolute;

          > :before {
            content: " ";
            position: absolute;
            top: -6px;
            left: -moz-calc(50% + (-8px));
            left: -webkit-calc(50% + (-8px));
            left: calc(50% + (-8px));
            width: 0;
            transform: scaleX(1.5);
            border-width: 8px;
            border-style: solid;
            color: #222222;
            border-color: transparent transparent rgb(33, 77, 200) transparent; /* transparent 设置边框颜色透明 */
          }

          .box {
            margin-top: 10px;
            left: -moz-calc(-50% + (54px));
            left: -webkit-calc(-50% + (54px));
            left: calc(-50% + (54px));
            position: relative;
            background-clip: content-box;
            padding-top: 8px;
          }

          .nav {
            border-radius: 22px;
            float: left;
            display: flex;
            flex-wrap: nowrap;
            background-color: rgb(33, 77, 200);
            overflow: hidden;
            font-size: 15px;

            .nav-item {
              padding: 8px 0 8px 16px;
              display: inline-block;
              width: auto;

              span {
                min-width: 4rem;
                padding-right: 16px;
                white-space: nowrap;
              }
            }
          }
        }

        span {
          display: inline-block;
          width: 100%;
          padding-right: 16px;
          border-right: rgb(220, 220, 220) solid 1px;
        }
      }

      .nav-item:last-child {
        span {
          border-right: none;
        }
      }
    }
  }

  .bannerOut {
    height: 200px;
    background: linear-gradient(
      to right,
      rgb(252, 253, 255) 50%,
      rgb(255, 255, 255) 50%
    );

    .banner {
      position: relative;
      height: 200px;
      width: 100%;
      background-repeat: no-repeat;
      background-size: auto 100%;
      background-position: right;
      display: flex;
      align-items: center;

      .title {
        padding-top: 30px;

        .title1 {
          font-family: "huawenxingkai";
          font-size: 38px;
          color: rgb(24, 56, 117);
          font-weight: bold;
          margin-bottom: 4px;
        }

        .title2 {
          font-size: 18px;
          color: rgb(24, 56, 117);
          font-weight: bold;
        }
      }

      .logoImg {
        margin-left: 20px;
        margin-right: 30px;

        img {
          height: 120px;
          width: auto;
        }
      }
    }
  }
}
</style>
