<template>
  <div id="subordinate">
    <div class="container-fluid h-100">
      <div class="row h-100">
        <div class="col myTab-content">
          <div class="myTab-pane h-100">
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
                    >下属企业</span
                  >
                </div>
                <div
                  class="titleR col-auto d-flex align-items-center justify-content-center pr-0"
                  style="border-bottom: rgb(215,215,215) solid 2px;"
                >
                  <span class="bread">当前位置：</span>
                  <a href="/" class="bread breadNav">首页</a>
                  <a href="/subordinate" class="bread breadNav">- 下属企业</a>
                </div>
              </div>
              <div
                class="contentBox d-flex flex-column"
                style="flex: 1;padding:16px 15px"
              >
                <div class="card-group flex-wrap">
                  <div
                    class="card "
                    style="flex:0 1 50%;border:none"
                    v-for="(item, index) in subsidiaryList"
                    :key="item.id"
                  >
                    <div class="row no-gutters flex-nowrap">
                      <div :class="index % 4 in [0, 1] ? order0 : order1">
                        <a :href="'/subordinate/' + item.id">
                          <img
                            :src="item.cover"
                            class="card-img"
                            alt=""
                            style="height: auto;width: 100%;border-radius: 0"
                          />
                        </a>
                      </div>
                      <div
                        :class="index % 4 in [0, 1] ? order1 : order0"
                        style="flex: 1 1 100%;overflow-y: hidden"
                      >
                        <div class="card-body" style="padding: 12px">
                          <a :href="'/subordinate/' + item.id">
                            <h4
                              class="card-title"
                              style="font-size: 18px;margin-bottom:  8px;margin-top: 2px;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 1;overflow: hidden;font-weight: bold"
                            >
                              {{ item.name }}
                            </h4>
                          </a>
                          <p
                            class="card-text"
                            style="font-size: 14px;line-height: 18px;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 7;overflow: hidden;"
                          >
                            {{ $getSimpleHtml(item.content) }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { subsidiaryFindApi, subsidiaryGetApi } from "@/api/allApi";

export default {
  name: "subordinate",
  data() {
    return {
      nameList: [],
      subsidiaryList: [],
      order1: ["col-6", "order1"],
      order0: ["col-6", "order0"]
    };
  },
  mounted() {
    (async () => {
      await this.getNameList();
      for (let i = 0; i < this.nameList.length; i++) {
        await this.getSubsidiary(this.nameList[i].id);
      }
    })();
  },
  methods: {
    //获取子公司列表
    getNameList() {
      return new Promise(resolve => {
        subsidiaryGetApi()
          .then(response => {
            this.nameList = response.data.data.filter(
              item => item.name !== "isDisable"
            );
            resolve(response);
          })
          .catch(error => {
            resolve(error);
          });
      });
    },
    getSubsidiary(id) {
      return new Promise(resolve => {
        subsidiaryFindApi({ id })
          .then(response => {
            this.subsidiaryList.push(response.data.data);
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
#subordinate {
  .order1 {
    order: 1;
  }
  .order0 {
    order: 0;
    text-align: right;
  }
  .card-group {
    a {
      color: #333333;
    }
    a:hover {
      color: #204bb0;
    }
  }
  .myTab-content {
    .myTab-pane {
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
