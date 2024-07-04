<template>
  <div
    class="left-0 right-0 bottom-0 fixed h-[66px] grid grid-cols-5 px-[7px] gap-[7px] py-[5px] bg-white shadow-[rgba(0,0,0,0.3)_0px_0px_19px_0]"
  >
    <router-link
      to="./"
      class="nav-link rounded-[15px] flex flex-col items-center justify-between py-[5px]"
    >
      <img
        src="../assets/icons/view-dashboard-outline.svg"
        alt="dashboard"
        class="w-[24px] h-[24px] img-default"
      /><span class="font-[400] text-sm">Dashboard</span></router-link
    >

    <router-link
      :to="{ name: 'MyFarm' }"
      class="nav-link rounded-[15px] flex flex-col items-center justify-between py-[5px]"
      ><img
        src="../assets/icons/home-silo.svg"
        alt="home silo"
        class="w-[24px] h-[24px] img-default"
      /><span class="font-[400] text-sm">My Farm</span></router-link
    >
    <div class="relative">
      <router-link
        :to="{ name: 'FindSpecialists' }"
        class="nav-link-find shadow-[rgba(0,0,0,0.2)_0_4px_10px_4px] top-[-14px] rounded-[15px] min-w-[90px] h-[70px] absolute left-0 right-0 flex flex-col bg-teal-lite items-center justify-center"
        ><div class="flex items-center gap-2">
          <img
          src="../assets/icons/account-search-outline 1.svg" class="w-[24px] h-[24px]" /><span
            class="font-[400] text-sm"
            >Find
          </span>
        </div>
        <span class="font-[400] text-sm"> Spacialists</span></router-link
      >
    </div>

    <router-link
      :to="{ name: 'Offers' }"
      class="nav-link rounded-[15px] flex flex-col items-center justify-between py-[5px]"
      ><img
        src="../assets/icons/arrow-right-bold-circle-outline.svg"
        alt="arrow right"
        class="w-[24px] h-[24px] img-default"
      /><span class="font-[400] text-sm">Offers</span></router-link
    >

    <router-link
      :to="{ name: 'Chat' }"
      class="nav-link rounded-[15px] flex flex-col items-center justify-between py-[5px]"
    >
      <img
        src="../assets/icons/forum-outline.svg"
        alt="forum"
        class="w-[24px] h-[24px] img-default"
      /><span class="font-[400] text-sm">Chat</span></router-link
    >
  </div>
</template>

<script>
export default {};
</script>

<style >
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

.nav-link .img-default {
  filter: brightness(0) saturate(100%) invert(53%) sepia(0%) saturate(31%) hue-rotate(173deg) brightness(90%) contrast(88%);
}

.nav-link.router-link-active .img-default {
  filter: brightness(0) saturate(100%) invert(53%) sepia(61%) saturate(412%) hue-rotate(123deg) brightness(88%) contrast(92%);
}
</style>