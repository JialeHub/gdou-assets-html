<template>
  <div id="party">
    <div class="container-fluid h-100">
      <div class="row justify-content-center h-100 flex-column">
        <div class="col-12" style="flex: 0;">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
            v-if="carouselItem.length > 0"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                v-if="carouselItem.length > 0"
                :data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                v-if="index !== 0"
                v-for="(item, index) in carouselItem"
                :key="item.id"
                :data-slide-to="index"
              ></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <a
                  v-if="
                    carouselItem[0].link !== 'http://' &&
                      carouselItem.length > 0
                  "
                  :href="carouselItem[0].link"
                  target="_blank"
                >
                  <img
                    :src="carouselItem[0].coverUrl"
                    class="d-block w-100 img-fluid"
                    alt=""
                  />
                </a>
                <img
                  v-else-if="
                    carouselItem[0].link === 'http://' &&
                      carouselItem.length > 0
                  "
                  :src="carouselItem[0].coverUrl"
                  class="d-block w-100 img-fluid"
                  alt=""
                />
              </div>
              <div
                class="carousel-item"
                v-if="index2 > 0"
                v-for="(item2, index2) in carouselItem"
                :key="item2.id"
              >
                <a
                  v-if="item2.link !== 'http://' && carouselItem.length > 1"
                  :href="item2.link"
                  target="_blank"
                >
                  <img
                    :src="item2.coverUrl"
                    class="d-block w-100 img-fluid"
                    alt=""
                  />
                </a>
                <img
                  v-else-if="
                    item2.link === 'http://' && carouselItem.length > 1
                  "
                  :src="item2.coverUrl"
                  class="d-block w-100 img-fluid"
                  alt=""
                />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div
          class="col-12 nav nav-pills nav-fill"
          style="flex: 0;padding-left: 15px;"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <a
            class="nav-link nav-item active"
            id="v-pills-dynamic-tab"
            data-toggle="pill"
            href="#v-pills-dynamic"
            role="tab"
            @click="$router.push({ path: '/party/dynamic' })"
            aria-controls="v-pills-dynamic"
            aria-selected="true"
            >党建动态</a
          >
          <a
            class="nav-link nav-item"
            id="v-pills-tradeUnions-tab"
            data-toggle="pill"
            href="#v-pills-tradeUnions"
            role="tab"
            @click="$router.push({ path: '/party/tradeUnions' })"
            aria-controls="v-pills-tradeUnions"
            aria-selected="false"
            >公司工会</a
          >
          <a
            class="nav-link nav-item"
            id="v-pills-about-tab"
            data-toggle="pill"
            href="#v-pills-about"
            role="tab"
            @click="$router.push({ path: '/party/about' })"
            aria-controls="v-pills-about"
            aria-selected="false"
            >相关链接</a
          >
        </div>
        <div
          class="col-12 tab-content"
          style="flex: 1;min-height: 200px"
          id="v-pills-tabContent"
        >
          <div
            class="tab-pane fade show active"
            id="v-pills-dynamic"
            role="tabpanel"
            aria-labelledby="v-pills-dynamic-tab"
          >
            <div class="contentCard d-flex flex-column  ">
              <div
                class="title row w-100 align-self-center mt-1"
                style="padding:0 15px;height: 50px;"
              >
                <div
                  class="titleL col d-flex align-items-center pl-0"
                  style="border-bottom: rgb(215,215,215) solid 2px;font-family: 'Arial Negreta', 'Arial Normal', 'Arial';font-weight: 700;color: #204BB0;"
                >
                  <span
                    style="bottom: -2px;position: relative;line-height: 46px; border-bottom: #204BB0 solid 2px;height: 100%;font-size: 18px;"
                    >党建动态</span
                  >
                </div>
                <div
                  class="titleR col-auto d-flex align-items-center justify-content-center pr-0"
                  style="border-bottom: rgb(215,215,215) solid 2px;"
                >
                  <span class="bread">当前位置：</span>
                  <a href="/" class="bread breadNav">首页</a>
                  <a href="/party" class="bread breadNav">- 党群之窗</a>
                  <a href="/party/dynamic" class="bread breadNav">- 党建动态</a>
                </div>
              </div>
              <div
                class="contentBox d-flex flex-column"
                style="flex: 1;padding:16px 15px"
              >
                <ul class="d-flex flex-column flex-grow-1">
                  <li
                    class="row align-self-center w-100 pb-3"
                    v-for="item2 in articleList2"
                    :key="item2.id"
                  >
                    <div
                      class="col pl-0"
                      style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"
                    >
                      <a :href="'/party/dynamic/' + item2.id">
                        {{ item2.title }}
                      </a>
                    </div>
                    <div class="col-auto text-center " style="color: #a1a1a1">
                      {{ item2.createDate | formatDate2 }}
                    </div>
                  </li>
                </ul>
                <pagination ref="pagination2" @getNewData="getArticleList(2)" />
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade h-100"
            id="v-pills-tradeUnions"
            role="tabpanel"
            aria-labelledby="v-pills-tradeUnions-tab"
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
                    style="bottom: -2px;position: relative;line-height: 46px; border-bottom: #204BB0 solid 2px;height: 100%;font-size: 18px;"
                    >公司工会</span
                  >
                </div>
                <div
                  class="titleR col-auto d-flex align-items-center justify-content-center pr-0"
                  style="border-bottom: rgb(215,215,215) solid 2px;"
                >
                  <span class="bread">当前位置：</span>
                  <a href="/" class="bread breadNav">首页</a>
                  <a href="/party" class="bread breadNav">- 党群之窗</a>
                  <a href="/party/tradeUnions" class="bread breadNav"
                    >- 公司工会</a
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
                    v-for="item3 in articleList3"
                    :key="item3.id"
                  >
                    <div
                      class="col pl-0"
                      style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"
                    >
                      <a :href="'/party/tradeUnions/' + item3.id">
                        {{ item3.title }}
                      </a>
                    </div>
                    <div class="col-auto text-center " style="color: #a1a1a1">
                      {{ item3.createDate | formatDate2 }}
                    </div>
                  </li>
                </ul>
                <pagination ref="pagination3" @getNewData="getArticleList(3)" />
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade h-100"
            id="v-pills-about"
            role="tabpanel"
            aria-labelledby="v-pills-about-tab"
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
                    style="bottom: -2px;position: relative;line-height: 46px; border-bottom: #204BB0 solid 2px;height: 100%;font-size: 18px;"
                    >相关链接</span
                  >
                </div>
                <div
                  class="titleR col-auto d-flex align-items-center justify-content-center pr-0"
                  style="border-bottom: rgb(215,215,215) solid 2px;"
                >
                  <span class="bread">当前位置：</span>
                  <a href="/" class="bread breadNav">首页</a>
                  <a href="/party" class="bread breadNav">- 党群之窗</a>
                  <a href="/party/about" class="bread breadNav">- 相关链接</a>
                </div>
              </div>
              <div
                class="contentBox d-flex flex-column"
                style="flex: 1;padding:16px 15px"
              >
                <ul class="d-flex flex-column flex-grow-1">
                  <li
                    class="row align-self-center w-100 pb-3"
                    v-for="item8 in articleList8"
                    :key="item8.id"
                  >
                    <div
                      class="col pl-0"
                      style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"
                    >
                      <a href="#" @click.prevent="goLink(item8.id)">
                        {{ item8.title }}
                      </a>
                    </div>
                  </li>
                </ul>
                <pagination ref="pagination8" @getNewData="getArticleList(8)" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { articleFindApi, articleGetApi, slideShowGetApi } from "@/api/allApi";

