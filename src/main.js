import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { surveyPlugin } from "survey-vue3-ui";
import "survey-core/defaultV2.min.css";

createApp(App).use(surveyPlugin).use(store).use(router).mount("#app");
