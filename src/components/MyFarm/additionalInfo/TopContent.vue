<template>
    <div
    class="w-[90%] shadow-[rgba(0,0,0,0.05)_0_1px_5px_1px] absolute top-[-6vh] left-[5%] h-[12vh] rounded-[8px] bg-teal-dark flex justify-center items-center"
  >
    <div class="flex justify-center items-center relative bottom-2 w-full">
      <div class="flex flex-col justify-center items-center">
        <img
          src="../../../assets/icons/check-circle.svg"
          class="text-white h-[16px] w-[16px] z-10 absolute left-[28%]"
        /><span
          class="text-[12px] text-white font-[400] leading-[22.4px] hidden tablet:flex absolute left-[24.8%] bottom-[-4vh]"
          >CROP SELECTION</span
        >
      </div>
      <img
        src="../../../assets/icons/Line.svg"
        alt="Line"
        class="text-teal-liter relative border-[1px] bg-teal-liter w-[37%] mobile:w-[39%] tablet:w-[40.3%] tablet: md:w-[39.5%] laptop:w-[41.5%]"
      />
      <div class="flex flex-col justify-center items-center">
        <v-icon
          name="fa-circle"
          class="text-white h-[16px] w-[16px] absolute right-[28%]"
        /><span
          class="text-[16px] text-white font-[700] leading-[16.8px] absolute right-[18%] bottom-[-3.6vh]"
          >ADDITIONAL INFORMATION</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>