<template>

  <div
    class="min-h-[191px] md:h-[169px] mt-[261px] md:mt-[304px] mb-[346px]  flex flex-col justify-center items-center text-center gap-[30px]"
  >
    <h2 class="font-[700] text-3xl leading-[23.44px] text-black">
      Register The Crops of Your Farm
    </h2>
    <p
      class="text-center text-gray-dark text-xl font-[400] leading-[22.4px]"
    >
      Register the crops of your farm on Telagri and gain access to
      <br />affordable remote agronomy services and expert knowledge sharing.
    </p>
    <button
      @click="handleAddCrop"
      class="text-white flex justify-center items-center bg-teal-lite w-[153px] h-[42px] rounded-[8px] gap-[10px]"
    >
      <img
          src="../../assets/icons/plus.svg"
          alt="plusIcon"
          class="h-[24px] w-[24px] icon-white"
        />
      <span class="text-base font-[700] leading-[19.6px]">ADD CROP</span>
    </button>
  </div>
</template>

<script>
export default {
  setup(props, { emit }) {
    const handleAddCrop = () => {
      emit("handleAddCrop", "selection");
    };

    console.log(window.innerHeight);
    return { handleAddCrop };
  },
};
</script>

<style>
 .icon-white {
    filter: brightness(0) invert(1); 
  }
</style>