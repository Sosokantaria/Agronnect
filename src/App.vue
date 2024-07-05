<template>
  <div>
    <div class="flex">
      <div class="hidden md:flex w-[331px] min-h-screen pb-10"><SideBar /></div>
      <div class="w-full  md:ml-12 mx-4 md:mx-0 md:mr-4 mb-[66px] md:mb-0">
        <Header />
        <div class="pb-5">
          <router-view />
        </div>
      </div>
    </div>
    <div class="md:hidden">
      <FooterBar />
    </div>
  </div>
</template>

<script>
import SideBar from "./components/sideBar.vue";
import Header from "./components/header.vue";
import FooterBar from "./components/footerBar.vue";
import { defineComponent, ref, onMounted, onUnmounted } from "vue";
export default defineComponent({
  components: { SideBar, Header, FooterBar },
});
</script>
<style>
#app {
  background: rgba(255, 255, 255, 1);
}
</style>
