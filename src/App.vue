<template>
  <div class="flex h-[100vh] w-[100vw] p-[21px]">
    <div class="hidden laptop:flex w-[300px]"><SideBar /></div>
    <div class="flex-grow "><Header /></div>
    <router-view />
  </div>
</template>

<script>
import SideBar from "./components/sideBar.vue";
import Header from "./components/header.vue";
export default {
  components: { SideBar, Header },
};
</script>
<style>
#app {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background: rgba(255, 255, 255, 1);
}
.flex-grow {
  width: calc(100vw - 300px);
}
</style>
