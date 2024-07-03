<template>
  <div class="flex w-full">
    <div
      :class="newRequest ? 'bg-teal-litest' : 'bg-white'"
      class="tablet:hidden flex w-[15%] justify-center px-3 items-center"
    >
      <router-link :to="{ name: 'Chat' }" class="flex laptop:hidden">
        <img
          src="../../../assets/icons/Frame 1321314597 (2).svg"
          alt="forum"
          class="rounded-[8px] min-w-[44px] min-h-[44px]"
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
          <div class="items-center rounded-[8px] hidden tablet:flex" :class="newRequest?'bg-teal-100' : 'bg-teal-litest'"
            ><router-link :to="{ name: 'Chat' }" >
              <img
                src="../../../assets/icons/Frame 1321314597 (2).svg"
                alt="forum"
                class="rounded-[8px] w-[44px] h-[44px]" /></router-link
          ></div>
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
          :class="newRequest ? 'color' : 'black'"
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
        ? "bg-teal-100"
        : (props.index ?? 0) % 2 === 0
        ? "bg-bgdark"
        : "bg-white tablet:bg-gray-bgdark";
    });
      const computedClassTwo = computed(() => {
      return newRequest.value
        ? "bg-teal-100"
        : (props.index ?? 0) % 2 === 0
        ? "bg-white"
        : "bg-gray-bgdark";
    });
    
    
    const hendelViewDetails = () => {
      const payload = {
        msg: "viewRequest",
        data: {
          imgSrc: "Rectangle 116.svg",
          title: props.title,
          duration: props.durationTime,
          location: "16 V. Anjaparidze St,Tbilisi,Georgia",
          datetime: "05.05.2024 13:18",
          languages: ["Spanish", "English"],
          urgent: true,
          additionalInfo: [
            { text: "I have already planted in my farm.", value: true },
            { text: "I have a weather station in the farm.", value: false },
            {
              text: "There is an irrigation water source in the farm.",
              value: false,
            },
            { text: "Subsurface Irrigation System", value: true },
            { text: "I have some type of sensors in the farm.", value: false },
            {
              text: "I am using a management software for my farm.",
              mvalue: true,
            },
            { text: "Producing in a greenhouse.", value: true },
            { text: "I have done the soil analysis.", value: true },
          ],
          farmProblemInfo:
            "Pest infestation threatens crop productivity, seeking agronomist guidance for tailored strategies and effective management.",
          corn: "40 Acres",
          id: props.currentRequestId,
        },
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
      computedClassTwo
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