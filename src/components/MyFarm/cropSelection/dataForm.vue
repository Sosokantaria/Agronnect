<template>
  <div
    class="max-w-[350px] md:max-w-[470px]   min-h-[218px] px-[20px] md:px-0 mx-auto  tablet:px-0 text-center pt-[60px]  md:pt-[265px]  flex flex-col justify-center items-center gap-[20px]"
  >
    <h2 class="font-[700] max-w-[235px] tablet:max-w-[447px] text-3xl leading-[28px]">
      Let's select the crop you cultivate on your farm
    </h2>
    <div
      class="grid grid-cols-4 tablet:grid-cols-4 grid-rows-4 tablet:grid-rows-3 gap-[20px]"
    >
      <div class="col-span-4 tablet:col-span-2 relative">
        <select
          v-model="crop"
          ref="cropInput"
          class="w-full border-gray-dark rounded-[8px] bg-white h-[42px] border-[1px] text-gray-dark px-4"
        >
          <option v-for="option in cropOptions" :key="option">
            {{ option }}
          </option>
        </select>
        <span
         @click="focusInput('cropInput')"
          :class="{ filled: crop }"
          class="absolute left-[20px] top-[21%] px-2 bg-white text-gray-dark text-xl font-[400] leading-[18.75px]"
          >Crop</span
        >
      </div>
      <div class="col-span-2 tablet:col-span-1 relative">
        <input
          v-model="area"
            ref="areaInput"
          class="border-gray-dark rounded-[8px] bg-white h-[42px] border-[1px] text-gray-dark w-full px-4"
        />
        <span
         @click="focusInput('areaInput')"
          :class="{ filled: area }"
          class="absolute left-[20px] px-2 top-[21%] bg-white text-gray-dark text-xl font-[400] leading-[18.75px]"
          >Area</span
        >
      </div>
      <div class="col-span-2 tablet:col-span-1 relative">
        <select
          v-model="unit"
           ref="unitInput"
          class="w-full border-gray-dark rounded-[8px] bg-white h-[42px] border-[1px] text-gray-dark px-4"
        >
          <option v-for="option in unitOptions" :key="option">
            {{ option }}
          </option>
        </select>
        <span
          @click="focusInput('unitInput')"
          :class="{ filled: unit }"
          class="absolute left-[20px] top-[-10px] px-2 bg-white text-gray-dark text-sm font-[400] leading-[18.75px]"
          >unit</span
        >
      </div>
      <div class="col-span-4 relative">
        <input
          v-model="variety"
          ref="varietyInput"
          class="border-gray-dark rounded-[8px] bg-white h-[42px] border-[1px] text-gray-dark w-full px-4"
        />
        <span
          @click="focusInput('varietyInput')"
          :class="{ filled: variety }"
          class="absolute left-[20px] px-2 top-[21%] bg-white text-gray-dark text-xl font-[400] leading-[18.75px]"
          >Variety (optional)</span
        >
      </div>
      <button
        class="flex items-center justify-center gap-1 col-span-2 tablete:col-span-1 tablet:mr-[30%] col-start-3 tablet:col-start-1 rounded-[8px] pr-[10px] md:px-[20px] py-[10px] bg-white shadow-[rgba(0,0,0,0.1)_0_1px_5px_1px]"
      >
        <img
          src="../../../assets/icons/plus.svg"
          alt="plusIcon"
          class="h-[24px] w-[24px] text-gray-dark"
        /><span class="text-base font-[700] leading-[19.6px]"
          >ADD VARIETY</span
        >
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, } from 'vue';

const cropOptions = [
  "",
  "option_1",
  "option_2",
  "option_3",
  "option_4",
  "option_5",
  "option_6",
  "option_7",
];
const unitOptions = ["HA", "m2", "Acres"];
const crop = ref("");
const area = ref("");
const unit = ref("");
const variety = ref("");



const cropInput = ref(null);
const areaInput = ref(null);
const unitInput = ref(null);
const varietyInput = ref(null);

const focusInput = (inputRef) => {
  if (inputRef === 'cropInput') {
    cropInput.value.focus();
  } else if (inputRef === 'areaInput') {
    areaInput.value.focus();
  } else if (inputRef === 'unitInput') {
    unitInput.value.focus();
  } else if (inputRef === 'varietyInput') {
    varietyInput.value.focus();
  }
};
</script>


<style>
input:focus + span,
select:focus + span,
.filled {
  top: -10px;
  font-size: 12px;
  transition: all 0.3s ease;
}
</style>