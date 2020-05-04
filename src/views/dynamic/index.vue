<template>
  <div id="dynamic">
    <div class="container-fluid h-100">
      <div class="row h-100">
        <div
          class="col nav flex-column nav-pills"
          style="max-width:200px"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <div
            style="padding: 0 16px;font-size: 18px;color: #fff; line-height: 60px; height: 60px;background: rgb(32,75,176);"
          >
            公司动态
          </div>
          <a
            class="nav-link active"
            id="v-pills-news-tab"
            data-toggle="pill"
            href="#v-pills-news"
            role="tab"
            @click="$router.push({ path: '/dynamic/news' })"
            aria-controls="v-pills-news"
            aria-selected="true"
            >新闻快讯</a
          >
          <a
            class="nav-link"
            id="v-pills-notice-tab"
            data-toggle="pill"
            href="#v-pills-notice"
            role="tab"
            @click="$router.push({ path: '/dynamic/notice' })"
            aria-controls="v-pills-notice"
            aria-selected="false"
            >通知公告</a
          >
        </div>
        <div class="col tab-content" id="v-pills-tabContent">
          <div
            class="tab-pane fade h-100 show active h-100"
            id="v-pills-news"
            role="tabpanel"
            aria-labelledby="v-pills-news-tab"
          >
            <div class="contentCard d-flex flex-column h-100">
              <div
                class="title row w-100 align-self-center mt-1"
                style="padding:0 15px;height: 50px;"
              >
                <div
                  class="titleL col d-flex align-items-center pl-0"
                  style="border-bottom: rgb(215,215,215) solid 2px;font-family: 'Arial Negreta', 'Arial Normal', 'Arial';font-weight: 700;color: #204BB0;"
                >
                  <span
                    style="bottom: -2px;position: relative;line-height: 46px; border-bottom: #204BB0 solid 2px;height: 100%;"
                    >新闻快讯</span
                  >
                </div>
                <div
                  class="titleR col-auto d-flex align-items-center justify-content-center pr-0"
                  style="border-bottom: rgb(215,215,215) solid 2px;"
                >
                  <span class="bread">当前位置：</span>
                  <a href="/" class="bread breadNav">首页</a>
                  <a href="/dynamic" class="bread breadNav">- 公司动态</a>
                  <a href="/dynamic/news" class="bread breadNav">- 新闻快讯</a>
                </div>
              </div>
              <div
                class="contentBox d-flex flex-column"
                style="flex: 1;padding:16px 15px"
              >
                <ul class="d-flex flex-column flex-grow-1">
                  <li
                    class="row align-self-center w-100 pb-3"
                    v-for="item0 in articleList0"
                    :key="item0.id"
                  >
                    <div
                      class="col pl-0"
                      style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"
                    >
                      <a :href="'/dynamic/news/' + item0.id">
                        {{ item0.title }}
                      </a>
                    </div>
                    <div class="col-auto text-center " style="color: #a1a1a1">
                      {{ item0.createDate | formatDate2 }}
                    </div>
                  </li>
                </ul>
                <pagination ref="pagination0" @getNewData="getArticleList(0)" />
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade h-100"
            id="v-pills-notice"
            role="tabpanel"
            aria-labelledby="v-pills-notice-tab"
          >
            <div class="contentCard d-flex flex-column h-100">
              <div
                class="title row w-100 align-self-center mt-1"
                style="padding:0 15px;height: 50px;"
              >
                <div
                  class="titleL col d-flex align-items-center pl-0"
                  style="border-bottom: rgb(215,215,215) solid 2px;font-family: 'Arial Negreta', 'Arial Normal', 'Arial';font-weight: 700;color: #204BB0;"
                >
                  <span
                    style="bottom: -2px;position: relative;line-height: 46px; border-bottom: #204BB0 solid 2px;height: 100%;"
                    >通知公告</span
                  >
                </div>
                <div
                  class="titleR col-auto d-flex align-items-center justify-content-center pr-0"
                  style="border-bottom: rgb(215,215,215) solid 2px;"
                >
                  <span class="bread">当前位置：</span>
                  <a href="/" class="bread breadNav">首页</a>
                  <a href="/dynamic" class="bread breadNav">- 公司动态</a>
                  <a href="/dynamic/notice" class="bread breadNav"
                    >- 通知公告</a
                  >
                </div>
              </div>
              <div
                class="contentBox d-flex flex-column"
                style="flex: 1;padding:16px 15px"
              >
                <ul class="d-flex flex-column flex-grow-1">
                  <li
                    class="row align-self-center w-100 pb-3"
                    v-for="item1 in articleList1"
                    :key="item1.id"
                  >
                    <div
                      class="col pl-0"
                      style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"
                    >
                      <a :href="'/dynamic/news/' + item1.id">
                        {{ item1.title }}
                      </a>
                    </div>
                    <div class="col-auto text-center " style="color: #a1a1a1">
                      {{ item1.createDate | formatDate2 }}
                    </div>
                  </li>
                </ul>
                <pagination ref="pagination1" @getNewData="getArticleList(1)" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { articleGetApi } from "@/api/allApi";

