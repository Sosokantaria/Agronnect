<template>
  <div
    class="bg-white shadow-[rgba(0,0,0,0.05)_0_1px_5px_1px] h-[100vh] md:h-[71vh] laptop:h-[70vh] mx-[20px] m-auto mt-[7vh] rounded-[12px]"
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
    <div class="overflow-y-scroll h-full">
      <CropRequestsBox
        v-for="request in requestsData"
        :key="request.id"
        :id="request.id"
        :title="request.title"
        :urgent="request.urgent"
        :subtitle="request.subTitle"
        :reqArr="request.reqArr"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, ref } from "vue";
import axios from "axios";
import dataType from "../../types/archiveData";

const CropRequestsBox = defineAsyncComponent(
  () => import("../offers/globalcomponents/cropRequestContentBoxById.vue")
);

export default {
  components: { CropRequestsBox },
  setup() {
    let requestsData = ref<dataType[]>([]);
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/croprequests");
        requestsData.value = response.data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    return { requestsData };
  },
};
</script>

<style scoped>
</style>
