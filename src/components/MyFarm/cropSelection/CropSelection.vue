<template>
  <div
    class="bg-white shadow-[rgba(0,0,0,0.3)_0px_0px_4px_0px] pb-5 relative mt-[70px] rounded-[12px]"
  >
    <TopContent />
    <div class="flex flex-col h-full ">
      <DataForm />
      <div class="flex flex-col mt-[197px]  gap-4 items-center justify-end">
         <p
              class=" md:hidden font-[400] text-center w-[350px] text-xl leading-[18.75px] text-gray-dark  "
            >
              Please consider, you can add or edit any information later.
            </p>
        <div
          class="flex justify-between w-full px-[20px] "
        >
          <button
            @click="handleClickPrev"
            class="rounded-[8px] pr-[20px] pl-[10px] py-[10px] bg-white shadow-[rgba(0,0,0,0.2)_0_1px_5px_1px] flex items-center justify-center "
          >
            <img
              src="../../../assets/icons/chevron-left.svg"
              alt="chevron left"
            /><span class="font-[700] text-base leading-[19.6px] text-black"
              >PREVIOUS</span
            >
          </button>
          <div class="flex gap-3 items-center">
            <p
              class="font-[400] text-center text-xl leading-[18.75px] hidden md:flex text-gray-dark max-w-[420px]"
            >
              Please consider, you can add or edit any information later.
            </p>
            <button
              @click="handleClickNext"
              class="flex items-center justify-center rounded-[8px] gap-2 py-[10px] pl-[20px]  bg-teal-lite shadow-[rgba(0,0,0,0.3)_0_1px_5px_1px]"
            >
              <span class="font-[700] text-base leading-[19.6px] text-white"
                >NEXT</span
              ><img
                src="../../../assets/icons/chevron-right.svg"
                alt="chevron right"
                class="colorwhite"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DataForm from "./dataForm.vue";
import TopContent from "./TopContent.vue";
export default {
  components: { DataForm, TopContent },
  setup(props, { emit }) {
    const handleClickPrev = () => {
      emit("handleClickPrev", "register");
    };
    const handleClickNext = () => {
      emit("handleClickNext", "additional");
    };
    return { handleClickPrev, handleClickNext };
  },
};
</script>

<style scoped>
.colorwhite{
  filter: brightness(0) invert(1);
}
</style>