<template>
  <div
    class="tablet:max-h-[80vh] pb-[70px] desktop:max-h-[88vh]  mx-auto pt-6 grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 md:pl-10 gap-x-8 gap-y-8 overflow-y-scroll container"
  >
    <div
      @click="handleAddCrop"
      class="w-[330px] h-[180px] mx-auto  rounded-xl bg-white flex flex-col justify-center items-center gap-4 shadow-[rgba(0,0,0,0.05)_0_1px_5px_1px]"
    >
      <img
        src="../../assets/icons/Vector.svg"
        alt="vector"
        class="w-[33.33px] h-[33.33px] text-teal-lite"
      />
      <p class="font-[700] text-3xl text-black leading-[28px]">
        Add New Crop
      </p>
    </div>
    <div
      v-for="crop in cropsArr"
      :key="crop.id"
      class="w-[330px] mx-auto  h-[170px] relative rounded-xl bg-white flex flex-col justify-between items-center  shadow-[rgba(0,0,0,0.05)_0_1px_5px_1px]"
    >
      <div class="flex absolute top-[-20px] w-[93%] justify-between left-4">
        <div class="flex items-center justify-center gap-2">
          <img :src="crop.img" alt="crop img" class="h-[74px] w-[75px]" />
          <h2 class="font-[700] text-xl leading-[22.4px] text-black">
            {{ crop.title }}
          </h2>
        </div>
        <img
          src="../../assets/icons/dots-vertical.svg"
          alt="dots vertical"
        />
      </div>
      <div class="flex flex-col w-full mt-[80px]">
        <hr class="w-full bg-black border-[1px]" />
        <div class="flex w-[90%] justify-between m-3">
          <div class="flex items-center gap-1">
            <img
              src="../../assets/icons/map-marker-outline.svg"
              alt="map-marker-outline"
              class="icon-img h-[24px] w-[24px]"
            />
            <p class="font-[400] text-base leading-[19.6px] text-gray-dark">
              {{ crop.location }}
            </p>
          </div>
          <div class="flex items-center gap-1">
            <img
              src="../../assets/icons/ruler-square-compass.svg"
              alt="map-marker-outline"
              class="icon-img h-[24px] w-[24px]"
            />
            <p class="font-[400] text-base leading-[19.6px] text-gray-dark">
              {{ crop.unit }}
            </p>
          </div>
        </div>
        <hr class="w-full bg-black border-[1px]" />
        <div class="flex mt-2 justify-center items-center gap-2">
          <img
            src="../../assets/icons/eye-outline.svg"
            alt="eye-outline"
            class="icon-img-black h-[24px] w-[24px]"
          />
          <p class="font-[700] text-sm text-black leading-[16.8px]">VIEW DETAILS</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  setup(props, { emit }) {
    const cropsArr = reactive([
      {
        img: require("../../assets/imgs/walnut.png"),
        title: "Walnut (Juglans Regia)",
        location: "Shalva Nutsubidze St, T'b...",
        unit: "45000 Sq m",
        id: "1",
      },
      {
        img: require("../../assets/imgs/strawberry.png"),
        title: "Strawberry (Fragaria)",
        location: "Saguramo, Georgia",
        unit: "62 Acres",
        id: "2",
      },
      {
        img: require("../../assets/imgs/strawberry.png"),
        title: "Strawberry (Fragaria)",
        location: "Tbilisi, Georgia",
        unit: "120 Acres",
        id: "3",
      },
      {
        img: require("../../assets/imgs/watermelon.png"),
        title: "Watermelon (Citrullus ...",
        location: "Alexandre Kazbegi St, T'b...",
        unit: "45000 Sq m",
        id: "4",
      },
      {
        img: require("../../assets/imgs/sage.png"),
        title: "Sage (Salvia)",
        location: "Georgia",
        unit: "240 HA",
        id: "5",
      },
      {
        img: require("../../assets/imgs/walnut.png"),
        title: "Walnut (Juglans Regia)",
        location: "Shalva Nutsubidze St, T'b...",
        unit: "45000 Sq m",
        id: "6",
      },
      {
        img: require("../../assets/imgs/sage.png"),
        title: "Sage (Salvia)",
        location: "Georgia",
        unit: "240 HA",
        id: "7",
      },
      {
        img: require("../../assets/imgs/strawberry.png"),
        title: "Strawberry (Fragaria)",
        location: "Saguramo, Georgia",
        unit: "62 Acres",
        id: "8",
      },
      {
        img: require("../../assets/imgs/strawberry.png"),
        title: "Strawberry (Fragaria)",
        location: "Tbilisi, Georgia",
        unit: "120 Acres",
        id: "9",
      },
      {
        img: require("../../assets/imgs/watermelon.png"),
        title: "Watermelon (Citrullus ...",
        location: "Alexandre Kazbegi St, T'b...",
        unit: "45000 Sq m",
        id: "10",
      },
      {
        img: require("../../assets/imgs/sage.png"),
        title: "Sage (Salvia)",
        location: "Georgia",
        unit: "240 HA",
        id: "11",
      },
    ]);
    const handleAddCrop = () => {
      emit("handleAddCrop", "selection");
    };
    return { cropsArr, handleAddCrop };
  },
};
</script>

<style>
.container::-webkit-scrollbar {
  display: none;
}

.container {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.icon-img {
  filter: brightness(0) saturate(100%) invert(61%) sepia(89%) saturate(271%)
    hue-rotate(106deg) brightness(93%) contrast(83%);
}
.icon-img-black {
  filter: brightness(0) saturate(100%) invert(59%) sepia(15%) saturate(456%)
    hue-rotate(176deg) brightness(91%) contrast(88%);
}
</style>