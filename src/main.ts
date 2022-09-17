import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.postcss'
import './assets/style.css'
import router from './router'
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import Maska from 'maska'
import { createGettext } from "vue3-gettext";
import translations from "./language/translations.json";

const gettext = createGettext({
    availableLanguages: {
        en: "English",
        es: "Spanish",
    },
    defaultLanguage: "es",
    translations: translations,
});

const head = createHead()
const app = createApp(App)

app.component('Datepicker', Datepicker);
app.use(createPinia())
app.use(gettext);
app.use(Maska)
app.use(router)
app.use(head)
app.mount('#app')
