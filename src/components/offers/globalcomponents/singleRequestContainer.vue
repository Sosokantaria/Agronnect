<template>
  <div class="flex w-full">
    <div
      class="w-[15%] flex items-center justify-center tablet:hidden"
      :class="newRequest ? 'bg-teal-litest' : 'bg-white'"
    >
      <router-link
        :to="{ name: 'Chat' }"
        :class="newRequest ? 'bg-teal-100' : 'bg-teal-litest'"
        class="rounded-[8px] flex justify-center px-3 w-[44px] h-[44px] items-center"
      >
        <img
          src="../../../assets/icons/forum-outline-teal.svg"
          alt="forum"
          class="min-w-[24px] min-h-[24px]"
      /></router-link>
    </div>
    <div
      :class="computedClassTwo"
      class="flex justify-center tablet:justify-between flex-col tablet:flex-row w-[50%] p-2 tablet:w-[75%]"
    >
      <div
        class="flex justify-between flex-col tablet:flex-row w-[100%] tablet:w-[70%]"
      >
        <div class="flex justify-between tablet:pr-6 w-[100%] tablet:w-[70%]">
          <div class="flex items-center tablet:w-[70%]">
            <img :src="imgSrc" alt="img" /><span class="ml-6 text-nowrap">{{
              name
            }}</span>
          </div>
          <router-link
            :to="{ name: 'Chat' }"
            class="items-center rounded-[8px] w-[44px] h-[44px] justify-center hidden tablet:flex"
            :class="newRequest ? 'bg-teal-litest' : 'bg-teal-100'"
          >
            <img
              src="../../../assets/icons/forum-outline-teal.svg"
              alt="forum"
              class="w-[24px] h-[24px]"
          /></router-link>
        </div>
        <div class="min-w-[28%] flex items-center justify-star">
          <div class="flex items-center gap-3">
            <img :src="flagImgSrc" alt="flagImg" class="w-[16px] h-[12px]" />
            <span> {{ location }}</span>
          </div>
        </div>
      </div>
      <div class="min-w-[30%] flex items-center">
        <durationTextContainer :text="durationTime" />
      </div>
    </div>
    <div
      :class="computedClass"
      class="w-[35%] tablet:min-w-[10%] flex justify-center"
    >
      <div class="flex items-center gap-3 text-black">
        <img
          src="../../../assets/icons/Vector (2).svg"
          alt="forum"
          class="w-[18px] h-[18px]"
        /><span
          @click="hendelViewDetails"
          :class="newRequest ? 'text-teal-lite' : 'text-black'"
          class="underline relative font-[700] text-xl leading-[22.4px] text-nowrap"
          >View Offer
          <span
            v-if="newRequest"
            class="text-white bg-teal-lite rounded-[5px] py[1px] px-[5px] flex items-center justify-center text-[10px] font-[600] leading-[14px] absolute right-0 tablet:right-[-30px] top-[-16px]"
            >New</span
          >
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { detailsData } from "@/types/archiveData";
import { defineComponent, computed, ref, PropType } from "vue";
import durationTextContainer from "./durationTextContainers.vue";

export default defineComponent({
  components: { durationTextContainer },
  props: {
    title: {
      require: true,
      type: String,
    },
    img: {
      required: true,
      type: String,
    },
    name: {
      required: true,
      type: String,
    },
    location: {
      required: true,
      type: String,
    },
    durationTime: {
      required: true,
      type: String,
    },
    flagImg: {
      required: true,
      type: String,
    },
    currentRequestId: {
      required: true,
      type: String,
    },
    index: {
      require: true,
      type: Number,
    },
    detailsData: {
      require: true,
      type: Object as PropType<detailsData>,
    },
  },
  setup(props, { emit }) {
    const imgSrc = computed(() => require(`@/assets/imgs/${props.img}`));
    const flagImgSrc = computed(() =>
      require(`@/assets/imgs/${props.flagImg}`)
    );
    const newRequest = ref(false);
    if (
      props.durationTime !== "Offer valid for 1 day" &&
      props.durationTime !== "Offer valid for 2 days" &&
      props.durationTime !== "Offer valid for 3 days" &&
      props.durationTime !== "Offer valid for 4 days" &&
      props.durationTime !== "Offer valid for 5 days"
    ) {
      newRequest.value = true;
    }
    const computedClass = computed(() => {
      return newRequest.value
        ? "bg-teal-litest tablet:bg-teal-100"
        : (props.index ?? 0) % 2 === 0
        ? "bg-white"
        : "bg-white tablet:bg-gray-bgdark";
    });
    const computedClassTwo = computed(() => {
      return newRequest.value
        ? "bg-teal-100"
        : (props.index ?? 0) % 2 === 0
        ? "bg-gray-bgdark tablet:bg-white"
        : "bg-gray-bgdark tablet:bg-gray-bgdark";
    });

    const hendelViewDetails = () => {
      const payload = {
        msg: "viewRequest",
        data: props.detailsData,
      };

      emit("hendelViewDetails", payload);
    };
    return {
      name: props.name,
      location: props.location,
      durationTime: props.durationTime,
      index: props.index,
      imgSrc,
      flagImgSrc,
      newRequest,
      hendelViewDetails,
      computedClass,
      computedClassTwo,
    };
  },
});
</script>

<style scoped>
.color {
  filter: brightness(0) saturate(100%) invert(53%) sepia(61%) saturate(412%)
    hue-rotate(123deg) brightness(88%) contrast(92%);
}
.black {
  filter: brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(0%)
    hue-rotate(0deg) brightness(0%) contrast(100%);
}
</style>