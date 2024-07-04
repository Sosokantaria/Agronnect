<template>
  <div
    :class="`h-[${height}]`"
    class="bg-white shadow-[rgba(0,0,0,0.05)_0_1px_5px_1px] md:mb-5 pb-5 md:mt-[50px] md:mr-4 rounded-[12px]"
  >
    <div class="flex justify-end w-full items-center gap-2 p-4">
      <img
        src="../../assets/icons/history.svg"
        alt="history"
        class="h-[24px] w-[24px]"
      />
      <span
        class="text-black font-[700] text-xl leading-[18.75px] cursor-default underline"
        >Archive</span
      >
    </div>
    <div class="h-full">
      <CropRequestsBox
        v-for="(request, index) in requestsData"
        :key="index"
        :id="request.id"
        :title="request.title"
        :urgent="request.urgent"
        :subtitle="request.subTitle"
        :reqArr="request.reqArr"
        @hendelViewDetails="hendelViewDetails"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent, ref } from "vue";
import axios from "axios";
import dataType from "../../types/archiveData";

const CropRequestsBox = defineAsyncComponent(
  () => import("../offers/globalcomponents/cropRequestContentBoxById.vue")
);

export default defineComponent({
  components: { CropRequestsBox },
  setup(props, { emit }) {
    let requestsData = ref<dataType[]>([]);
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/croprequests");
        requestsData.value = response.data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const hendelViewDetails = (payload: string) => {
      emit("hendelViewDetails", payload);
    };
    fetchData();
    const height = ref();


    return { requestsData, hendelViewDetails, height };
  },
});
</script>

<style scoped>
</style>
