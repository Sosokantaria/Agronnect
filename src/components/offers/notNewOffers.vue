<template>
  <div
    class="flex flex-col justify-center items-center my-auto h-full text-center text-black gap-10"
  >
    <h2 class="font-[700] text-3xl leading-[23.44px] text-black">
      No New Offers Yet!
    </h2>
    <p class="text-center text-gray-dark text-xl font-[400] leading-[22.4px]">
      Ready to seek expert advice for your farm?<br />
      Start by sending consultation requests to skilled agronomists.
    </p>
    <router-link
      :to="{ name: 'FindSpecialists' }"
      class="text-white text-base font-[700] leading-[19.6px] bg-teal-lite rounded-[8px] px-[20px] py-[10px]"
      >Find Specialists</router-link
    >
    <span
      @click="handleViewArchive"
      class="text-black font-[700] text-xl leading-[18.75px] underline"
      >View Archive</span
    >
  </div>
</template>

<script>
export default {
  setup(props, { emit }) {
    const handleViewArchive = () => {
      emit("handleViewArchive", "archive");
    };
    return { handleViewArchive };
  },
};
</script>

<style>
</style>