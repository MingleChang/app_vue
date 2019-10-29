import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Download from '@/views/Download.vue'
import Upload from '@/views/Upload.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/download/:id',
            name: 'download',
            component: Download,
        },
        {
            path: '/upload',
            name: 'upload',
            component: Upload
        }
    ]
})

export default router