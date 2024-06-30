<template>
  <div
    class="w-[100%] h-[100%] flex flex-col justify-center items-center text-center text-black gap-10"
  >
    <h2 class="font-[700] text-[20px] leading-[23.44px] text-black">
      Register The Crops of Your Farm
    </h2>
    <p
      class="text-center text-gray-dark text-[16px] font-[400] leading-[22.4px]"
    >
      Register the crops of your farm on Telagri and gain access to
      <br />affordable remote agronomy services and expert knowledge sharing.
    </p>
    <button
      @click="handleAddCrop"
      class="text-white flex items-center bg-teal-lite rounded-[8px] px-[20px] py-[10px]"
    >
      <v-icon name="px-plus" />
      <span class="text-[14px] font-[700] leading-[19.6px]">ADD CROP</span>
    </button>
  </div>
</template>

<script>
export default {
  setup(props, { emit }) {
    const handleAddCrop = () => {
      emit("handleAddCrop", "selection");
    };
    return { handleAddCrop };
  },
};
</script>

<style>
</style>