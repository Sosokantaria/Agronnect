<template>
  <div
    class="bg-white shadow-[rgba(0,0,0,0.05)_0_1px_5px_1px] h-[130vh]  md:h-[71vh] laptop:h-[78vh] tablet:mx-[20px] relative m-auto mt-[10vh] rounded-[12px]"
  >
    <TopContent />
    <div class="flex flex-col h-full">
      <DataForm />
      <div class="flex flex-col items-center mt-8 ">
        <p
              class="font-[400] my-4 md:hidden text-center text-[16px] leading-[18.75px] text-gray-dark max-w-[420px]"
            >
              Please consider, you can add or edit any information later.
            </p>
        <div
          class="flex justify-between w-full px-[20px] mb-[36px] md:mb-[30px] "
        >
          <button
            @click="handleClickPrev"
            class="rounded-[8px] pr-[20px] pl-[10px] py-[10px] bg-white shadow-[rgba(0,0,0,0.2)_0_1px_5px_1px] flex items-center justify-center gap-"
          >
            <img
              src="../../../assets/icons/chevron-left.svg"
              alt="chevron left"
            /><span class="font-[700] text-[14px] leading-[19.6px] text-black"
              >PREVIOUS</span
            >
          </button>
          <div class="flex gap-3 items-center">
            <p
              class="font-[400] text-center text-[16px] hidden md:flex leading-[18.75px] text-gray-dark max-w-[420px]"
            >
              Please consider, you can add or edit any information later.
            </p>
            <button
              @click="handleClickNext"
              class="flex items-center justify-center rounded-[8px] py-[10px] px-[10px] bg-teal-lite shadow-[rgba(0,0,0,0.3)_0_1px_5px_1px]"
            >
              <span class="font-[700] text-[14px] leading-[19.6px] text-white"
                >SAVE</span
              >
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DataForm from "./DataFormAdditionalView.vue";
import TopContent from "./TopContent.vue";
export default {
  components: { DataForm, TopContent },
  setup(props, { emit }) {
    const handleClickPrev = () => {
      emit("handleClickPrev", "selection");
    };
    const handleClickNext = () => {
      emit("handleClickNext", "list");
    };
    return { handleClickPrev, handleClickNext };
  },
};
</script>