<template>
  <div id="home">
    <div class="container-fluid">
      <div class="row">
        <div class="col col-8 pl-0">
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="http://code.z01.com/img/2016instbg_01.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="http://code.z01.com/img/2016instbg_02.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="http://code.z01.com/img/2016instbg_03.jpg" class="d-block w-100" alt="...">
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
        <div class="col col-4 pr-0">
          <div class="" style="width: 100%;height: 420px;background-color: #f4f3ef">
            <div class="msgLinkCard d-flex flex-column h-100">
              <div class="title row w-100 align-self-center" style="height: 50px;border-bottom: rgb(215,215,215) solid 2px">
                <div class="titleL col-9 d-flex align-items-center " >
                  <span>新闻快讯</span>
                </div>
                <div class="titleR text-center col-3 d-flex align-items-center ">
                  <span>更多</span>
                </div>
              </div>
              <div class="msgLinkBox pt-3" style="flex: 1">
                <ul class="d-flex flex-column h-100">
                  <li class="row align-self-center justify-content-center w-100" v-for="item in 8" style="flex: 1;">
                    <div class="col-9" style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">
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
      <div class="row mt-5">
        <div class="col col-8 pl-0">
          <div class="" style="width: 100%;height: 420px;background-color: #717171"></div>
        </div>
        <div class="col col-4 pr-0">
          <div class="" style="width: 100%;height: 420px;background-color: #8dcce8"></div>
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
    .carousel {
      height: 420px;

      .carousel-inner {
        .carousel-item {
          height: 420px;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }

    }
  }
</style>
