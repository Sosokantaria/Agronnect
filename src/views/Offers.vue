<template>
  <div v-if="componentView === 'notNewOffers'">
    <NotNewOffers @handleViewArchive="handleViewArchive" />
  </div>
  <div v-else-if="componentView === 'newOffers'"><NewOffers /></div>
  <div v-else-if="componentView === 'archive'">
    <Archive @hendelViewDetails="hendelViewDetails" />
  </div>
  <div v-else-if="componentView === 'viewRequest'">
    <ViewRequest
      :viewRequestData="viewRequestData"
      @handleBackToOffers="handleBackToOffers"
    />
  </div>
</template>

<script>
import { defineAsyncComponent, ref } from "vue";

const NotNewOffers = defineAsyncComponent(() =>
  import("../components/offers/notNewOffers.vue")
);
const NewOffers = defineAsyncComponent(() =>
  import("../components/offers/newOffers.vue")
);
const Archive = defineAsyncComponent(() =>
  import("../components/offers/archive.vue")
);
const ViewRequest = defineAsyncComponent(() =>
  import("../components/offers/viewRequest.vue")
);

export default {
  components: { NotNewOffers, NewOffers, Archive, ViewRequest },
  setup(props, { emit }) {
    let newOffers = ref(false);
    let componentView = ref(newOffers.value ? "newOffers" : "notNewOffers");

    const handleViewArchive = (msg) => {
      componentView.value = msg;
    };
    let viewRequestData = ref();
    const hendelViewDetails = (payload) => {
      viewRequestData.value = payload.data;
      componentView.value = payload.msg;
    };
    const handleBackToOffers = (msg) => {
      componentView.value = msg;
    };
    return {
      componentView,
      handleViewArchive,
      hendelViewDetails,
      viewRequestData,
      handleBackToOffers,
    };
  },
};
</script>

<style>
</style>
