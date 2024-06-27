<template>
  <div class="w-[300px] rounded-[12px] h-[95.5vh] ml-[10px] bg-teal-dark">
    <div
      class="flex w-[100%] justify-center items-center gap-3 text-white h-[68px]"
    >
      <img
        src="../assets/logo/telagriLogo.png"
        alt="telagri logo"
        class="h-[28.94px] w-[28.94px]"
      />
      <h1 class="font-[400] text-2xl tracking-wide">TELAGRI</h1>
    </div>
    <hr class="text-white w-[87%] mx-auto" />
    <div class="w-[87%] mx-auto mt-[29px] flex flex-col justify-center gap-3">
      <router-link
        to="./"
        class="h-[47px] nav-link rounded-[4px] flex items-center pl-4 gap-4"
      >
        <v-icon
          name="md-dashboard-sharp"
          class="text-white w-[24px] h-[24px]"
        /><span class="font-[400] text-lg text-white"
          >Dashboard</span
        ></router-link
      >
      <router-link
        :to="{ name: 'MyFarm' }"
        class="h-[47px] nav-link rounded-[4px] flex items-center pl-4 gap-4"
        ><v-icon
          name="md-homework-outlined"
          class="text-white w-[24px] h-[24px]"
        /><span class="font-[400] text-lg text-white"
          >My Farm</span
        ></router-link
      >
      <router-link
        :to="{ name: 'FindSpecialists' }"
        class="h-[47px] nav-link rounded-[4px] flex items-center pl-4 gap-4"
        ><v-icon
          name="ri-finder-line"
          class="text-white w-[24px] h-[24px]"
        /><span class="font-[400] text-lg text-white"
          >Find Spacialists</span
        ></router-link
      >
      <router-link
        :to="{ name: 'Offers' }"
        class="h-[47px] nav-link rounded-[4px] flex items-center pl-4 gap-4"
        ><v-icon
          name="bi-arrow-right-circle"
          class="text-white w-[24px] h-[24px]"
        /><span class="font-[400] text-lg text-white">Offers</span></router-link
      >
      <router-link
        :to="{ name: 'Chat' }"
        class="nav-link h-[47px] rounded-[4px] flex items-center pl-4 gap-4"
      >
        <v-icon
          name="hi-solid-chat-alt-2"
          class="text-white w-[24px] h-[24px]"
        /><span class="font-[400] text-lg text-white">Chat</span></router-link
      >
    </div>
  </div>
</template>

<style scoped >
.nav-link.router-link-active {
  background-color: rgba(0, 171, 137, 1);
}
</style>