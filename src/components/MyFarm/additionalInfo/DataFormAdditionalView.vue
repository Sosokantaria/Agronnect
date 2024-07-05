<template>
  <div class="max-w-[370px] md:max-w-[758px] px-[20px] mobile:px-0 mt-[60px] md:pt-[70px] mx-auto text-center flex flex-col">
    <h2
      class=" mb-[30px] text-black font-[700] text-3xl leading-[28px]"
    >
      Provide additional information about your farm
    </h2>
    <div class="flex flex-col items-center gap-6 md:gap-2 laptop:gap-6">
      <h3 class="font-[700] text-xl text-black leading-[18.75px]">
        Where is your farm located?
      </h3>
      <div class="relative mobile:min-w-[370px]">
        <input
          v-model="location"
          ref="locationInput"
          class="border-gray-dark rounded-[8px] bg-white h-[42px] border-[1px] text-gray-dark w-full px-4"
        />
        <span
          :class="{ filled: location }"
          @click="focusInput('locationInput')"
          class="absolute left-[20px] px-2 top-[21%] bg-white text-gray-dark text-xl font-[400] leading-[18.75px]"
          >Farm Location
        </span>
        <img
          src="../../../assets/icons/map-marker-outline.svg"
          class="absolute right-[10px] top-[21%] bg-white text-gray-dark h-[24px] w-[24px]"
        />
      </div>
      <div class="flex flex-col items-center">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
          <div
            v-for="inputValue in inputValues"
            :key="inputValue.id"
            class="col-span-0.5 flex items-center gap-2"
          >
            <input
              type="checkbox"
              class="border-solid h-[20px] w-[20px] accent-teal-lite rounded-[5px] border-gray-dark"
            />
            <p
              class="font-[400] md:max-w-[25vw] flex text-start text-xl leading-[18.75px] text-gray-dark"
            >
              {{ inputValue.value }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const inputValues = ref([
  { value: "I have already planted in my farm.", id: 1 },
  { value: "I have a weather station in the farm.", id: 2 },
  { value: "There is an irrigation water source in the farm.", id: 3 },
  { value: "My farm has an irrigation system.", id: 4 },
  { value: "I have some type of sensors in the farm.", id: 5 },
  { value: "I am using a management software for my farm.", id: 6 },
  { value: "Producing in a greenhouse.", id: 7 },
  { value: "I have done the soil analysis.", id: 8 },
]);
const location=ref('')
const locationInput = ref(null);
const focusInput = (inputRef) => {
  if (inputRef === 'locationInput' ) {
    locationInput.value.focus();
  }
};
</script>

<style>
input:focus + span,
.filled {
  top: -10px;
  font-size: 12px;
  transition: all 0.3s ease;
}
</style>