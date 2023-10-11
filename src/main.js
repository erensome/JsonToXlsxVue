import { createApp } from 'vue'
import App from './App.vue'
import JsonExcel from "vue-json-excel3";

createApp(App).component("downloadExcel", JsonExcel).mount('#app')
