<template>
  <div v-if="componentView === 'notNewOffers'" class="h-[78vh]">
    <NotNewOffers @handleViewArchive="handleViewArchive" />
  </div>
  <div v-else-if="componentView === 'newOffers'"><NewOffers /></div>
  <div v-else-if="componentView === 'archive'"><Archive /></div>
  <div v-else-if="componentView === 'viewRequest'"><ViewRequest /></div>
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
  setup() {
    let newOffers = ref(false);
    let componentView = ref(newOffers.value ? "newOffers" : "notNewOffers");

    const handleViewArchive = (msg) => {
      componentView.value = msg;
    };

    return { componentView, handleViewArchive };
  },
};
</script>

<style>
</style>
