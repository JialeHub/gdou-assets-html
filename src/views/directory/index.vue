<template>
  <div id="directory">
    <div class="container-fluid h-100">
      <div class="row h-100">
        <div class="col myTab-content">
          <div class="myTab-pane h-100">
            <div class="contentCard d-flex flex-column h-100">
              <div class="title row w-100 align-self-center mt-1" style="padding:0 15px;height: 50px;">
                <div class="titleL col d-flex align-items-center pl-0"
                     style="border-bottom: rgb(215,215,215) solid 2px;font-family: 'Arial Negreta', 'Arial Normal', 'Arial';font-weight: 700;color: #204BB0;">
                  <span
                      style="bottom: -2px;position: relative;line-height: 46px; border-bottom: #204BB0 solid 2px;height: 100%;">服务指南</span>
                </div>
                <div class="titleR col-auto d-flex align-items-center justify-content-center pr-0"
                     style="border-bottom: rgb(215,215,215) solid 2px;">
                  <span class="bread">当前位置：</span>
                  <a href="/" class="bread breadNav">首页</a>
                  <a href="/directory" class="bread breadNav">- 服务指南</a>
                </div>
              </div>
              <div class="contentBox d-flex flex-column" style="flex: 1;padding:16px 15px">
                <ul class="d-flex flex-column flex-grow-1">
                  <li class="pt-2 pb-3"> <h4 style="color: #333;font-weight: bold;text-align: center">服务指南</h4></li>
                  <li class="row align-self-center w-100 pb-3" v-for="item in 2">
                    <div class="col pl-0" style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">
                      <a href="#">学校召开学习贯彻党的十九届四中全会中全会中全会中全会精</a>
                    </div>
                    <div class="col-auto text-center " style="color: #a1a1a1">
                      11.11
                    </div>
                  </li>
                </ul>
                <pagination ref="pagination" @getNewData=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "directory",
    data() {
      return {};
    },
    mounted() {
      console.log(this.$route);
    },
    methods: {},
  };
</script>

<style lang="scss">
  #directory {
    .myTab-content {
      .myTab-pane {
        border: 1px solid rgba(215, 215, 215, 1);
        background-color: #fff;
        min-height: 100%;
        padding: 10px;
      }

      .contentCard {
        .contentBox{
          ul{
            li{
              a{
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
