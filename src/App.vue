<template>
  <div id="app">
    <vue-head v-if="$route.meta.type !== 'error'" />
    <div class="container-xl main d-flex">
      <div class="row flex-grow-1" style="max-width: 100%">
        <transition name="fade" mode="out-in">
          <router-view v-wechat-title="$route.meta.title" class="router" />
        </transition>
      </div>
    </div>
    <vue-foot v-if="$route.meta.type !== 'error'" />

    <a @mouseover="stopBay" @mouseleave="goBay" v-show="bayShow&&$route.name=='home'" ref="flad" :href="'/dynamic/notice/'+bayId" class="bay" style="z-index: 9999;background-color: rgb(170,2,0);position: absolute;padding: 18px 18px 12px 12px;" :style="'top:'+top+';left:'+left">
      <div class="title" style="color: rgb(255,255,255);font-size: 16px;font-weight: 600;font-family: 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif">
        <span style="position: absolute;right: 3px;top: -4px;cursor: pointer" @click.prevent="bayShow=false">x</span>
        关于对资产经营公司 <br>
        进行专项检查的通告
      </div>
    </a>
  </div>
</template>

<script>
import {articleFindApi} from "@/api/allApi";

export default {
  name: "App",
  data() {
    return {
      bayId: 78,
      bayTitle: '',
      top: 0,
      left : 0,
      bayShow: true,
      xPos : 0,
      yPos : 0,
      step : 2,
      height : 0,
      Hoffset : 0,
      Woffset : 0,
      yon : 0,
      xon : 0,
      width: 0,
      interval: {}
    };
  },
  components: {
    VueHead: () => import("./views/layout/head/"),
    VueFoot: () => import("./views/layout/foot/")
  },
  mounted() {
    this.top = this.yPos;
    articleFindApi({id: this.bayId}).then(response => {
      this.bayShow = response.data.code !== 404;
    });
  },
  watch: {
    '$route.name'(name){
      if (name==='home'&&this.bayShow===true){
        this.goBay()
      }else{
        this.stopBay();
      }
    }
  },
  methods: {
    stopBay(){
      clearInterval(this.interval)
    },
    goBay(){
      this.interval = setInterval(this.changePos, 20);
    },
    changePos(){
      this.width = document.documentElement.clientWidth || document.body.clientWidth;
      this.height = document.documentElement.clientHeight || document.body.clientHeight;
      let scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
      let scrollTop = document.documentElement.scrollLeft || document.body.scrollTop;
      this.Hoffset = this.$refs.flad.offsetHeight;
      this.Woffset = this.$refs.flad.offsetWidth;
      this.left = this.xPos + scrollLeft +'px';
      this.top = this.yPos + scrollTop +'px';
      if (this.yon) {
        this.yPos = this.yPos + this.step;
      } else {
        this.yPos = this.yPos - this.step;
      }
      if (this.yPos < 0) {
        this.yon = 1;
        this.yPos = 0;
      }
      if (this.yPos >= (this.height - this.Hoffset)) {
        this.yon = 0;
        this.yPos = (this.height - this.Hoffset);
      }
      if (this.xon) {
        this.xPos = this.xPos + this.step;
      } else {
        this.xPos = this.xPos - this.step;
      }
      if (this.xPos < 0) {
        this.xon = 1;
        this.xPos = 0;
      }
      if (this.xPos >= (this.width - this.Woffset)) {
        this.xon = 0;
        this.xPos = (this.width - this.Woffset);
      }
    }
  }
};
</script>

<style lang="scss">
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .main {
    flex: 1 1 auto;

    .router {
      width: 100%;
    }
  }
}
</style>
