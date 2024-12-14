import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faEnvelope, faLock, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

library.add(faEnvelope, faLock, faCheckCircle);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon);
});
