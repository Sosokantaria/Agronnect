import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/index.css";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  MdDashboardSharp,
  MdHomeworkOutlined,
  BiArrowRightCircle,
  RiFinderLine,
  HiSolidChatAlt2,
} from "oh-vue-icons/icons";
addIcons(
  MdDashboardSharp,
  MdHomeworkOutlined,
  BiArrowRightCircle,
  RiFinderLine,
  HiSolidChatAlt2
);

createApp(App).use(router).component("v-icon", OhVueIcon).mount("#app");
