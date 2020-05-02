<template>
  <div id="subordinate">
    <div class="container-fluid">
      <div class="row">
          <a class="nav-link active" id="v-pills-news-tab" data-toggle="pill" href="#v-pills-news" role="tab"
             @click="$router.push({path:'/subordinate/news'})"
             aria-controls="v-pills-news" aria-selected="true"></a>
          <a class="nav-link" id="v-pills-notice-tab" data-toggle="pill" href="#v-pills-notice" role="tab"
             @click="$router.push({path:'/subordinate/notice'})"
             aria-controls="v-pills-notice" aria-selected="false"></a>
        <a class="nav-link" id="v-pills-three-tab" data-toggle="pill" href="#v-pills-three" role="tab"
             @click="$router.push({path:'/subordinate/three'})"
             aria-controls="v-pills-notice" aria-selected="false"></a>
        <a class="nav-link" id="v-pills-four-tab" data-toggle="pill" href="#v-pills-four" role="tab"
             @click="$router.push({path:'/subordinate/four'})"
             aria-controls="v-pills-notice" aria-selected="false"></a>
        <div class="col tab-content" id="v-pills-tabContent">
          <div class="tab-pane fade show active" style="" id="v-pills-news" role="tabpanel"
               aria-labelledby="v-pills-news-tab">
            <div class="contentCard d-flex flex-column h-100">
              <div class="title row w-100 align-self-center mt-1" style="padding:0 15px;height: 50px;">
                <div class="titleL col d-flex align-items-center pl-0"
                     style="border-bottom: rgb(215,215,215) solid 2px;font-family: 'Arial Negreta', 'Arial Normal', 'Arial';font-weight: 700;color: #204BB0;">
                  <span
                          style="bottom: -2px;position: relative;line-height: 46px; border-bottom: #204BB0 solid 2px;height: 100%;">船舶公司</span>
                </div>
                <div class="titleR col-auto d-flex align-items-center justify-content-center pr-0"
                     style="border-bottom: rgb(215,215,215) solid 2px;">
                  <span class="bread">当前位置：</span>
                  <a href="/" class="bread breadNav">首页</a>
                  <a href="/subordinate" class="bread breadNav">- 下属企业</a>
                  <a href="/subordinate/news" class="bread breadNav">- 船舶公司</a>
                </div>
              </div>
              <div class="contentBox" style="flex: 1;padding:16px 15px">

              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="v-pills-notice" role="tabpanel" aria-labelledby="v-pills-notice-tab">
            <div class="contentCard d-flex flex-column h-100">
              <div class="title row w-100 align-self-center mt-1" style="padding:0 15px;height: 50px;">
                <div class="titleL col d-flex align-items-center pl-0"
                     style="border-bottom: rgb(215,215,215) solid 2px;font-family: 'Arial Negreta', 'Arial Normal', 'Arial';font-weight: 700;color: #204BB0;">
                  <span
                          style="bottom: -2px;position: relative;line-height: 46px; border-bottom: #204BB0 solid 2px;height: 100%;">网厂</span>
                </div>
                <div class="titleR col-auto d-flex align-items-center justify-content-center pr-0"
                     style="border-bottom: rgb(215,215,215) solid 2px;">
                  <span class="bread">当前位置：</span>
                  <a href="/" class="bread breadNav">首页</a>
                  <a href="/subordinate" class="bread breadNav">- 下属企业</a>
                  <a href="/subordinate/notice" class="bread breadNav">- 网厂</a>
                </div>
              </div>
              <div class="contentBox" style="flex: 1;padding:16px 15px">

              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="v-pills-three" role="tabpanel" aria-labelledby="v-pills-notice-tab">
            <div class="contentCard d-flex flex-column h-100">
              <div class="title row w-100 align-self-center mt-1" style="padding:0 15px;height: 50px;">
                <div class="titleL col d-flex align-items-center pl-0"
                     style="border-bottom: rgb(215,215,215) solid 2px;font-family: 'Arial Negreta', 'Arial Normal', 'Arial';font-weight: 700;color: #204BB0;">
                  <span
                          style="bottom: -2px;position: relative;line-height: 46px; border-bottom: #204BB0 solid 2px;height: 100%;">珍珠公司</span>
                </div>
                <div class="titleR col-auto d-flex align-items-center justify-content-center pr-0"
                     style="border-bottom: rgb(215,215,215) solid 2px;">
                  <span class="bread">当前位置：</span>
                  <a href="/" class="bread breadNav">首页</a>
                  <a href="/subordinate" class="bread breadNav">- 下属企业</a>
                  <a href="/subordinate/three" class="bread breadNav">- 珍珠公司</a>
                </div>
              </div>
              <div class="contentBox" style="flex: 1;padding:16px 15px">

              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="v-pills-four" role="tabpanel" aria-labelledby="v-pills-notice-tab">
            <div class="contentCard d-flex flex-column h-100">
              <div class="title row w-100 align-self-center mt-1" style="padding:0 15px;height: 50px;">
                <div class="titleL col d-flex align-items-center pl-0"
                     style="border-bottom: rgb(215,215,215) solid 2px;font-family: 'Arial Negreta', 'Arial Normal', 'Arial';font-weight: 700;color: #204BB0;">
                  <span
                          style="bottom: -2px;position: relative;line-height: 46px; border-bottom: #204BB0 solid 2px;height: 100%;">经济开发总公司</span>
                </div>
                <div class="titleR col-auto d-flex align-items-center justify-content-center pr-0"
                     style="border-bottom: rgb(215,215,215) solid 2px;">
                  <span class="bread">当前位置：</span>
                  <a href="/" class="bread breadNav">首页</a>
                  <a href="/subordinate" class="bread breadNav">- 下属企业</a>
                  <a href="/subordinate/four" class="bread breadNav">- 经济开发总公司</a>
                </div>
              </div>
              <div class="contentBox" style="flex: 1;padding:16px 15px">
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容 <br>
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容 <br>
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容 <br>
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容 <br>
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容 <br>
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容 <br>
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容 <br>
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容 <br>
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容 <br>
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容 <br>
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容 <br>
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容 <br>
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容 <br>
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容 <br>
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容 <br>
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容 <br>
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容 <br>
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容 <br>
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容 <br>
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容 <br>
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容 <br>
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容 <br>
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容 <br>
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容 <br>
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容 <br>
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容 <br>
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容 <br>
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容 <br>
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
    subsidiaryFindApi,
    subsidiaryGetApi,
  } from "@/api/allApi";

  export default {
    name: "subordinate",
    data() {
      return {};
    },
    watch: {
      '$route.params.content'(v) {
        if (v) {
          $('#subordinate #v-pills-' + v.replace("#", "") + '-tab').tab('show')
        }
      }
    },
    mounted() {
      console.log(this.$route);
      if (this.$route.params.content) {
        $('#subordinate #v-pills-' + this.$route.params.content.replace("#", "") + '-tab').tab('show')
      }
      if (this.$route.hash) {
        let str = this.$route.hash.replace("#", "");
        str = str.replace("v-pills-", '');
        str = str.replace("-tab", '');
        this.$router.push({path: '/subordinate/' + str});
        //$('#subordinate #v-pills-' + str + '-tab').tab('show')
    }
      this.getsubsidiary()
      this.getNameList()

  },
    methods: {
      //查询子公司
      getsubsidiary() {
        subsidiaryFindApi({'id': this.nameList[0].id}).then(response => {
          this.form4 = response.data.data;
          this.form4.content = this.$refs.Editor.getContent();
          console.log(response.data.data)
        }).catch(error => {
          console.log(error);
        })
      },
      //获取子公司列表
      getNameList() {
        subsidiaryGetApi().then(response => {
          this.nameList = response.data.data;
          // this.$refs.coverUploader.pathString = this.form4.frameworkImg;
          console.log(this.nameList)
        }).catch(error => {
          console.log(error);
        })
      },
    }
  };
</script>

<style lang="scss">

  #subordinate {
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

      .active, .nav-link:hover {
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
