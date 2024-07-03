<template>
  <div class="flex justify-between w-full mt-[21px] mr-[21px]">
    <div class="h-[7vh] flex items-center pl-3 md:pl-11 md:gap-2">
      <div class="text-teal-lite hidden laptop:flex ml-2">
        <img src="../assets/icons/chevron-right.svg" class="colot-teal" />
      </div>
      <span
        class="hidden font-robotoSlab laptop:flex text-5xl font-[700] tracking-wide leading-[39.57px]"
        >{{ $route.name }}</span
      >
      <span class="text-black text-3xl font-[700]  tracking-tight flex md:hidden"
        >Hi, Andrea</span
      >
    </div>
    <div
      class="flex gap-3 h-[47px] pr-3 md:pr-0 tablet:divide-x-2 divide-gray-lite"
    >
      <div class="h-[45px] flex items-center relative">
        <img
          src="../assets/icons/bell-outline.svg"
          class="flex mr-5 h-[24px] static text-gray-dark"
        />
        <div
          v-if="activities > 0"
          class="flex justify-center text-[10px] text-white font-[700] items-center rounded-[19px] w-[28px] h-[18px] absolute top-[9px] left-[9px] bg-red"
        >
          {{ activities }}
        </div>
      </div>
      <div class="flex items-centre pl-2 gap-3">
        <span
          class="text-black mt-1 text-3xl font-[700] tracking-tight md:flex hidden"
          >Hi, Andrea</span
        ><router-link
          :to="{ name: 'MyFarm' }"
          class="flex h-[41px] items-center gap-2 text-teal-lite border-[2px] border-teal-lite rounded-[8px] px-[20px]"
        >
          <img
            src="../assets/icons/account-circle.svg"
            class="h-[24px] w-[24px]"
          /><span class="text-sm font-[700] tracking-tight">FARMER</span>
        </router-link>
      </div>
      <div>
        <router-link
          :to="{ name: 'FindSpecialists' }"
          class="ml-3 text-white bg-teal-lite h-[41px] hidden tablet:flex justify-center gap-3 rounded-[8px] shadow-lg py-[8px] px-[20px]"
        >
          <span class="text-xl font-[700]">Find Specialists</span
          ><img src="../assets/icons/account-search-outline 1.svg" />
        </router-link>
      </div>
    </div>
  </div>
  <div class="laptop:hidden flex h-[7vh] items-center md:pl-11 gap-2">
    <img src="../assets/icons/chevron-right.svg" class="colot-teal" />
    <span class="text-5xl font-[700] tracking-wide leading-[39.57px]">{{
      $route.name
    }}</span>
  </div>
</template>

<script lang="ts" >
import { ref } from "vue";
export default {
  setup() {
    let activities = ref<number>(11).value;
    return { activities };
  },
};
</script>

<style scoped>
.colot-teal {
  filter: brightness(0) saturate(100%) invert(53%) sepia(61%) saturate(412%)
    hue-rotate(123deg) brightness(88%) contrast(92%);
}
</style>