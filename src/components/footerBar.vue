


<template>
  <div class="left-0 right-0 bottom-0 fixed h-[66px] grid grid-cols-5 bg-white shadow-[rgba(0,0,0,0.1)_0px_0px_10px_0]">
    <router-link
      to="./"
      class="nav-link rounded-[15px] flex flex-col items-center justify-center gap-3 tracking-tighter"
    >
      <v-icon name="md-dashboard-sharp" class="w-[24px] h-[24px]" /><span
        class="font-[400] text-[12px]"
        >Dashboard</span
      ></router-link
    >

    <router-link
      :to="{ name: 'MyFarm' }"
      class="nav-link rounded-[15px] flex flex-col items-center justify-center gap-3 tracking-tighter"
      ><v-icon name="md-homework-outlined" class="w-[24px] h-[24px]" /><span
        class="font-[400] text-[12px]"
        >My Farm</span
      ></router-link
    >
    <div class="relative ">
      <router-link
        :to="{ name: 'FindSpecialists' }"
        class="nav-link-find shadow-[rgba(0,0,0,0.2)_0_4px_10px_4px] top-[-9px] rounded-[15px] h-[66px] absolute w-[20vw] flex flex-col bg-teal-lite items-center justify-center tracking-tighter"
        ><div class="flex items-center gap-2">
          <v-icon name="ri-user-search-line" class="w-[24px] h-[24px]" /><span
            class="font-[400] text-[12px]"
            >Find
          </span>
        </div>
        <span class="font-[400] text-[12px]"> Spacialists</span></router-link
      >
    </div>

    <router-link
      :to="{ name: 'Offers' }"
      class="nav-link rounded-[15px] flex flex-col items-center justify-center gap-3 tracking-tighter"
      ><v-icon name="bi-arrow-right-circle" class="w-[24px] h-[24px]" /><span
        class="font-[400] text-[12px]"
        >Offers</span
      ></router-link
    >

    <router-link
      :to="{ name: 'Chat' }"
      class="nav-link rounded-[15px] flex flex-col items-center justify-center gap-3 tracking-tighter"
    >
      <v-icon name="hi-solid-chat-alt-2" class="w-[24px] h-[24px]" /><span
        class="font-[400] text-[12px]"
        >Chat</span
      ></router-link
    >
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-link {
  color: rgba(123, 128, 154, 1);
}
.nav-link-find {
  color: rgba(255, 255, 255, 1);
  background-color: rgba(1, 171, 137, 1);
}
.nav-link.router-link-active {
  color: rgba(52, 58, 64, 1);
  background-color: rgba(248, 249, 250, 1);
}
.nav-link-find.router-link-active {
  color: rgba(52, 58, 64, 1);
  background-color: rgba(3, 136, 119, 0.3);
}

.nav-link.router-link-active > *:first-child {
  color: rgba(0, 171, 137, 1);
}
</style>