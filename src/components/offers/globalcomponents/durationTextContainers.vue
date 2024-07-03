<template>
  <span
    v-if="durationLevel == 'urgent'"
    class="bg-white text-nowrap border-red border-[1px] rounded-[8px] py-[1px] px-[10px] text-red"
    >{{ text }}</span
  >
  <span
    v-else-if="durationLevel == 'new'"
    class="bg-white text-nowrap border-teal-lite border-[1px] rounded-[8px] py-[1px] px-[10px] text-teal-lite"
    >{{ text }}</span
  >
  <span
    v-else-if="durationLevel == 'default'"
    class="bg-white text-nowrap border-gray-border border-[1px] rounded-[8px] py-[1px] px-[10px] text-black"
    >{{ text }}</span
  >
</template>

<script lang="ts">
import { ref } from "vue";
type durationType = "default" | "new" | "urgent";
export default {
  props: {
    text: { type: String, required: true },
  },
  setup(props:any) {
    const durationLevel = ref<durationType>();
    if (props.text === "Offer valid for 1 day") {
      durationLevel.value = "urgent";
    } else if (
      props.text === "Offer valid for 2 days" ||
      props.text === "Offer valid for 3 days" ||
      props.text === "Offer valid for 4 days" ||
      props.text === "Offer valid for 5 days"
    ) {
      durationLevel.value = "default";
    } else {
      durationLevel.value = "new";
    }
    return { text: props.text, durationLevel };
  },
};
</script>

<style scoped>
</style>
