<template>
  <div class="flex h-[100vh] w-[100vw] p-[21px]">
    <SideBar />
    <router-view />
  </div>
</template>

<script>
import SideBar from "./components/sideBar.vue";
export default {
  components: { SideBar },
};
</script>
<style>
#app {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background: rgba(255, 255, 255, 1);
}
</style>
