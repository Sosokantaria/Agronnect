<template>
  <div
    class="w-[300px] h-full  laptop:min-w-[300px] ml-[31px] mt-[21px] rounded-[12px] bg-teal-dark"
  >
    <div
      class="flex w-[133px] mx-auto justify-center items-center gap-2.5 mt-[20px] h-[28.99px] cursor-default"
    >
      <img
        src="../assets/icons/logo/telagriLogo.png"
        alt="telagri logo"
        class="h-[28.94px] w-[28.94px]"
      />
      <h1 class="font-[400] text-4xl text-white leading-[2px]">TELAGRI</h1>
    </div>
    <hr class="text-white w-[87%] mx-auto mt-[20px]" />
    <div class="w-[260px] h-[280px] mx-auto mt-[29px] flex flex-col justify-center gap-3">
      <router-link
        to="./"
        class="h-[47px] nav-link rounded-[4px] flex items-center pl-4 gap-5 "
      >
        <img
          src="../assets/icons/view-dashboard-outline.svg"
          alt="dashboard"
          class="text-white w-[24px] h-[24px]"
        /><span class="font-[400] text-xl text-white leading-[22.4px] "
          >Dashboard</span
        ></router-link
      >
      <router-link
        :to="{ name: 'MyFarm' }"
        class="h-[47px] nav-link rounded-[4px] flex items-center pl-4 gap-5 "
        ><img
          src="../assets/icons/home-silo.svg"
          alt="home silo"
          class="text-white w-[24px] h-[24px]"
        /><span class="font-[400] text-xl text-white leading-[22.4px]"
          >My Farm</span
        ></router-link
      >
      <router-link
        :to="{ name: 'FindSpecialists' }"
        class="h-[47px] nav-link rounded-[4px] flex items-center pl-4 gap-5 "
        ><img
          src="../assets/icons/account-search-outline 1.svg"
          class="text-white w-[24px] h-[24px]"
        /><span class="font-[400] text-xl text-white leading-[22.4px]"
          >Find Spacialists</span
        ></router-link
      >
      <router-link
        :to="{ name: 'Offers' }"
        class="h-[47px] nav-link rounded-[4px] flex items-center pl-4 gap-5 "
        ><img
          src="../assets/icons/arrow-right-bold-circle-outline.svg"
          alt="arrow right"
          class="text-white w-[24px] h-[24px]"
        /><span class="font-[400] text-xl text-white leading-[22.4px]">Offers</span></router-link
      >
      <router-link
        :to="{ name: 'Chat' }"
        class="nav-link h-[47px] rounded-[4px] flex items-center pl-4 gap-5 "
      >
        <img
          src="../assets/icons/forum-outline.svg"
          alt="forum"
          class="text-white w-[24px] h-[24px]"
        /><span class="font-[400] text-xl text-white leading-[22.4px]">Chat</span></router-link
      >
    </div>
  </div>
</template>



<style scoped>
.nav-link.router-link-active {
  background-color: rgba(0, 171, 137, 1);
}
.height{
  min-height: calc(100vh-41px);
}
</style>