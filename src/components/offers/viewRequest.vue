<template>
  <div class=" md:mt-[15px]">
    <span
      ><span class="text-blue-darkest font-[400] text-xl leading-[22.4px]"
        >/ View Request </span
      >{{ detailsData.id }}</span
    >
    <div class="flex flex-col gap-2 bg-whiteDark p-6 tablet:hidden">
      <div class="flex w-full justify-between">
        <durationText :text="detailsData.duration" />
        <span
          v-if="detailsData.urgent"
          class="py-[1px] px-[10px] rounded-[8px] flex gap-[40px] text-red border-red border-[1px]"
          >Urgent Request</span
        >
      </div>
      <span class="font-[400] text-[16px] leading-[18.75px] text-gray-dark">{{
        detailsData.datetime
      }}</span>
    </div>
    <div class="flex flex-col justify-between md:mt-[10px] pr-10">
      <div class="flex justify-between w-full">
        <div class="flex flex-col gap-5">
          <div class="flex gap-4">
            <img :src="imgSrc" alt="img" />
            <div class="flex flex-col items-center justify-start gap-2">
              <h2 class="text-black font-[700] mt-2 text-[20px] leading-[28px]">
                {{ detailsData.title }}
              </h2>
              <span
                class="font-[400] text-[16px] leading-[22.4px] text-gray-dark"
                >{{ detailsData.corn }}</span
              >
            </div>
          </div>
          <div class="flex gap-2 items-center justify-start">
            <img
              src="../../assets/icons/map-marker.svg"
              class="teal"
              alt="iconLocation"
            /><span class="font-[400] text-base leading-[19.6px]">{{
              detailsData.location
            }}</span
            ><img src="../../assets/icons/Group 448.svg" alt="globus" />
          </div>
        </div>
        <div class="flex-col items-end justify-between hidden tablet:flex">
          <span
            v-if="detailsData.urgent"
            class="py-[1px] px-[10px] rounded-[8px] flex gap-[40px] text-red border-red border-[1px]"
            >Urgent Request</span
          ><span
            class="font-[400] text-[16px] leading-[18.75px] text-gray-dark"
            >{{ detailsData.datetime }}</span
          ><durationText :text="detailsData.duration" />
        </div>
      </div>
      <hr class="w-full text-gray-dark my-3" />
      <div>
        <h2 class="font-[700] text-xl mb-2 leading-[22.4px] text-black">
          Additional Information
        </h2>
        <div class="w-full grid grid-cols-1 tablet:grid-cols-2">
          <div
            v-for="(item, index) in detailsData.additionalInfo"
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
          <div class=" flex-col tablet:col-start-2 ml-[32px] gap-2 hidden md:flex ">
            <div class="flex gap-1">
              <img
                src="../../assets/icons/paperclip.svg"
                alt="paperclip"
                class="w-[24px] h-[24px]"
              />
              <p class="font-[700] text-xl leading-[18.75px] text-black">
                Soil_analysis.pdf
              </p>
            </div>
            <div class="flex ">
              <img
                src="../../assets/icons/paperclip.svg"
                alt="paperclip"
                class="w-[24px] h-[24px]"
              />
              <p class="font-[700] text-xl leading-[18.75px] text-black">
                Crop_research.docx
              </p>
            </div>
            <div class="flex ">
              <img
                src="../../assets/icons/paperclip.svg"
                alt="paperclip"
                class="w-[24px] h-[24px]"
              />
              <p class="font-[700] text-xl leading-[18.75px] text-black">
                Soil_structure.jpg
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr class="w-full text-gray-dark my-3" />
      <div class="flex flex-col gap-2">
        <h2 class="font-[700] text-xl leading-[18.75px] text-black">
          Farm Problem
        </h2>
        <span class="font-[400] text-[16px] leading-[22.4px] text-gray-dark">{{
          detailsData.farmProblemInfo
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
            v-for="(lang, index) in detailsData.languages"
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
import detailsData from "../../types/ViewRequesData";
import { computed, defineComponent, PropType } from "vue";
import durationText from "../../components/offers/globalcomponents/durationTextContainers.vue";
export default defineComponent({
  components: { durationText },
  props: {
    detailsData: {
      require: true,
      type: Object as PropType<detailsData>,
      default: () => Object || undefined || {},
    },
  },
  setup(props, { emit }) {
    const { detailsData } = props;
    const imgSrc = computed(() =>
      require(`@/assets/imgs/${detailsData.imgSrc}`)
    );
    const handleBackToOffers = () => {
      emit("handleBackToOffers", "archive");
    };

    return { detailsData, imgSrc, handleBackToOffers };
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