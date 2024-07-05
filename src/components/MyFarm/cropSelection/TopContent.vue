<template>
  <div
    class="w-[90%] shadow-[rgba(0,0,0,0.05)_0_1px_5px_1px] absolute top-[-40px] px-[30px] left-[5%] h-[80px] rounded-[8px] bg-teal-dark flex justify-center items-center"
  >
    <div class="flex flex-col justify-center items-center w-full gap-2">
      <div class="flex w-full justify-center">
        <img
          src="../../../assets/icons/bullet.svg"
          alt="bullet"
          class="text-white h-[16px] w-[16px]"
        /><img
          src="../../../assets/icons/Line.svg"
          alt="line"
          class=" w-[42%]"
        /><img
          src="../../../assets/icons/bullet.svg"
          alt="bullet"
          class="color h-[16px] w-[16px]"
        />
      </div>
      <div class="flex mx-auto tablet:justify-between justify-start w-[60%]">
        <span
          class="text-xl text-white font-[700] leading-[22.4px]"
          >CROP SELECTION</span
        ><span
          class="text-sm text-teal-liter font-[400] leading-[16.8px] hidden tablet:flex "
          >ADDITIONAL INFORMATION</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.color{
     filter: brightness(90%) saturate(31%) hue-rotate(173deg) brightness(90%) contrast(88%);
}
</style>