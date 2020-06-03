<template>
  <div id="articleContent">
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
          >{{ pathName3 }}</span
          >
        </div>
        <div
            class="titleR col-auto d-flex align-items-center justify-content-center pr-0"
            style="border-bottom: rgb(215,215,215) solid 2px;"
        >
          <span class="bread">当前位置：</span>
          <a href="/" class="bread breadNav">首页</a>
          <a :href="path1" class="bread breadNav" v-if="pathArr.length > 1"
          >- {{ pathName2 }}</a
          >
          <a :href="path2" class="bread breadNav" v-if="pathArr.length > 2"
          >- {{ pathName3 }}</a
          >
          <a :href="path" class="bread breadNav">- 正文</a>
        </div>
      </div>
      <div class="contentBox" style="flex: 1 1 auto;padding:16px 15px">
        <article>
          <address>
            <div class="header" style="text-align: center">
              <h4 style="text-align: center;margin-top: 36px;">
                {{ msg.title }}
              </h4>
              <h6 style="margin-top: 10px;color: #a1a1a1">
                发布时间：
                <time style="color: #a1a1a1;font-weight: normal">{{
                  msg.createDate | formatDate
                  }}
                </time>
              </h6>
            </div>
          </address>
          <div
              style="margin-top: 50px;"
              class="htmlBox"
              v-html="msg.content"
          ></div>
          <div style="padding-left: 20px;padding-top: 50px;">
            <p
                v-if="msg.phone !== undefined && msg.phone !== ''"
                style="font-size: 16px"
            >
              电话：{{ this.msg.phone }}
            </p>
            <p
                v-if="msg.fax !== undefined && msg.fax !== ''"
                style="font-size: 16px"
            >
              传真：{{ this.msg.fax }}
            </p>
            <p
                v-if="msg.address !== undefined && msg.address !== ''"
                style="font-size: 16px"
            >
              地址：{{ this.msg.address }}
            </p>
            <p
                v-if="msg.website !== undefined && msg.website !== ''"
                style="font-size: 16px"
            >
              网址：<a :href="this.msg.website">{{ this.msg.website }}</a>
            </p>
          </div>

          <div style="padding-left: 20px;padding-top: 50px;">
            <p v-if="msg.next !== null && msg.next !== undefined && msg.next !== ''" style="font-size: 16px">
              <a :href="path2+'/'+msg.next" target="_blank">上一节：{{ this.msg.nextTitle }}</a>
            </p>
            <p v-if="msg.last !== null && msg.last !== undefined && msg.last !== ''" style="font-size: 16px">
              <a :href="path2+'/'+msg.last" target="_blank">下一节：{{ this.msg.lastTitle }}</a>
            </p>
          </div>

        </article>
      </div>
    </div>
  </div>
</template>

<script>
  import {articleFindApi, subsidiaryFindApi} from "@/api/allApi";

  export default {
    name: "articleContent",
    data() {
      return {
        temp: '',
        jumpUrl: '',
        now: "",
        msg: {},
        pathArr: [],
        path: "",
        path1: "",
        path2: "",
        pathName2: this.$route.meta.titlePre,
        pathName3: this.$route.meta.title
      };
    },
    watch: {
      "$route.path"() {
        location.reload();
      },
    },
    mounted() {
      this.path = this.$route.fullPath;
      this.pathArr = this.path.split(/[\/#]/).filter(item => item !== "");
      this.path1 = "/" + this.pathArr[0];
      this.path2 = "/" + this.pathArr[0] + "/" + this.pathArr[1];
      switch (this.path2) {
        case "/dynamic/news":
          this.$route.meta.title = this.pathName3 = "新闻快讯";
          this.articleFind();
          break;
        case "/dynamic/notice":
          this.pathName3 = this.$route.meta.title = "通知公告";
          this.articleFind();
          break;
        case "/party/dynamic":
          this.pathName3 = this.$route.meta.title = "党建动态";
          this.articleFind();
          break;
        case "/party/tradeUnions":
          this.pathName3 = this.$route.meta.title = "公司工会";
          this.articleFind();
          break;
        case "/policy/public":
          this.pathName3 = this.$route.meta.title = "国家政策";
          this.articleFind();
          break;
        case "/policy/school":
          this.pathName3 = this.$route.meta.title = "学校文件";
          this.articleFind();
          break;
        case "/policy/company":
          this.pathName3 = this.$route.meta.title = "公司制度";
          this.articleFind();
          break;
        default:
          switch (this.path1) {
            case "/directory":
              this.pathName3 = this.$route.meta.title = "服务指南";
              this.articleFind();
              break;
            case "/subordinate":
              this.pathName3 = this.$route.meta.title = "下属企业";
              this.getSubsidiary();
              break;
          }
          break;
      }
    },
    methods: {
      getSubsidiary() {
        subsidiaryFindApi({id: this.$route.params.id}).then(response => {
          if (response.data.code === 200) {
            this.msg = response.data.data;
            this.msg.title = this.msg.name;
          } else if (response.data.code === 404) {
            this.$router.push({name: "error404"});
          }
        });
      },
      articleFind() {
        articleFindApi({id: this.$route.params.id}).then(response => {
          if (response.data.code === 200) {
            if (response.data.data.link !== "http://") {
              window.open(response.data.data.link);
              this.$router.go(-1);
            }
            let msgTemp = response.data.data;
            this.$route.meta.title = msgTemp.title;
            document.title = msgTemp.title
            this.articleTitleGet(response.data.data.last).then(lastTitle => {
              msgTemp.lastTitle = lastTitle;
              this.articleTitleGet(response.data.data.next).then(nextTitle => {
                msgTemp.nextTitle = nextTitle;
                this.msg = msgTemp;
              })
            })
          } else if (response.data.code === 404) {
            this.$router.push({name: "error404"});
          }
        });
      },
      articleTitleGet(id) {
        return new Promise((resolve) => {
          if (id !== null && id !== undefined && id !== '') {
            articleFindApi({id}).then(response2 => {
              resolve(response2.data.data.title);
            }).catch(() => {
              resolve("")
            })
          } else {
            resolve("")
          }
        })
      }
    }
  };
</script>

<style lang="scss">
  #articleContent {
    border: 1px solid rgba(215, 215, 215, 1);
    background-color: #fff;
    min-height: 100%;
    max-width: 100%;
    padding: 10px;

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
</style>
