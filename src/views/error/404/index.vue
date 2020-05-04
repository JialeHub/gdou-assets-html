<template>
  <div id="error404">
    <table width="100%" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td class="prompt">
          <div class="promptOne">系统提示</div>
          <div
            class="promptTwo"
            :style="
              'background:url(' +
                require('@/assets/error/404/promptIcon.png') +
                ') no-repeat left center;'
            "
          >
            抱歉
          </div>
          <div class="promptThere">可能是由下列问题导致的：</div>
          <p
            :style="
              'background:url(' +
                require('@/assets/error/404/promptIconP.png') +
                ') no-repeat left center;'
            "
          >
            您访问的页面未找到， 5秒后自动跳转到首页
          </p>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "error404",
  components: {},
  created() {
    window.setTimeout("window.location.href='/'", 5000);
  }
};
</script>
<style lang="scss">
#error404 {
  .prompt {
    font-family: "微软雅黑";
    padding-top: 20px;
    padding-left: 45px;
    padding-right: 30px;
  }

  .prompt p {
    padding-left: 12px;
    margin: 0px;
    line-height: 22px;
    color: #888;
    font-size: 13px;
  }

  .promptOne {
    width: 80%;
    font-size: 22px;
    font-weight: bold;
    color: #000;
    line-height: 60px;
    border-bottom: 1px solid #b6bcc6;
  }

  .promptTwo {
    padding-left: 50px;
    line-height: 60px;
    font-size: 18px;
    color: #f8930f;
  }

  .promptThere {
    padding-bottom: 5px;
    font-size: 14px;
    color: #000;
  }

  @media only screen and (min-width: 240px) and (max-width: 480px) {
    .prompt {
      font-family: "微软雅黑";
      padding-top: 20px;
      padding-left: 20px;
      padding-right: 20px;
    }
    .prompt p {
      padding: 0px;
      margin: 0px;
      line-height: 24px;
      color: #888;
      font-size: 13px;
      background: no-repeat left center;
    }
    .promptOne {
      display: none;
    }
    .promptTwo {
      padding-left: 50px;
      padding-top: 20px;
      padding-bottom: 20px;
      margin-bottom: 15px;
      line-height: 20px;
      font-size: 18px;
      font-weight: bold;
      color: #f8930f;
      border-bottom: 1px solid #b6bcc6;
    }
    .promptThere {
      padding-bottom: 8px;
      font-size: 14px;
      color: #000;
      font-weight: bold;
    }
  }
}
</style>
