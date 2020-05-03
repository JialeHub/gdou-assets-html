<template>
  <div id="profile">
    <div class="container-fluid h-100">
      <div class="row h-100">
        <div class="col nav flex-column nav-pills" style="max-width:200px" id="v-pills-tab" role="tablist"
             aria-orientation="vertical">
          <div
              style="padding: 0 16px;font-size: 18px;color: #fff; line-height: 60px; height: 60px;background: rgb(32,75,176);">
            公司概况
          </div>
          <a class="nav-link active" id="v-pills-intro-tab" data-toggle="pill" href="#v-pills-intro" role="tab"
             @click="$router.push({path:'#intro'})"
             aria-controls="v-pills-intro" aria-selected="true">公司简介</a>
          <a class="nav-link" id="v-pills-team-tab" data-toggle="pill" href="#v-pills-team" role="tab"
             @click="$router.push({path:'#team'})"
             aria-controls="v-pills-team" aria-selected="false">公司团队</a>
          <a class="nav-link" id="v-pills-framework-tab" data-toggle="pill" href="#v-pills-framework" role="tab"
             @click="$router.push({path:'#framework'})"
             aria-controls="v-pills-pills" aria-selected="false">组织架构</a>
          <a class="nav-link" id="v-pills-contact-tab" data-toggle="pill" href="#v-pills-contact" role="tab"
             @click="$router.push({path:'#contact'})"
             aria-controls="v-pills-contact" aria-selected="false">联系我们</a>
        </div>
        <div class="col tab-content" id="v-pills-tabContent">
          <div class="tab-pane fade h-100 show active h-100" id="v-pills-intro" role="tabpanel"
               aria-labelledby="v-pills-intro-tab">
            <div class="contentCard d-flex flex-column h-100">
              <div class="title row w-100 align-self-center mt-1" style="padding:0 15px;height: 50px;">
                <div class="titleL col d-flex align-items-center pl-0"
                     style="border-bottom: rgb(215,215,215) solid 2px;font-family: 'Arial Negreta', 'Arial Normal', 'Arial';font-weight: 700;color: #204BB0;">
                  <span
                      style="bottom: -2px;position: relative;line-height: 46px; border-bottom: #204BB0 solid 2px;height: 100%;">公司简介</span>
                </div>
                <div class="titleR col-auto d-flex align-items-center justify-content-center pr-0"
                     style="border-bottom: rgb(215,215,215) solid 2px;">
                  <span class="bread">当前位置：</span>
                  <a href="/" class="bread breadNav">首页</a>
                  <a href="/profile" class="bread breadNav">- 公司概况</a>
                  <a href="/profile#intro" class="bread breadNav">- 公司简介</a>
                </div>
              </div>
              <div class="contentBox" style="flex: 1;padding:16px 15px">
                <div class="htmlBox" v-html="introduce"></div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade h-100" id="v-pills-team" role="tabpanel" aria-labelledby="v-pills-team-tab" style="background-color: rgb(245,245,245)">
            <div class="contentCard d-flex flex-column h-100">
              <div class="title row w-100 align-self-center mt-1" style="padding:0 15px;height: 50px;">
                <div class="titleL col d-flex align-items-center pl-0"
                     style="border-bottom: rgb(215,215,215) solid 2px;font-family: 'Arial Negreta', 'Arial Normal', 'Arial';font-weight: 700;color: #204BB0;">
                  <span
                      style="bottom: -2px;position: relative;line-height: 46px; border-bottom: #204BB0 solid 2px;height: 100%;">公司团队</span>
                </div>
                <div class="titleR col-auto d-flex align-items-center justify-content-center pr-0"
                     style="border-bottom: rgb(215,215,215) solid 2px;">
                  <span class="bread">当前位置：</span>
                  <a href="/" class="bread breadNav">首页</a>
                  <a href="/profile" class="bread breadNav">- 公司概况</a>
                  <a href="/profile#team" class="bread breadNav">- 公司团队</a>
                </div>
              </div>
              <div class="contentBox" style="flex: 1;padding:16px 15px">
                <ul class="row">
                  <li class="col-12" v-for="item in teamMember" v-if="item.sequence>=100" :key="item.id" style="max-width:93%;margin-left: 3%;padding: 20px 20px;background-color: rgb(255,255,255);border-radius: 10px;margin-top: 10px;margin-bottom: 30px;">
                    <h3 class="name" style="color: #204BB0;font-weight: bold;font-size: 24px;letter-spacing:2px;">{{item.name}}</h3>
                    <p style="color: #333333;margin-bottom: 2px;font-size: 15px;">{{item.content}}</p>
                    <p style="color: #204BB0;margin-bottom: 2px;font-size: 14px;">联系电话：{{item.phone}}</p>
                  </li>
                  <li class="col-6" v-for="item2 in teamMember" v-if="item2.sequence<100" :key="item2.id" style="max-width:45%;margin-left: 3%;padding: 20px 20px;background-color: rgb(255,255,255);border-radius: 10px;margin-top: 10px;margin-bottom: 30px;">
                    <h3 class="name" style="color: #204BB0;font-weight: bold;font-size: 24px;letter-spacing:1px;">{{item2.name}}</h3>
                    <p style="color: #333333;margin-bottom: 5px;font-size: 15px;">{{item2.content}}</p>
                    <p style="color: #204BB0;margin-bottom: 2px;font-size: 14px;">联系电话：{{item2.phone}}</p>
                  </li>
                </ul>

              </div>
            </div>
          </div>
          <div class="tab-pane fade h-100" id="v-pills-framework" role="tabpanel"
               aria-labelledby="v-pills-framework-tab">
            <div class="contentCard d-flex flex-column h-100">
              <div class="title row w-100 align-self-center mt-1" style="padding:0 15px;height: 50px;">
                <div class="titleL col d-flex align-items-center pl-0"
                     style="border-bottom: rgb(215,215,215) solid 2px;font-family: 'Arial Negreta', 'Arial Normal', 'Arial';font-weight: 700;color: #204BB0;">
                  <span
                      style="bottom: -2px;position: relative;line-height: 46px; border-bottom: #204BB0 solid 2px;height: 100%;">组织架构</span>
                </div>
                <div class="titleR col-auto d-flex align-items-center justify-content-center pr-0"
                     style="border-bottom: rgb(215,215,215) solid 2px;">
                  <span class="bread">当前位置：</span>
                  <a href="/" class="bread breadNav" @click="$router.push({path:'/home'})">首页</a>
                  <a href="/profile" class="bread breadNav" @click="$router.push({path:'/profile'})">- 公司概况</a>
                  <a href="/profile#framework" class="bread breadNav">- 组织架构</a>
                </div>
              </div>
              <div class="contentBox" style="flex: 1;padding:16px 15px;max-width: 100%;margin-top: 10px;">
                <img :src="frameworkImg" alt="" style="max-width: 100%">
              </div>
            </div>
          </div>
          <div class="tab-pane fade h-100" id="v-pills-contact" role="tabpanel" aria-labelledby="v-pills-contact-tab">
            <div class="contentCard d-flex flex-column h-100">
              <div class="title row w-100 align-self-center mt-1" style="padding:0 15px;height: 50px;">
                <div class="titleL col d-flex align-items-center pl-0"
                     style="border-bottom: rgb(215,215,215) solid 2px;font-family: 'Arial Negreta', 'Arial Normal', 'Arial';font-weight: 700;color: #204BB0;">
                  <span
                      style="bottom: -2px;position: relative;line-height: 46px; border-bottom: #204BB0 solid 2px;height: 100%;">联系我们</span>
                </div>
                <div class="titleR col-auto d-flex align-items-center justify-content-center pr-0"
                     style="border-bottom: rgb(215,215,215) solid 2px;">
                  <span class="bread">当前位置：</span>
                  <a href="/" class="bread breadNav">首页</a>
                  <a href="/profile" class="bread breadNav">- 公司概况</a>
                  <a href="/profile#contact" class="bread breadNav">- 联系我们</a>
                </div>
              </div>
              <div class="contentBox" style="flex: 1;padding:16px 15px">
                <h3 style="text-align: center;font-weight: bold;color: #333333;margin-top: 30px;">
                  广东海洋大学湛江资产经营有限公司联系方式</h3>
                <div style="padding-left: 20px;padding-top: 50px;">
                  <p style="font-size: 16px">电话：{{this.contact.phone}}</p>
                  <p style="font-size: 16px">邮箱：{{this.contact.postbox}}</p>
                  <p style="font-size: 16px">地址：{{this.contact.address}}</p>
                  <p style="font-size: 16px">邮编：{{this.contact.postcode}}</p>
                  <p style="font-size: 16px">公众微信号：{{this.contact.publicAccounts}}</p>
                  <p style="font-size: 16px">微信号：{{this.contact.weChat}}</p>
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
  import {
    companyContactGetApi,
    companyFrameworkImgGetApi,
    companyIntroduceGetApi,
    teamMemberGetApi
  } from "@/api/allApi";

  export default {
    name: "profile",
    data() {
      return {
        introduce: "",
        contact: {},
        frameworkImg: "",
        teamMember: []
      };
    },
    watch: {
      '$route.hash'(v) {
        if (v) {
          $('#profile #v-pills-' + v.replace("#", "") + '-tab').tab('show')
        }
      }
    },
    mounted() {
      if (this.$route.hash) {
        let str = this.$route.hash.replace("#", "");
        str = str.replace("v-pills-", '');
        str = str.replace("-tab", '');
        $('#profile #v-pills-' + str + '-tab').tab('show')
      }
      this.getCompanyContact();
      this.getCompanyFrameworkImg();
      this.getCompanyIntroduce();
      this.getTeamMember();
    },
    methods: {
      getCompanyContact() {
        companyContactGetApi().then(response => {
          if (response.data.code === 200) {
            this.contact = response.data.data
          }
        }).catch(error => {
          console.log(error);
        })
      },
      getCompanyFrameworkImg() {
        companyFrameworkImgGetApi().then(response => {
          if (response.data.code === 200) {
            this.frameworkImg = response.data.data.frameworkImg
          }
        }).catch(error => {
          console.log(error);
        })
      },
      getCompanyIntroduce() {
        companyIntroduceGetApi().then(response => {
          if (response.data.code === 200) {
            this.introduce = response.data.data.content
          }
        }).catch(error => {
          console.log(error);
        })
      },
      getTeamMember() {
        teamMemberGetApi().then(response => {
          if (response.data.code === 200) {
            this.teamMember = response.data.data
          }
        }).catch(error => {
          console.log(error);
        })
      }
    },
  };
</script>

<style lang="scss">
  #profile {
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
