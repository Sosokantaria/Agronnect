<template>
  <div
    :class="index && (index + 2) % 2 === 0 ? 'bg-gray-bgdark' : 'white'"
    class="flex items-center h-full"
  >
    <img :src="imgSrc" alt="img" /><span>{{ name }}</span>
    <div class="flex items-center">
      <img :src="flagImgSrc" alt="flagImg" class="w-[16px] h-[12px]" />
      <span> {{ location }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  props: {
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
  setup(props) {
    const imgSrc = computed(() => require(`@/assets/imgs/${props.img}`));
    const flagImgSrc = computed(() =>
      require(`@/assets/imgs/${props.flagImg}`)
    );

    return {
      name: props.name,
      location: props.location,
      durationTime: props.durationTime,
      index: props.index,
      imgSrc,
      flagImgSrc,
    };
  },
});
</script>

<style>
</style>