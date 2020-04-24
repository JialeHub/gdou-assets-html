<template>
  <div id="app">
    <vue-head v-if="$route.meta.type!=='error'"/>
    <div class="container-xl main">
      <div class="row">
        <transition name="fade" mode="out-in">
          <router-view v-wechat-title="$route.meta.title" class="router" />
        </transition>
      </div>
    </div>
    <vue-foot v-if="$route.meta.type!=='error'"/>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    VueHead: () => import("./views/layout/head/"),
    VueFoot: () => import("./views/layout/foot/")
  },
  created() {},
  methods: {}
};
</script>

<style lang="scss">
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  .main {
    flex: 1;
    .router{
      width: 100%;
    }
  }
}
</style>
