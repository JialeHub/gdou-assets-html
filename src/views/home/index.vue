<template>
  <div id="home">
    <div class="container-fluid">
      <div class="row">
        <div class="col col-lg-8 col-12 pl-lg-0">
          <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-ride="carousel"
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
                    carouselItem.length > 0 &&
                      carouselItem[0].link !== 'http://'
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
                    v-if="
                    carouselItem.length > 0 &&
                      carouselItem[0].link === 'http://'
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
                    v-if="carouselItem.length > 1 && item2.link !== 'http://'"
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
                    v-if="carouselItem.length > 1 && item2.link === 'http://'"
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
        <div class="col col-lg-4 col-12 mt-3 mt-lg-0 pr-lg-0">
          <div
              class="part2"
              style="width: 100%;border: 1px solid rgb(215,215,215);"
          >
            <div class="msgLinkCard d-flex flex-column h-100">
              <div
                  class="title row w-100 align-self-center mt-1"
                  style="padding:0 15px;height: 50px;"
              >
                <div
                    class="titleL col-9 d-flex align-items-center pl-0"
                    style="border-bottom: rgb(215,215,215) solid 2px;font-family: 'Arial Negreta', 'Arial Normal', 'Arial';font-weight: 700;color: #204BB0;"
                >
                  <span
                      style="bottom: -2px;position: relative;line-height: 46px; border-bottom: #204BB0 solid 2px;height: 100%;"
                  >新闻快讯</span
                  >
                </div>
                <div
                    class="titleR col-3 d-flex align-items-center justify-content-center pr-0"
                    style="border-bottom: rgb(215,215,215) solid 2px;"
                >
                  <a href="/dynamic/news">更多</a>
                </div>
              </div>
              <div class="msgLinkBox pt-3" style="flex: 1 1 auto">
                <ul
                    class="d-flex flex-column h-100"
                    :style=" 'max-height: calc(100% * (' + articleList0.length + '/8))' "
                >
                  <li
                      class="row align-self-center justify-content-center w-100"
                      v-for="item0 in articleList0"
                      :key="item0.id"
                      style="flex: 1 1 auto;"
                  >
                    <div
                        class="col-9"
                        style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"
                    >
                      <a :href="'/dynamic/news/' + item0.id" @click.prevent="getLink('/dynamic/news/',item0.id)">
                        {{ item0.title }}
                      </a>
                    </div>
                    <div
                        class="col-3 text-center"
                        style="color: #a1a1a1;font-size: 13px;"
                    >
                      {{ item0.createDate | formatDate2 }}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="!$isIE()" class="row mt-3 mt-lg-5">
        <div class="col col-lg-8 col-12 pl-lg-0">
          <div v-if="false"
               class=""
               style="width: 100%;height: auto;border: 1px solid rgb(215,215,215);"
          >
            <div class="msgLinkCard d-flex flex-column h-100">
              <div
                  class="title row w-100 align-self-center mt-1"
                  style="padding:0 15px;height: 50px;"
              >
                <div
                    class="titleL col-9 d-flex align-items-center pl-0"
                    style="border-bottom: rgb(215,215,215) solid 2px;font-family: 'Arial Negreta', 'Arial Normal', 'Arial';font-weight: 700;color: #204BB0;"
                >
                  <span
                      style="bottom: -2px;position: relative;line-height: 46px; border-bottom: #204BB0 solid 2px;height: 100%;">孵化转化平台</span>
                </div>
                <div
                    class="titleR col-3 d-flex align-items-center justify-content-end pr-3"
                    style="border-bottom: rgb(215,215,215) solid 2px;"
                >
                  <a href="/cooperation#hatch">更多</a>
                </div>
              </div>
              <div class="msgLinkBox pt-3" style="flex: 1 1 auto">
                <div class="listBox h-100 pl-3" style="overflow-y: hidden">
                  <ul
                      class="h-100 mb-0"
                      style="display: -webkit-box;-webkit-overflow-scrolling: touch;-ms-overflow-style: none;overflow: -moz-scrollbars-none;"
                  >
                    <li
                        v-for="item3 in list3"
                        :key="item3.id"
                        class="pr-4  pl-2 pb-2"
                        style="width: 33.4%;"
                    >
                      <div
                          style="height: 100%;box-sizing: content-box;"
                      >
                        <div
                            class="w-100"
                            style="background-color: #8dcce8;"
                        >
                          <a href="/cooperation#hatch">
                            <img
                                :src="item3.cover"
                                alt=""
                                width="100%"
                                height="auto"
                            />
                          </a>
                        </div>
                        <div
                            class="mt-2 text w-100"
                            style="font-weight: bold;font-size: 15px;text-align: justify;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 1;overflow: hidden;"
                        >
                          {{ item3.name }}
                        </div>
                        <div
                            class="mt-1 text w-100"
                            style="text-align: justify;font-size:14px;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 5;overflow: hidden;"
                        >
                          <span>
                            {{ item3.content }}
                          </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col col-lg-4 col-12 mt-3 mt-lg-0 pr-lg-0">
          <div
              class=""
              style="width: 100%;height: 100%;border: 1px solid rgb(215,215,215);"
          >
            <div class="msgLinkCard d-flex flex-column h-100">
              <div
                  class="title row w-100 align-self-center mt-1"
                  style="padding:0 15px;height: 50px;"
              >
                <div
                    class="titleL col-9 d-flex align-items-center pl-0"
                    style="border-bottom: rgb(215,215,215) solid 2px;font-family: 'Arial Negreta', 'Arial Normal', 'Arial';font-weight: 700;color: #204BB0;"
                >
                  <span
                      style="bottom: -2px;position: relative;line-height: 46px; border-bottom: #204BB0 solid 2px;height: 100%;"
                  >通知公告</span
                  >
                </div>
                <div
                    class="titleR col-3 d-flex align-items-center justify-content-center pr-0"
                    style="border-bottom: rgb(215,215,215) solid 2px;"
                >
                  <a href="/dynamic/notice">更多</a>
                </div>
              </div>
              <div class="msgLinkBox pt-3" style="flex: 1 1 auto">
                <ul
                    class="d-flex flex-column h-100"
                    :style="
                    'max-height: calc(100% * (' + articleList1.length + '/8))'
                  "
                >
                  <li
                      class="row align-self-center justify-content-center w-100"
                      v-for="item1 in articleList1"
                      :key="item1.id"
                      style="flex: 1 1 auto;"
                  >
                    <div
                        class="col-9"
                        style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"
                    >
                      <a :href="'/dynamic/notice/' + item1.id" @click.prevent="getLink('/dynamic/notice/',item1.id)">
                        {{ item1.title }}
                      </a>
                    </div>
                    <div
                        class="col-3 text-center"
                        style="color: #a1a1a1;font-size: 13px;"
                    >
                      {{ item1.createDate | formatDate2 }}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    articleFindApi,
    articleGetApi,
    pageCooperationApi,
    slideShowGetApi
  } from "@/api/allApi";

  export default {
    name: "Home",
    data() {
      return {
        carouselItem: [],
        list3: [],
        articleList0: [],
        articleList1: []
      };
    },
    mounted() {
      this.getCarouselItem();
      this.getPageCooperation3();
      this.getArticleList(0, 8, "articleList0").then(() => {
        this.getArticleList(1, 8, "articleList1");
      });
    },
    methods: {
      getLink(url, id) {
        let newWindow = window.open();
        articleFindApi({id}).then(response => {
          if (response.data.code === 200) {
            if (response.data.data.link !== "http://") {
              newWindow.location.href = response.data.data.link;
              //window.open(response.data.data.link);
            } else {
              newWindow.close();
              this.$router.push({path: url + id})
            }
          } else if (response.data.code === 404) {
            newWindow.location.href = "/404";
          }
        });
      },
      getArticleList(typeId, size, arr) {
        return new Promise(resolve => {
          let param = {
            pagination: 0,
            size,
            typeId,
            title: ""
          };
          articleGetApi(param)
            .then(result => {
              let response = result.data.data;
              this[`${arr}`] = response.list;
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
              if (item.slideShowType === 0) {
                this.carouselItem.push(item);
              }
            });
          }
        });
      },
      getPageCooperation3() {
        let param = {
          pagination: 0,
          size: 20,
          typeId: 2
        };
        pageCooperationApi(param).then(response => {
          if (response.data.code === 200) {
            this.list3 = response.data.data.list;
          }
        });
      }
    }
  };
</script>

<style lang="scss">
  #home {
    .part2 {
      height: 100%;
      @media screen and (max-width: 992px) {
        height: 420px;
      }
    }

    .titleR {
      a {
        color: #a1a1a1;
        font-size: 15px;
      }

      a:hover {
        color: #214dc8;
      }
    }

    .msgLinkBox {
      a {
        color: #333;
        font-size: 15px;
      }

      a:hover {
        color: #214dc8;
      }
    }
  }
</style>
