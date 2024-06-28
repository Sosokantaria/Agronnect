<template>
  <div
    class="flex justify-between fixed laptop:static md:w-[100%] left-0 right-0 top-3"
  >
    <div class="h-[7vh] flex items-center pl-3  md:pl-11 md:gap-2">
      <div class="text-teal-lite hidden laptop:flex ml-2">
        <v-icon name="md-chevronright-sharp" />
      </div>
      <span
        class="hidden laptop:flex text-3xl font-[700] tracking-wide leading-[39.57px]"
        >{{ $route.name }}</span
      >
      <span class="text-black text-xl font-[700] tracking-tight flex md:hidden"
        >Hi, Andrea</span
      >
    </div>
    <div class="flex gap-3 h-[47px] pr-3 md:pr-0 tablet:divide-x-2 divide-gray-lite">
      <div class="h-[45px] flex items-center relative">
        <v-icon
          name="fa-regular-bell"
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
          class="text-black mt-1 text-xl font-[700] tracking-tight md:flex hidden"
          >Hi, Andrea</span
        ><router-link
          :to="{ name: 'MyFarm' }"
          class="flex h-[41px] items-center gap-2 text-teal-lite border-[2px] border-teal-lite rounded-[8px] px-[20px]"
        >
          <v-icon
            class="h-[24px] w-[24px]"
            name="io-person-circle-sharp"
          /><span class="text-[12px] font-[700] tracking-tight">FARMER</span>
        </router-link>
      </div>
      <div>
        <router-link
          :to="{ name: 'FindSpecialists' }"
          class="ml-3 text-white bg-teal-lite h-[41px] hidden tablet:flex justify-center gap-3 rounded-[8px] shadow-lg py-[8px] px-[20px]"
        >
          <span class="text-[16px] font-[700]">Find Specialists</span
          ><v-icon name="ri-user-search-line" />
        </router-link>
      </div>
    </div>
  </div>
  <div class="laptop:hidden flex h-[7vh] items-center mt-[7vh] md:pl-11 gap-2">
    <v-icon name="md-chevronright-sharp" class="text-teal-lite" />
    <span class="text-3xl font-[700] tracking-wide leading-[39.57px]">{{
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

<style>
</style>