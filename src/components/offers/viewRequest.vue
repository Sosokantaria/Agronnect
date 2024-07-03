<template>
  <div class=" h-full md:mx-6 mb-[66px] md:mb-0">
    <span
      ><span class="mx-1 ml-6 text-blue-darkest font-[400] text-xl leading-[22.4px]"
        >/ View Request</span
      >{{ viewRequestData.id }}</span
    >
    <div class="flex flex-col gap-2 bg-whiteDark p-6 tablet:hidden">
      <div class="flex w-full justify-between">
        <durationText :text="viewRequestData.duration" />
        <span
          v-if="viewRequestData.urgent"
          class="py-[1px] px-[10px] rounded-[8px] flex gap-[40px] text-red border-red border-[1px]"
          >Urgent Request</span
        >
      </div>
      <span class="font-[400] text-[16px] leading-[18.75px] text-gray-dark">{{
        viewRequestData.datetime
      }}</span>
    </div>
    <div class="flex flex-col justify-between mt-3 tablet:mt-0 h-full px-6">
      <div class="flex justify-between w-full">
        <div class="flex flex-col gap-5">
          <div class="flex gap-4">
            <img :src="imgSrc" alt="img" />
            <div class="flex flex-col items-center justify-start gap-2">
              <h2 class="text-black font-[700] mt-2 text-[20px] leading-[28px]">
                {{ viewRequestData.title }}
              </h2>
              <span
                class="font-[400] text-[16px] leading-[22.4px] text-gray-dark"
                >{{ viewRequestData.corn }}</span
              >
            </div>
          </div>
          <div class="flex gap-2 items-center justify-start">
            <img
              src="../../assets/icons/map-marker.svg"
              class="teal"
              alt="iconLocation"
            /><span class="font-[400] text-base leading-[19.6px]">{{
              viewRequestData.location
            }}</span
            ><img src="../../assets/icons/Group 448.svg" alt="globus" />
          </div>
        </div>
        <div class=" flex-col items-end justify-between hidden tablet:flex">
          <span
            v-if="viewRequestData.urgent"
            class="py-[1px] px-[10px] rounded-[8px] flex gap-[40px] text-red border-red border-[1px]"
            >Urgent Request</span
          ><span
            class="font-[400] text-[16px] leading-[18.75px] text-gray-dark"
            >{{ viewRequestData.datetime }}</span
          ><durationText :text="viewRequestData.duration" />
        </div>
      </div>
      <hr class="w-full text-gray-dark my-3" />
      <div>
        <h2 class="font-[700] text-xl mb-2 leading-[22.4px] text-black">
          Additional Information
        </h2>
        <div class="w-full grid grid-cols-1 tablet:grid-cols-2">
          <div
            v-for="(item, index) in viewRequestData.additionalInfo"
            :key="index"
            class="flex gap-2 items-center"
          >
            <img
              v-if="item.value"
              src="../../assets/icons/check-bold.svg"
              class="h-[24px] w-[24px]"
            /><img
              v-if="!item.value"
              class="h-[24px] w-[24px]"
              src="../../assets/icons/close-thick.svg"
            />
            <span
              class="font-[400] text-[16px] leading-[18.75px] py-2 text-gray-dark"
              >{{ item.text }}</span
            >
          </div>
        </div>
      </div>
      <hr class="w-full text-gray-dark my-3" />
      <div class="flex flex-col gap-2">
        <h2 class="font-[700] text-xl leading-[18.75px] text-black">
          Farm Problem
        </h2>
        <span class="font-[400] text-[16px] leading-[22.4px] text-gray-dark">{{
          viewRequestData.farmProblemInfo
        }}</span>
      </div>
      <hr class="w-full text-gray-dark my-2" />
      <div class="flex flex-col gap-3">
        <h2 class="font-[700] text-xl leading-[22.4px] text-black">
          Communication language with the agronimist
        </h2>
        <div class="flex items-center gap-2 justify-start">
          <img
            src="../../assets/icons/account-voice.svg"
            class="h-[24px] w-[24px]"
            alt=""
          /><span
            v-for="(lang, index) in viewRequestData.languages"
            :key="index"
            class="font-[400] text-[16px] leading-[22.4px] text-gray-dark"
            >{{ lang }}</span
          >
        </div>
      </div>
    </div>
    <hr class="w-full text-gray-dark my-3" />
    <button
      @click="handleBackToOffers"
      class="rounded-[8px] tablet:w-[166px] w-[350px] mx-auto tablet:mx-0 pr-[20px] pl-[10px] py-[10px] bg-white shadow-[rgba(0,0,0,0.2)_0_1px_5px_1px] flex items-center justify-center"
    >
      <img
        src="../../assets/icons/chevron-left.svg"
        alt="chevron left "
        class="black"
      />
      <span> Back to Offers</span>
    </button>
  </div>
</template>

<script lang="ts">
import ViewRequestData from "../../types/ViewRequesData";
import { computed, defineComponent, PropType } from "vue";
import durationText from "../../components/offers/globalcomponents/durationTextContainers.vue";
export default defineComponent({
  components: { durationText },
  props: {
    viewRequestData: {
      require: true,
      type: Object as PropType<ViewRequestData>,
      default: () => Object || undefined,
    },
  },
  setup(props, { emit }) {
    const { viewRequestData } = props;
    const imgSrc = computed(() =>
      require(`@/assets/imgs/${viewRequestData.imgSrc}`)
    );
    const handleBackToOffers = () => {
      emit("handleBackToOffers", "archive");
    };

    return { viewRequestData, imgSrc, handleBackToOffers };
  },
});
</script>

<style scoped>
.black {
  filter: brightness(0) saturate(100%);
}
.teal {
  filter: brightness(0) saturate(100%) invert(53%) sepia(61%) saturate(412%)
    hue-rotate(123deg) brightness(88%) contrast(92%);
}
</style>