export default {
  name: "dynamic",
  data() {
    return {
      articleList0: [],
      articleList1: []
    };
  },
  watch: {
    "$route.params.content"(v) {
      if (v) {
        $("#dynamic #v-pills-" + v.replace("#", "") + "-tab").tab("show");
      }
    }
  },
  mounted() {
    if (this.$route.params.content) {
      $(
        "#dynamic #v-pills-" +
          this.$route.params.content.replace("#", "") +
          "-tab"
      ).tab("show");
    }
    if (this.$route.hash) {
      if (this.$route.hash.indexOf("v-pills-") !== -1) {
        let str = this.$route.hash.replace("#", "");
        str = str.replace("v-pills-", "");
        str = str.replace("-tab", "");
        this.$router.push({ path: "/dynamic/" + str });
      }
    }
    this.getArticleList(0).then(() => {
      this.getArticleList(1);
    });
  },
  methods: {
    getArticleList(typeId) {
      /*获取文章，传入id（pagination要与id对应），输出对应数组*/
      return new Promise(resolve => {
        let pagination = this.$refs["pagination" + typeId];
        let param = {
          pagination: pagination.current - 1,
          size: pagination.size,
          typeId,
          title: ""
        };
        articleGetApi(param)
          .then(result => {
            let response = result.data.data;
            this[`articleList${typeId}`] = response.list;
            pagination.total = response.count;
            resolve(response);
          })
          .catch(error => {
            resolve(error);
          });
      });
    }
  }
};
</script>

<style lang="scss">
#dynamic {
  .nav {
    .nav-link {
      background-color: #fff;
      border-radius: 0;
      color: #333;
      border-left: 1px solid rgb(215, 215, 215);
      border-right: 1px solid rgb(215, 215, 215);
      border-bottom: 1px solid rgb(215, 215, 215);
      font-size: 15px;
      padding: 10px 16px;
    }

    .active,
    .nav-link:hover {
      background-color: rgb(215, 215, 215);
      color: rgb(32, 75, 176);
    }
  }

  .tab-content {
    .tab-pane {
      border: 1px solid rgba(215, 215, 215, 1);
      background-color: #fff;
      min-height: 100%;
      padding: 10px;
    }

    .contentCard {
      .contentBox {
        ul {
          li {
            a {
              color: #333;
            }

            a:hover {
              color: #214dc8;
            }
          }
        }
      }

      .title {
        .titleR {
          .bread {
            color: #a1a1a1;
            font-size: 14px;
          }

          .breadNav {
            padding: 0 2px;
            cursor: pointer;
          }

          .breadNav:hover {
            color: rgb(32, 75, 176);
          }
        }
      }
    }
  }
}
</style>
