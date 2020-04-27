<template>
  <div id="party">
    <div class="container-fluid h-100">
      <div class="row justify-content-center h-100 flex-column">
        <div class="col-12" style="flex: 0;">
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="http://code.z01.com/img/2016instbg_01.jpg" class="d-block w-100 img-fluid" alt="...">
              </div>
              <div class="carousel-item">
                <img src="http://code.z01.com/img/2016instbg_02.jpg" class="d-block w-100 img-fluid" alt="...">
              </div>
              <div class="carousel-item">
                <img src="http://code.z01.com/img/2016instbg_03.jpg" class="d-block w-100 img-fluid" alt="...">
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div class="col-12 nav nav-pills nav-fill" style="flex: 0;padding-left: 15px;" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <a class="nav-link nav-item active" id="v-pills-dynamic-tab" data-toggle="pill" href="#v-pills-dynamic" role="tab"
             @click="$router.push({path:'/party/dynamic'})"
             aria-controls="v-pills-dynamic" aria-selected="true">党建动态</a>
          <a class="nav-link nav-item" id="v-pills-tradeUnions-tab" data-toggle="pill" href="#v-pills-tradeUnions" role="tab"
             @click="$router.push({path:'/party/tradeUnions'})"
             aria-controls="v-pills-tradeUnions" aria-selected="false">公司工会</a>
          <a class="nav-link nav-item" id="v-pills-about-tab" data-toggle="pill" href="#v-pills-about" role="tab"
             @click="$router.push({path:'/party/about'})"
             aria-controls="v-pills-about" aria-selected="false">相关链接</a>
        </div>
        <div class="col-12 tab-content" style="flex: 1;min-height: 200px" id="v-pills-tabContent">
          <div class="tab-pane fade show active" id="v-pills-dynamic" role="tabpanel"
               aria-labelledby="v-pills-dynamic-tab">
            <div class="contentCard d-flex flex-column  ">
              <div class="title row w-100 align-self-center mt-1" style="padding:0 15px;height: 50px;">
                <div class="titleL col d-flex align-items-center pl-0"
                     style="border-bottom: rgb(215,215,215) solid 2px;font-family: 'Arial Negreta', 'Arial Normal', 'Arial';font-weight: 700;color: #204BB0;">
                  <span style="bottom: -2px;position: relative;line-height: 46px; border-bottom: #204BB0 solid 2px;height: 100%;font-size: 18px;">党建动态</span>
                </div>
                <div class="titleR col-auto d-flex align-items-center justify-content-center pr-0"
                     style="border-bottom: rgb(215,215,215) solid 2px;">
                  <span class="bread">当前位置：</span>
                  <a href="/" class="bread breadNav">首页</a>
                  <a href="/party" class="bread breadNav">- 党群之窗</a>
                  <a href="/party/dynamic" class="bread breadNav">- 党建动态</a>
                </div>
              </div>
              <div class="contentBox d-flex flex-column" style="flex: 1;padding:16px 15px">
                <ul class="d-flex flex-column flex-grow-1">
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
          <div class="tab-pane fade h-100" id="v-pills-tradeUnions" role="tabpanel" aria-labelledby="v-pills-tradeUnions-tab">
            <div class="contentCard d-flex flex-column h-100">
              <div class="title row w-100 align-self-center mt-1" style="padding:0 15px;height: 50px;">
                <div class="titleL col d-flex align-items-center pl-0"
                     style="border-bottom: rgb(215,215,215) solid 2px;font-family: 'Arial Negreta', 'Arial Normal', 'Arial';font-weight: 700;color: #204BB0;">
                  <span
                      style="bottom: -2px;position: relative;line-height: 46px; border-bottom: #204BB0 solid 2px;height: 100%;font-size: 18px;">公司工会</span>
                </div>
                <div class="titleR col-auto d-flex align-items-center justify-content-center pr-0"
                     style="border-bottom: rgb(215,215,215) solid 2px;">
                  <span class="bread">当前位置：</span>
                  <a href="/" class="bread breadNav">首页</a>
                  <a href="/party" class="bread breadNav">- 党群之窗</a>
                  <a href="/party/tradeUnions" class="bread breadNav">- 公司工会</a>
                </div>
              </div>
              <div class="contentBox d-flex flex-column" style="flex: 1;padding:16px 15px">
                <ul class="d-flex flex-column flex-grow-1">
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
          <div class="tab-pane fade h-100" id="v-pills-about" role="tabpanel" aria-labelledby="v-pills-about-tab">
            <div class="contentCard d-flex flex-column h-100">
              <div class="title row w-100 align-self-center mt-1" style="padding:0 15px;height: 50px;">
                <div class="titleL col d-flex align-items-center pl-0"
                     style="border-bottom: rgb(215,215,215) solid 2px;font-family: 'Arial Negreta', 'Arial Normal', 'Arial';font-weight: 700;color: #204BB0;">
                  <span
                      style="bottom: -2px;position: relative;line-height: 46px; border-bottom: #204BB0 solid 2px;height: 100%;font-size: 18px;">相关链接</span>
                </div>
                <div class="titleR col-auto d-flex align-items-center justify-content-center pr-0"
                     style="border-bottom: rgb(215,215,215) solid 2px;">
                  <span class="bread">当前位置：</span>
                  <a href="/" class="bread breadNav">首页</a>
                  <a href="/party" class="bread breadNav">- 党群之窗</a>
                  <a href="/party/about" class="bread breadNav">- 相关链接</a>
                </div>
              </div>
              <div class="contentBox d-flex flex-column" style="flex: 1;padding:16px 15px">
                <ul class="d-flex flex-column flex-grow-1">
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
    name: "party",
    data() {
      return {};
    },
    watch: {
      '$route.params.content'(v) {
        if (v) {
          $('#party #v-pills-' + v.replace("#", "") + '-tab').tab('show')
        }
      }
    },
    mounted() {
      if (this.$route.params.content) {
        $('#party #v-pills-' + this.$route.params.content.replace("#", "") + '-tab').tab('show')
      }
      if (this.$route.hash) {
        let str = this.$route.hash.replace("#", "");
        str = str.replace("v-pills-", '');
        str = str.replace("-tab", '');
        this.$router.push({path: '/party/' + str});
        //$('#party #v-pills-' + str + '-tab').tab('show')
      }
    },
    methods: {},
  };
</script>

<style lang="scss">
  #party {
    .nav {
      .nav-link {
        background-color: rgb(220,52,82);
        border-radius: 0;
        color: #f2f2f2;
        font-size: 18px;
        padding: 20px 16px;
      }

      .active, .nav-link:hover {
        background-color: rgb(174,64,68);
        color: rgb(255,255,255);
      }
    }

    .tab-content {
      .tab-pane {
        border: 3px solid rgb(220,52,82);
        border-top: 0;
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
