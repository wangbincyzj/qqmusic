import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        redirect: "/recommend"
    },
    {
        path: "/recommend",
        component: () => import("@/views/recommend/Recommend")

    },
    {
        path: "/rank",
        component: () => import("@/views/rank/Rank")
    },
    {
        path: "/mv/:id",
        component: () => import("@/views/mv/Mv")
    },
    {
        path: "/topList/:id",
        component: () => import("@/views/topList/TopList")
    },
    {
        path: "/search",
        component: () => import("@/views/search/Search")
    },
    {
        path: "/list/:id",
        component: () => import("@/views/songList/SongList")
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router