export default {
  name: "party",
  data() {
    return {
      carouselItem: [],
      articleList2: [],
      articleList3: [],
      articleList8: []
    };
  },
  watch: {
    "$route.params.content"(v) {
      if (v) {
        $("#party #v-pills-" + v.replace("#", "") + "-tab").tab("show");
      }
    }
  },
  mounted() {
    if (this.$route.params.content) {
      $(
        "#party #v-pills-" +
          this.$route.params.content.replace("#", "") +
          "-tab"
      ).tab("show");
    }
    if (this.$route.hash) {
      let str = this.$route.hash.replace("#", "");
      str = str.replace("v-pills-", "");
      str = str.replace("-tab", "");
      this.$router.push({ path: "/party/" + str });
      //$('#party #v-pills-' + str + '-tab').tab('show')
    }
    this.getCarouselItem();
    this.getArticleList(2)
      .then(() => {
        this.getArticleList(3);
      })
      .then(() => {
        this.getArticleList(8);
      });
  },
  methods: {
    goLink(id) {
      articleFindApi({ id }).then(response => {
        if (response.data.code === 200) {
          window.open(response.data.data.link);
        } else if (response.data.code === 404) {
          this.$router.push({ name: "error404" });
        }
      });
    },
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
    },
    getCarouselItem() {
      slideShowGetApi().then(response => {
        if (response.data.code === 200) {
          response.data.data.forEach(item => {
            if (item.slideShowType === 1) {
              this.carouselItem.push(item);
            }
          });
        }
      });
    }
  }
};
</script>

<style lang="scss">
#party {
  .nav {
    .nav-link {
      background-color: rgb(220, 52, 82);
      border-radius: 0;
      color: #f2f2f2;
      font-size: 18px;
      padding: 20px 16px;
    }

    .active,
    .nav-link:hover {
      background-color: rgb(174, 64, 68);
      color: rgb(255, 255, 255);
    }
  }

  .tab-content {
    .tab-pane {
      border: 3px solid rgb(220, 52, 82);
      border-top: 0;
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
