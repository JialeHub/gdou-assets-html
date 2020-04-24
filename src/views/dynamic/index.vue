<template>
  <div id="dynamic">
    动态
  </div>
</template>

<script>
export default {
  name: "dynamic",
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
#dynamic {
}
</style>
