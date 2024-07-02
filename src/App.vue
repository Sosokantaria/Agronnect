<template>
  <div class="flex flex-col h-full w-full justify-between">
    <div class="flex m-[21px]">
      <div class="hidden md:flex w-[300px]"><SideBar /></div>
      <div class="flex-grow">
        <Header />
        <router-view />
      </div>
    </div>
    <div class="md:hidden w-full">
      <FooterBar />
    </div>
  </div>
</template>

<script>
import SideBar from "./components/sideBar.vue";
import Header from "./components/header.vue";
import FooterBar from "./components/footerBar.vue";
export default {
  components: { SideBar, Header, FooterBar },
};
</script>
<style>
#app {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background: rgba(255, 255, 255, 1);
}
.flex-grow {
  width: calc(100vw - 300px);
}
</style>
