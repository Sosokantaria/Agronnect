<template>
  <div
    class="max-w-[470px] mobile:mx-auto mobile:px-[10px] tablet:px-0 text-center h-full mt-[40px] flex flex-col justify-center items-center gap-6"
  >
    <h2 class="font-[700] text-3xl leading-[28px]">
      Let's select the crop you cultivate on your farm
    </h2>
    <div
      class="grid grid-cols-4 tablet:grid-cols-4 grid-rows-4 tablet:grid-rows-3 gap-2"
    >
      <div class="col-span-4 tablet:col-span-2 relative">
        <select
          v-model="crop"
          class="w-full border-gray-dark rounded-[8px] bg-white h-[42px] border-[1px] text-gray-dark px-4"
        >
          <option v-for="option in cropOptions" :key="option">
            {{ option }}
          </option>
        </select>
        <span
          :class="{ filled: crop }"
          class="absolute left-[20px] top-[21%] px-2 bg-white text-gray-dark text-xl font-[400] leading-[18.75px]"
          >Crop</span
        >
      </div>
      <div class="col-span-2 tablet:col-span-1 relative">
        <input
          v-model="area"
          class="border-gray-dark rounded-[8px] bg-white h-[42px] border-[1px] text-gray-dark w-full px-4"
        />
        <span
          :class="{ filled: area }"
          class="absolute left-[20px] px-2 top-[21%] bg-white text-gray-dark text-xl font-[400] leading-[18.75px]"
          >Area</span
        >
      </div>
      <div class="col-span-2 tablet:col-span-1 relative">
        <select
          v-model="unit"
          class="w-full border-gray-dark rounded-[8px] bg-white h-[42px] border-[1px] text-gray-dark px-4"
        >
          <option v-for="option in unitOptions" :key="option">
            {{ option }}
          </option>
        </select>
        <span
          :class="{ filled: unit }"
          class="absolute left-[20px] top-[-10px] px-2 bg-white text-gray-dark text-sm font-[400] leading-[18.75px]"
          >unit</span
        >
      </div>
      <div class="col-span-4 relative">
        <input
          v-model="variety"
          class="border-gray-dark rounded-[8px] bg-white h-[42px] border-[1px] text-gray-dark w-full px-4"
        />
        <span
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

<script>
import { ref, reactive } from "vue";
export default {
  setup() {
    const cropOptions = reactive([
      "",
      "option_1",
      "option_2",
      "option_3",
      "option_4",
      "option_5",
      "option_6",
      "option_7",
    ]);
    const unitOptions = reactive(["HA", "m2", "Acres"]);
    const crop = ref("");
    const area = ref("");
    const unit = ref("");
    const variety = ref("");

    return { cropOptions, unitOptions, crop, area, unit, variety };
  },
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