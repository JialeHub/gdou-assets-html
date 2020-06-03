<template>
  <div id="cooperation">
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
            合作平台
          </div>
          <a
            class="nav-link active"
            id="v-pills-product-tab"
            data-toggle="pill"
            href="#v-pills-product"
            role="tab"
            @click="$router.push({ path: '#product' })"
            aria-controls="v-pills-product"
            aria-selected="true"
            >产品展示</a
          >
          <a
            class="nav-link"
            id="v-pills-technology-tab"
            data-toggle="pill"
            href="#v-pills-technology"
            role="tab"
            @click="$router.push({ path: '#technology' })"
            aria-controls="v-pills-technology"
            aria-selected="false"
            >科技成果</a
          >
          <a
            class="nav-link"
            id="v-pills-hatch-tab"
            data-toggle="pill"
            href="#v-pills-hatch"
            role="tab"
            @click="$router.push({ path: '#hatch' })"
            aria-controls="v-pills-pills"
            aria-selected="false"
            >孵化转化平台</a
          >
        </div>
        <div class="col tab-content" id="v-pills-tabContent">
          <div
            class="tab-pane fade h-100 show active h-100"
            id="v-pills-product"
            role="tabpanel"
            aria-labelledby="v-pills-product-tab"
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
                    >产品展示</span
                  >
                </div>
                <div
                  class="titleR col-auto d-flex align-items-center justify-content-center pr-0"
                  style="border-bottom: rgb(215,215,215) solid 2px;"
                >
                  <span class="bread">当前位置：</span>
                  <a href="/" class="bread breadNav">首页</a>
                  <a href="/cooperation" class="bread breadNav">- 合作平台</a>
                  <a href="/cooperation#product" class="bread breadNav"
                    >- 产品展示</a
                  >
                </div>
              </div>
              <div
                class="contentBox d-flex flex-column"
                style="flex: 1 1 auto;padding:16px 15px"
              >
                <ul class="d-flex flex-column flex-grow-1">
                  <li class="pt-2 pb-3">
                    <h3
                      style="color: #333;font-weight: bold;text-align: center"
                    >
                      产品展示
                    </h3>
                  </li>
                  <li
                    class="row align-self-center w-100 pb-2 pt-2 d-flex mb-4"
                    v-for="item1 in list1"
                    :key="item1.id"
                  >
                    <div class="img" style="flex: 0 0 120px">
                      <img
                        :src="item1.cover"
                        style="border-radius: 50%;width: 120px;height: 120px;"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <div class="msg d-flex flex-column pl-3" style="flex: 1">
                      <div
                        class="title "
                        style="color: #204BB0;font-size: 20px;"
                      >
                        {{ item1.name }}
                      </div>
                      <div
                        class="text"
                        style="font-size: 16px;color: #333;text-align: justify"
                      >
                        {{ item1.content }}<br />
                      </div>
                    </div>
                  </li>
                </ul>
                <pagination
                  ref="pagination1"
                  @getNewData="getPageCooperation1"
                />
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade h-100"
            id="v-pills-technology"
            role="tabpanel"
            aria-labelledby="v-pills-technology-tab"
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
                    >科技成果</span
                  >
                </div>
                <div
                  class="titleR col-auto d-flex align-items-center justify-content-center pr-0"
                  style="border-bottom: rgb(215,215,215) solid 2px;"
                >
                  <span class="bread">当前位置：</span>
                  <a href="/" class="bread breadNav">首页</a>
                  <a href="/cooperation" class="bread breadNav">- 合作平台</a>
                  <a href="/cooperation#technology" class="bread breadNav"
                    >- 科技成果</a
                  >
                </div>
              </div>
              <div
                class="contentBox d-flex flex-column"
                style="flex: 1 1 auto;padding:16px 15px"
              >
                <ul class="row d-flex flex-grow-1 ">
                  <li class="col-12 pt-3 pb-4">
                    <h3
                      style="color: #333;font-weight: bold;text-align: center"
                    >
                      科技成果
                    </h3>
                  </li>
                  <li
                    class="col-6 justify-content-center align-self-top pb-2 pt-2 d-flex mb-4"
                    v-for="item2 in list2"
                    :key="item2.id"
                  >
                    <div class="card" style="width: 22rem;">
                      <img class="card-img-top" :src="item2.cover" alt="" />
                      <div class="card-body">
                        <h4>{{ item2.name }}</h4>
                        <p :title="item2.content" class="card-text" style="text-align: justify;font-size:16px;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 5;overflow: hidden;" >
                          {{ item2.content }}
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
                <pagination
                  ref="pagination2"
                  @getNewData="getPageCooperation2"
                />
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade h-100"
            id="v-pills-hatch"
            role="tabpanel"
            aria-labelledby="v-pills-hatch-tab"
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
                    >孵化转化平台</span
                  >
                </div>
                <div
                  class="titleR col-auto d-flex align-items-center justify-content-center pr-0"
                  style="border-bottom: rgb(215,215,215) solid 2px;"
                >
                  <span class="bread">当前位置：</span>
                  <a
                    href="/"
                    class="bread breadNav"
                    @click="$router.push({ path: '/home' })"
                    >首页</a
                  >
                  <a
                    href="/cooperation"
                    class="bread breadNav"
                    @click="$router.push({ path: '/cooperation' })"
                    >- 合作平台</a
                  >
                  <a href="/cooperation#hatch" class="bread breadNav"
                    >- 孵化转化平台</a
                  >
                </div>
              </div>
              <div
                class="contentBox d-flex flex-column"
                style="flex: 1 0 auto;padding:16px 15px"
              >
                <ul class="row d-flex flex-grow-1 ">
                  <li class="col-12 pt-3 pb-4">
                    <h3 style="color: #333;font-weight: bold;text-align: center" >
                      孵化转化平台
                    </h3>
                  </li>
                  <li
                    class="col-6 justify-content-center  align-self-top pb-2 pt-2 d-flex mb-4"
                    v-for="item3 in list3"
                    :key="item3.id"
                  >
                    <div class="card" style="width: 22rem;">
                      <img class="card-img-top" :src="item3.cover" alt="" />
                      <div class="card-body">
                        <h4>{{ item3.name }}</h4>
                        <p :title="item3.content" class="card-text" style="text-align: justify;font-size:16px;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 5;overflow: hidden;" >
                          {{ item3.content }}
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
                <pagination
                  ref="pagination3"
                  @getNewData="getPageCooperation3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { pageCooperationApi } from "@/api/allApi";

