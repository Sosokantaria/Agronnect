<template>
  <div :class="`min-h-[${height}px]`">
    <div class="flex">
      <div class="hidden md:flex w-[331px]"><SideBar /></div>
      <div class="w-full md:ml-12 md:mr-4 mb-[66px] md:mb-0">
        <Header />
        <router-view />
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
  setup() {
    const height = ref(window.innerHeight);

    const updateHeight = () => {
      height.value = window.innerHeight;
    };

    onMounted(() => {
      window.addEventListener("resize", updateHeight);
    });

    onUnmounted(() => {
      window.removeEventListener("resize", updateHeight);
    });

    return { height };
  },
});
</script>
<style>
#app {
  background: rgba(255, 255, 255, 1);
}
</style>
