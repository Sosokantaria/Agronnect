<template>
  <div >
    <div v-if="componentView === 'register'" class="md:mr-8">
      <RegisterNewCrop @handleAddCrop="handleAddCrop" />
    </div>
    <div v-else-if="componentView === 'selection'">
      <CropSelection
        @handleClickPrev="handleClickPrev"
        @handleClickNext="handleClickNext"
      />
    </div>
    <div v-else-if="componentView === 'additional'">
      <AdditionalInformation
        @handleClickPrev="handleClickPrev"
        @handleClickNext="handleClickNext"
      />
    </div>
    <div v-else-if="componentView === 'list'">
      <ListCrops @handleAddCrop="handleAddCrop" />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent, ref } from "vue";
const RegisterNewCrop = defineAsyncComponent(() =>
  import("../components/MyFarm/RegisterNewCrop.vue")
);
const ListCrops = defineAsyncComponent(() =>
  import("../components/MyFarm/ListCrops.vue")
);
const CropSelection = defineAsyncComponent(() =>
  import("../components/MyFarm/cropSelection/CropSelection.vue")
);
const AdditionalInformation = defineAsyncComponent(() =>
  import("../components/MyFarm/additionalInfo/AdditionalInformation.vue")
);

export default {
  components: {
    RegisterNewCrop,
    ListCrops,
    CropSelection,
    AdditionalInformation,
  },
  setup() {
    let componentView = ref("register");
    const handleAddCrop = (msg) => {
      componentView.value = msg;
    };
    const handleClickPrev = (msg) => {
      componentView.value = msg;
    };
    const handleClickNext = (msg) => {
      componentView.value = msg;
    };

    return { componentView, handleAddCrop, handleClickPrev, handleClickNext };
  },
};
</script>

<style>
</style>