export default {
  name: "cooperation",
  data() {
    return {
      list1: [],
      list2: [],
      list3: []
    };
  },
  watch: {
    "$route.hash"(v) {
      if (v) {
        $("#cooperation #v-pills-" + v.replace("#", "") + "-tab").tab("show");
      }
    }
  },
  mounted() {
    if (this.$route.hash) {
      let str = this.$route.hash.replace("#", "");
      str = str.replace("v-pills-", "");
      str = str.replace("-tab", "");
      $("#cooperation #v-pills-" + str + "-tab").tab("show");
    }
    setTimeout(() => {
      this.getPageCooperation1();
    });
  },
  methods: {
    getPageCooperation1() {
      let pagination = this.$refs.pagination1;
      let param = {
        pagination: pagination.current - 1,
        size: pagination.size,
        typeId: 0
      };
      pageCooperationApi(param)
        .then(response => {
          if (response.data.code === 200) {
            this.list1 = response.data.data.list;
            pagination.total = response.data.data.count;
            this.getPageCooperation2();
          }
        })
        .catch(() => {
          this.getPageCooperation2();
        });
    },
    getPageCooperation2() {
      let pagination = this.$refs.pagination2;
      let param = {
        pagination: pagination.current - 1,
        size: pagination.size,
        typeId: 1
      };
      pageCooperationApi(param)
        .then(response => {
          if (response.data.code === 200) {
            this.list2 = response.data.data.list;
            pagination.total = response.data.data.count;
            this.getPageCooperation3();
          }
        })
        .catch(() => {
          this.getPageCooperation3();
        });
    },
    getPageCooperation3() {
      let pagination = this.$refs.pagination3;
      let param = {
        pagination: pagination.current - 1,
        size: pagination.size,
        typeId: 2
      };
      pageCooperationApi(param).then(response => {
        if (response.data.code === 200) {
          this.list3 = response.data.data.list;
          pagination.total = response.data.data.count;
        }
      });
    }
  }
};
</script>

<style lang="scss">
#cooperation {
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
