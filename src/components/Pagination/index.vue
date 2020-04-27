<template>
  <div id="pagination">
    <el-pagination
        :current-page.sync="current"
        :hide-on-single-page="total<=size"
        :page-sizes="page_sizes"
        :page-size="size"
        :layout="layout"
        :total="total"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    name: "pagination",
    data() {
      return {
        total: 1210,
        current: 1,
        size: 20,
        page_sizes: [10, 20, 50, 100, 200],
        layout: "total, prev, pager, next"
      };
    },
    watch: {
      /*删除时监听总数变化*/
      total(newValue, oldValue) {
        let size = this.size;
        if (
          newValue % size === 0
          && newValue === oldValue - 1
          && oldValue !== 1
        ) {
          setTimeout(() => {
            this.$emit("getNewData");
          }, 500);
        }
      }
    },
    methods: {
      handleCurrentChange(current) {
        this.current = current;
        this.$emit("getNewData");
      },
      handleSizeChange(size) {
        this.size = size;
        this.$emit("getNewData");
      }
    },
  };
</script>

<style lang="scss">
  #pagination {
    .el-pagination{
      display: flex;
      justify-content: center;
      .btn-next,.btn-prev{
        background-color: rgba(255,255,255,0);
        border: 1px solid rgb(220,220,220);
        padding: 0 6px;
        i{
          color: #204BB0;
          font-size: 14px;
        }
      }
      .btn-next:hover,.btn-prev:hover{
        i{
          color: #409EFF;
        }
      }
      .btn-prev{
        margin-right: 6px;
      }
      .btn-next{
        margin-left: 6px;
      }
      .el-pager{
        li{
          background-color: rgba(255,255,255,0);
        }
      }
    }
  }
</style>
