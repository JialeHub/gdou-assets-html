<template>
  <div id="subordinate">
    下属企业
    <pagination ref="pagination" @getNewData=""/>
  </div>
</template>

<script>
  export default {
    name: "subordinate",
    data() {
      return {

      };
    },
    mounted() {
      console.log(this.$route);
    },
    methods: {},
  };
</script>

<style lang="scss">
  #subordinate {
  }
</style>
