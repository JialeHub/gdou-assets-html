<template>
  <div id="policy">
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
            政策法规
          </div>
          <a
            class="nav-link active"
            id="v-pills-public-tab"
            data-toggle="pill"
            href="#v-pills-public"
            role="tab"
            @click="$router.push({ path: '/policy/public' })"
            aria-controls="v-pills-public"
            aria-selected="true"
            >国家政策</a
          >
          <a
            class="nav-link"
            id="v-pills-school-tab"
            data-toggle="pill"
            href="#v-pills-school"
            role="tab"
            @click="$router.push({ path: '/policy/school' })"
            aria-controls="v-pills-school"
            aria-selected="false"
            >学校文件</a
          >
          <a
            class="nav-link"
            id="v-pills-company-tab"
            data-toggle="pill"
            href="#v-pills-company"
            role="tab"
            @click="$router.push({ path: '/policy/company' })"
            aria-controls="v-pills-company"
            aria-selected="false"
            >公司制度</a
          >
        </div>
        <div class="col tab-content" id="v-pills-tabContent">
          <div
            class="tab-pane fade h-100 show active h-100"
            id="v-pills-public"
            role="tabpanel"
            aria-labelledby="v-pills-public-tab"
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
                    >国家政策</span
                  >
                </div>
                <div
                  class="titleR col-auto d-flex align-items-center justify-content-center pr-0"
                  style="border-bottom: rgb(215,215,215) solid 2px;"
                >
                  <span class="bread">当前位置：</span>
                  <a href="/" class="bread breadNav">首页</a>
                  <a href="/policy" class="bread breadNav">- 政策法规</a>
                  <a href="/policy/public" class="bread breadNav">- 国家政策</a>
                </div>
              </div>
              <div
                class="contentBox d-flex flex-column"
                style="flex: 1 1 auto;padding:16px 15px"
              >
                <ul class="d-flex flex-column flex-grow-1">
                  <li
                    class="row align-self-center w-100 pb-3"
                    v-for="item5 in articleList5"
                    :key="item5.id"
                  >
                    <div
                      class="col pl-0"
                      style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"
                    >
                      <a :href="'/policy/public/' + item5.id">
                        {{ item5.title }}
                      </a>
                    </div>
                    <div class="col-auto text-center " style="color: #a1a1a1">
                      {{ item5.createDate | formatDate2 }}
                    </div>
                  </li>
                </ul>
                <pagination ref="pagination5" @getNewData="getArticleList(5)" />
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade h-100"
            id="v-pills-school"
            role="tabpanel"
            aria-labelledby="v-pills-school-tab"
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
                    >学校文件</span
                  >
                </div>
                <div
                  class="titleR col-auto d-flex align-items-center justify-content-center pr-0"
                  style="border-bottom: rgb(215,215,215) solid 2px;"
                >
                  <span class="bread">当前位置：</span>
                  <a href="/" class="bread breadNav">首页</a>
                  <a href="/policy" class="bread breadNav">- 政策法规</a>
                  <a href="/policy/school" class="bread breadNav">- 学校文件</a>
                </div>
              </div>
              <div
                class="contentBox d-flex flex-column"
                style="flex: 1 1 auto;padding:16px 15px"
              >
                <ul class="d-flex flex-column flex-grow-1">
                  <li
                    class="row align-self-center w-100 pb-3"
                    v-for="item6 in articleList6"
                    :key="item6.id"
                  >
                    <div
                      class="col pl-0"
                      style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"
                    >
                      <a :href="'/policy/school/' + item6.id">
                        {{ item6.title }}
                      </a>
                    </div>
                    <div class="col-auto text-center " style="color: #a1a1a1">
                      {{ item6.createDate | formatDate2 }}
                    </div>
                  </li>
                </ul>
                <pagination ref="pagination6" @getNewData="getArticleList(6)" />
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade h-100"
            id="v-pills-company"
            role="tabpanel"
            aria-labelledby="v-pills-company-tab"
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
                    >公司制度</span
                  >
                </div>
                <div
                  class="titleR col-auto d-flex align-items-center justify-content-center pr-0"
                  style=" border-bottom: rgb(215,215,215) solid 2px;"
                >
                  <span class="bread">当前位置：</span>
                  <a href="/" class="bread breadNav">首页</a>
                  <a href="/policy" class="bread breadNav">- 政策法规</a>
                  <a href="/policy/company" class="bread breadNav"
                    >- 公司制度</a
                  >
                </div>
              </div>
              <div
                class="contentBox d-flex flex-column"
                style="flex: 1 1 auto;padding:16px 15px"
              >
                <ul class="d-flex flex-column flex-grow-1">
                  <li
                    class="row align-self-center w-100 pb-3"
                    v-for="item7 in articleList7"
                    :key="item7.id"
                  >
                    <div
                      class="col pl-0"
                      style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"
                    >
                      <a :href="'/policy/company/' + item7.id">
                        {{ item7.title }}
                      </a>
                    </div>
                    <div class="col-auto text-center " style="color: #a1a1a1">
                      {{ item7.createDate | formatDate2 }}
                    </div>
                  </li>
                </ul>
                <pagination ref="pagination7" @getNewData="getArticleList(7)" />
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
  data() {
    return {
      articleList5: [],
      articleList6: [],
      articleList7: []
    };
  },
  watch: {
    "$route.params.content"(v) {
      if (v) {
        $("#policy #v-pills-" + v.replace("#", "") + "-tab").tab("show");
      }
    }
  },
  mounted() {
    if (this.$route.params.content) {
      $(
        "#policy #v-pills-" +
          this.$route.params.content.replace("#", "") +
          "-tab"
      ).tab("show");
    }
    if (this.$route.hash) {
      let str = this.$route.hash.replace("#", "");
      str = str.replace("v-pills-", "");
      str = str.replace("-tab", "");
      this.$router.push({ path: "/policy/" + str });
      //$('#policy #v-pills-' + str + '-tab').tab('show')
    }
    this.getArticleList(5)
      .then(() => {
        this.getArticleList(6);
      })
      .then(() => {
        this.getArticleList(7);
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
#policy {
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
