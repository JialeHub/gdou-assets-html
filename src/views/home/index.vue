<template>
  <div id="home">
    <div class="container-fluid">
      <div class="row">
        <div class="col col-lg-8 col-12 pl-lg-0">
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
        <div class="col col-lg-4 col-12 mt-3 mt-lg-0 pr-lg-0">
          <div class="part2" style="width: 100%;border: 1px solid rgb(215,215,215);">
            <div class="msgLinkCard d-flex flex-column h-100">
              <div class="title row w-100 align-self-center mt-1" style="padding:0 15px;height: 50px;">
                <div class="titleL col-9 d-flex align-items-center pl-0"
                     style="border-bottom: rgb(215,215,215) solid 2px;font-family: 'Arial Negreta', 'Arial Normal', 'Arial';font-weight: 700;color: #204BB0;">
                  <span
                      style="bottom: -2px;position: relative;line-height: 46px; border-bottom: #204BB0 solid 2px;height: 100%;">新闻快讯</span>
                </div>
                <div class="titleR col-3 d-flex align-items-center justify-content-center pr-0"
                     style="border-bottom: rgb(215,215,215) solid 2px;">
                  <a href="/dynamic/news">更多</a>
                </div>
              </div>
              <div class="msgLinkBox pt-3" style="flex: 1">
                <ul class="d-flex flex-column h-100">
                  <li class="row align-self-center justify-content-center w-100" v-for="item in 8" style="flex: 1;">
                    <div class="col-9"
                         style="color: #333;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">
                      学校召开学习贯彻党的十九届四中全会中全会中全会中全会精
                    </div>
                    <div class="col-3 text-center">
                      11.11
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-3 mt-lg-5">
        <div class="col col-lg-8 col-12 pl-lg-0">
          <div class="" style="width: 100%;height: 420px;border: 1px solid rgb(215,215,215);">
            <div class="msgLinkCard d-flex flex-column h-100">
              <div class="title row w-100 align-self-center mt-1" style="padding:0 15px;height: 50px;">
                <div class="titleL col-9 d-flex align-items-center pl-0"
                     style="border-bottom: rgb(215,215,215) solid 2px;font-family: 'Arial Negreta', 'Arial Normal', 'Arial';font-weight: 700;color: #204BB0;">
                  <span
                      style="bottom: -2px;position: relative;line-height: 46px; border-bottom: #204BB0 solid 2px;height: 100%;">孵化转化平台</span>
                </div>
                <div class="titleR col-3 d-flex align-items-center justify-content-end pr-3"
                     style="border-bottom: rgb(215,215,215) solid 2px;">
                  <a href="/cooperation#hatch">更多</a>
                </div>
              </div>
              <div class="msgLinkBox pt-3" style="flex: 1">
                <div class="listBox h-100 pl-3" style="overflow-y: hidden">
                  <ul class="h-100"
                      style="display: -webkit-box;-webkit-overflow-scrolling: touch;-ms-overflow-style: none;overflow: -moz-scrollbars-none;">
                    <li v-for="item in 8" class="pr-4  pl-2 pb-2" style="width: 33.4%;">
                      <div style="height: 100%;box-sizing: content-box;">
                        <div class="w-100" style="background-color: #8dcce8;height: 43%;"></div>
                        <div class="mt-2 text w-100"
                             style="text-align: justify;font-size:14px;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 8;overflow: hidden;">
                          <span>萨阿沙尔法国然而萨阿沙尔法国然而萨阿沙尔法国然而萨阿沙尔法国然而萨阿沙尔法国然而萨阿沙尔法国然而萨阿沙尔法国然而萨阿沙尔法国然而</span>
                          <span>萨阿沙尔法国然而萨阿沙尔法国然而萨阿沙尔法国然而萨阿沙尔法国然而萨阿沙尔法国然而萨阿沙尔法国然而萨阿沙尔法国然而萨阿沙尔法国然而</span>
                          <span>萨阿沙尔法国然而萨阿沙尔法国然而萨阿沙尔法国然而萨阿沙尔法国然而萨阿沙尔法国然而萨阿沙尔法国然而萨阿沙尔法国然而萨阿沙尔法国然而</span>
                          <span>萨阿沙尔法国然而萨阿沙尔法国然而萨阿沙尔法国然而萨阿沙尔法国然而萨阿沙尔法国然而萨阿沙尔法国然而萨阿沙尔法国然而萨阿沙尔法国然而</span>
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
          <div class="" style="width: 100%;height: 420px;border: 1px solid rgb(215,215,215);">
            <div class="msgLinkCard d-flex flex-column h-100">
              <div class="title row w-100 align-self-center mt-1" style="padding:0 15px;height: 50px;">
                <div class="titleL col-9 d-flex align-items-center pl-0"
                     style="border-bottom: rgb(215,215,215) solid 2px;font-family: 'Arial Negreta', 'Arial Normal', 'Arial';font-weight: 700;color: #204BB0;">
                  <span
                      style="bottom: -2px;position: relative;line-height: 46px; border-bottom: #204BB0 solid 2px;height: 100%;">通知公告</span>
                </div>
                <div class="titleR col-3 d-flex align-items-center justify-content-center pr-0"
                     style="border-bottom: rgb(215,215,215) solid 2px;">
                  <a href="/dynamic/notice">更多</a>
                </div>
              </div>
              <div class="msgLinkBox pt-3" style="flex: 1">
                <ul class="d-flex flex-column h-100">
                  <li class="row align-self-center justify-content-center w-100" v-for="item in 8" style="flex: 1;">
                    <div class="col-9"
                         style="color: #333;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">
                      学校召开学习贯彻党的十九届四中全会中全会中全会中全会精
                    </div>
                    <div class="col-3 text-center">
                      11.11
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
  export default {
    name: "Home",
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
  #home {
    .part2{
      height: 100%;
      @media screen and (max-width: 992px){
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
  }
</style>
