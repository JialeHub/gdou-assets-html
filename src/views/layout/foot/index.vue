<template>
  <div id="Foot">
    <div
      class="container-fluid pt-2 pb-2"
      style="background-color: rgb(0,119,206);border-top: #e2e2e2 solid 1px"
    >
      <div class="row justify-content-center">
        <div class="col">
          <p class="text-center mb-0 text">
            <span class="row text1 d-block" style="text-align: center">
              <span class="col text-nowrap" style="flex: 0 0">
                联系地址：广东省湛江市麻章区海大路1号广东海洋大学</span
              >
              <span class="col text-nowrap" style="flex: 0 0"> 邮编：524088</span>
              <span class="col text-nowrap" style="flex: 0 0">
                电话：0759-2362223</span
              >
              <span class="col text-nowrap" style="flex: 0 0">
                邮箱：zcgs@gdou.edu.cn</span
              >
            </span>

            <span class="row text2 d-block" style="text-align: center">
              <span class="col flex-grow-0" style="flex: 0 0">
                Copyright © 2018 - 2020 WTeam.</span
              >
              <span class="col flex-grow-0" style="flex: 0 0">
                All Rights Reserved.</span
              >
              <span class="col flex-grow-0" style="flex: 0 0">
                (粤)-经营性-2017-2020</span
              >
              <span class="col flex-grow-0" style="flex: 0 0">
                粤公网安备00000000000001号</span
              >
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Foot",
  components: {},
  methods: {},
  created() {}
};
</script>

<style lang="scss">
#Foot {
  margin-top: 20px;

  .text {
    font-size: 14px;
    padding: 6px 6px;

    .text1 {
      color: rgb(228, 228, 228);
    }

    .text2 {
      color: rgb(188, 188, 188);
    }

    .row {
      .col {
        padding: 3px 12px;
      }
    }
  }
}
</style>
