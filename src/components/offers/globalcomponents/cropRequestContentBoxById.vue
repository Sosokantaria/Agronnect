<template>
  <div class="flex flex-col">
    <hr class="w-full h-full" />
    <div
      @click="toggleShow"
      class="min-h-[80px] w-full flex justify-start items-center cursor-pointer bg-gray-bgdark"
    >
      <div
        class="h-[80px] tablet:w-[80px] w-[60px] bg-gray-bgdarker flex justify-center items-center"
      >
        <img
          src="../../../assets/icons/chevron-up.svg"
          :class="{ 'rotate-180': isShow }"
          class="h-[24px] w-[24px] transition-transform duration-300"
        />
      </div>
      <div class="flex flex-col">
        <div class="flex gap-2 ml-3 text-xl">
          <span class="text-black">{{ title }}</span
          >-<span>{{ id }}</span
          ><span
            v-if="urgent"
            class="bg-white border-red border-[1px] flex items-center justify-center text-sm rounded-[8px] py-[1px] px-[10px] text-red"
          >
            Urgent
          </span>
        </div>
        <span class="ml-3 text-base text-gray-dark">{{ subtitle }}</span>
      </div>
    </div>
    <div v-if="isShow" class="md:px-[42px] md:py-[11px]">
      <singleRequestContainer
        v-for="(req, index) in reqArr"
        :key="index"
        :title="title"
        :id="id"
        :img="req.img"
        :index="index"
        :currentRequestId="id"
        :flagImg="req.flagImg"
        :durationTime="req.durationTime"
        :location="req.location"
        :name="req.name"
        :detailsData="detailsData"
        @hendelViewDetails="hendelViewDetails"
      />
    </div>

    <hr class="w-full" />
  </div>
</template>

<script lang="ts">
import { ref, PropType, defineComponent, defineAsyncComponent } from "vue";
import duration from "./durationTextContainers.vue";
const singleRequestContainer = defineAsyncComponent(
  () => import("../globalcomponents/singleRequestContainer.vue")
);
import {
  archiveDateSingleRequest,
  detailsData,
} from "../../../types/archiveData";
export default defineComponent({
  components: { duration, singleRequestContainer },
  props: {
    id: {
      require: true,
      type: String,
    },
    title: {
      require: true,
      type: String,
    },
    urgent: { require: true, type: Boolean },
    subtitle: { require: true, type: String },
    reqArr: {
      require: true,
      type: Array as PropType<archiveDateSingleRequest[]>,
      default: () => [],
    },
    detailsData: {
      require: true,
      type: Object as PropType<detailsData>,
    },
  },
  setup(props, { emit }) {
    const isShow = ref(false);
    const toggleShow = () => {
      isShow.value = !isShow.value;
    };
    const hendelViewDetails = (payload: string) => {
      emit("hendelViewDetails", payload);
    };
    return {
      toggleShow,
      isShow,
      id: props.id,
      title: props.title,
      urgent: props.urgent,
      subtitle: props.subtitle,
      reqArr: props.reqArr,
      detailsData: props.detailsData,
      hendelViewDetails,
    };
  },
});
</script>
