import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from "@/views/NotFound.vue";
import LoginView from "@/views/LoginView.vue";
import AboutView from "@/views/AboutView.vue";
import CardView from "@/components/card-view.vue";
import TableView from "@/components/table-view.vue";
import FilesView from "@/views/FilesView.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        icon: 'mdi-file-star-outline',
        label: 'Избранное',
        tab: true,
        all: true
    },
    {
        path: '/card',
        name: 'card',
        component: CardView,
        icon: 'mdi-card-bulleted-outline',
        label: 'Карточки ',
        tab: true,
        all: true
    },
    {
        path: '/table',
        name: 'table',
        component: TableView,
        icon: 'mdi-table',
        label: 'Таблица',
        tab: true,
        all: true
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView,
        icon: 'mdi-menu',
        label: 'Категории',
        requiresAuth: false,
        tab: false,
        all: true

    },
    {
        path: '/files',
        name: 'files',
        component: FilesView,
        icon: 'mdi-account-file-text-outline',
        label: 'Мои файлы',
        requiresAuth: false,
        tab: false,
        all: true

    },
    {
        path: '/login',
        name: 'login',
        component: LoginView,
        label: 'Логин',
        requiresAuth: false,
        tab: false

    },
    {
        path: '*',
        name: 'notFound',
        component: NotFound,
        label: 'Страница не найдена',
        requiresAuth: true,
        tab: false

    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
