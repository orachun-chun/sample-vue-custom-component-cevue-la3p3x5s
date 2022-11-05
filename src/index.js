import { defineCustomElement } from 'vue'
import MyCounter from "./index.ce.vue";

const ce = defineCustomElement(MyCounter);

customElements.define('my-counter', ce);

export {
  ce
}