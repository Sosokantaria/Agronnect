<template>
  <div class="flex justify-between h-[42px] mx-3 md:mx-0 mt-2 md:mt-5">
    <div class="flex items-center md:mt-5">
      <div class="text-teal-lite hidden laptop:flex">
        <img src="../assets/icons/chevron-right.svg" class="colot-teal" />
      </div>
      <span
        v-if="$route.name !== 'Offers'"
        class="hidden font-robotoSlab text-black laptop:flex text-5xl font-[700] leading-[39.57px]"
        >{{ $route.name }}</span
      ><span
        v-else-if="$route.name === 'Offers'"
        class="hidden font-robotoSlab text-black laptop:flex text-5xl font-[700] leading-[39.57px]"
        >Offers from Specialists</span
      >
      <span class="text-black text-3xl font-[700] flex md:hidden"
        >Hi, Andrea</span
      >
    </div>
    <div class="flex justify-end items-center h-[42px]">
      <div class="flex items-center mt-1.5 mr-7 md:mr-4 relative">
        <img src="../assets/icons/bell-outline.svg" class="h-[19px] w-[19px]" />
        <div
          v-if="activities > 0"
          class="flex justify-center text-[10px] text-white font-[700] items-center rounded-[19px] w-[28px] h-[18px] absolute top-[-5px] left-[9px] bg-red"
        >
          <span class="font-[700] text-sm1 text-white leading-[14px]">{{
            activities
          }}</span>
        </div>
      </div>
      <hr class="hidden md:flex w-[2px] h-[28px] mx-3 bg-gray-lite" />
      <div class="flex items-centre gap-3">
        <span
          class="text-black text-3xl font-[700] leading-[23.44px] md:flex items-center hidden"
          >Hi, Andrea</span
        ><router-link
          :to="{ name: 'MyFarm' }"
          class="flex items-center gap-2.5 border-[1px] border-teal-lite h-[40px] md:h-[42px] w-[101px] md:w-[120px] rounded-[8px] justify-center"
        >
          <img
            src="../assets/icons/account-circle.svg"
            class="h-[24px] w-[24px]"
          /><span class="text-sm font-[700] leading-[14.06px] text-teal-lite"
            >FARMER</span
          >
        </router-link>
      </div>
      <hr class="hidden md:flex w-[2px] h-[28px] mx-3 bg-gray-lite" />
      <div>
        <router-link
          :to="{ name: 'FindSpecialists' }"
          class="bg-teal-lite hidden tablet:flex justify-center gap-3 items-center rounded-[8px] shadow-lg h-[42px] w-[191px]"
        >
          <span class="text-xl font-[700] text-white">Find Specialists</span
          ><img
            src="../assets/icons/account-search-outline 1.svg"
            class="h-[24px] w-[24px]"
          />
        </router-link>
      </div>
    </div>
  </div>
  <div class="laptop:hidden text-black mt-5 flex h-[40px] items-center">
    <img src="../assets/icons/chevron-right.svg" />
    <span
      v-if="$route.name !== 'Offers'"
      class="hidden font-robotoSlab text-black laptop:flex text-5xl font-[700] leading-[39.57px]"
      >{{ $route.name }}</span
    ><span
      v-else-if="$route.name === 'Offers'"
      class="hidden font-robotoSlab text-black laptop:flex text-5xl font-[700] leading-[39.57px]"
      >Offers from Specialists</span
    >
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