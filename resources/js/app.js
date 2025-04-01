import 'bootstrap/dist/css/bootstrap.min.css'   // ✅ Bootstrap CSS trước
import '../css/app.css'                          // ✅ App custom sau
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap'


import {createApp, h} from 'vue';
import {createInertiaApp} from '@inertiajs/vue3';
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from 'ziggy-js';
import {InertiaProgress} from '@inertiajs/progress'

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

InertiaProgress.init({
    color: '#ffffff',
    showSpinner: false,
    delay: 100
})

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({el, App, props, plugin}) {
        return createApp({render: () => h(App, props)})
            .use(plugin)
            .use(ZiggyVue)
            .mount(el);
    },
    progress: {
        color: '#ffffff',
    },
}).then(r => {});
