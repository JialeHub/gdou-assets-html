<template>
  <div id="party">
    <div class="container-fluid">
      <div class="row">
        <div class="col nav flex-column nav-pills" style="max-width:200px" id="v-pills-tab" role="tablist"
             aria-orientation="vertical">
          <div
              style="padding: 0 16px;font-size: 18px;color: #fff; line-height: 60px; height: 60px;background: rgb(32,75,176);">
            党群之窗
          </div>
          <a class="nav-link active" id="v-pills-dynamic-tab" data-toggle="pill" href="#v-pills-dynamic" role="tab"
             @click="$router.push({path:'/party/dynamic'})"
             aria-controls="v-pills-dynamic" aria-selected="true">党建动态</a>
          <a class="nav-link" id="v-pills-tradeUnions-tab" data-toggle="pill" href="#v-pills-tradeUnions" role="tab"
             @click="$router.push({path:'/party/tradeUnions'})"
             aria-controls="v-pills-tradeUnions" aria-selected="false">公司工会</a>
        </div>
        <div class="col tab-content" id="v-pills-tabContent">
          <div class="tab-pane fade show active" style="" id="v-pills-dynamic" role="tabpanel"
               aria-labelledby="v-pills-dynamic-tab">
            <div class="contentCard d-flex flex-column h-100">
              <div class="title row w-100 align-self-center mt-1" style="padding:0 15px;height: 50px;">
                <div class="titleL col d-flex align-items-center pl-0"
                     style="border-bottom: rgb(215,215,215) solid 2px;font-family: 'Arial Negreta', 'Arial Normal', 'Arial';font-weight: 700;color: #204BB0;">
                  <span
                      style="bottom: -2px;position: relative;line-height: 46px; border-bottom: #204BB0 solid 2px;height: 100%;">党建动态</span>
                </div>
                <div class="titleR col-auto d-flex align-items-center justify-content-center pr-0"
                     style="border-bottom: rgb(215,215,215) solid 2px;">
                  <span class="bread">当前位置：</span>
                  <a href="/" class="bread breadNav">首页</a>
                  <a href="/party" class="bread breadNav">- 党群之窗</a>
                  <a href="/party/dynamic" class="bread breadNav">- 党建动态</a>
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
          <div class="tab-pane fade" id="v-pills-tradeUnions" role="tabpanel" aria-labelledby="v-pills-tradeUnions-tab">
            <div class="contentCard d-flex flex-column h-100">
              <div class="title row w-100 align-self-center mt-1" style="padding:0 15px;height: 50px;">
                <div class="titleL col d-flex align-items-center pl-0"
                     style="border-bottom: rgb(215,215,215) solid 2px;font-family: 'Arial Negreta', 'Arial Normal', 'Arial';font-weight: 700;color: #204BB0;">
                  <span
                      style="bottom: -2px;position: relative;line-height: 46px; border-bottom: #204BB0 solid 2px;height: 100%;">公司工会</span>
                </div>
                <div class="titleR col-auto d-flex align-items-center justify-content-center pr-0"
                     style="border-bottom: rgb(215,215,215) solid 2px;">
                  <span class="bread">当前位置：</span>
                  <a href="/" class="bread breadNav">首页</a>
                  <a href="/party" class="bread breadNav">- 党群之窗</a>
                  <a href="/party/tradeUnions" class="bread breadNav">- 公司工会</a>
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
