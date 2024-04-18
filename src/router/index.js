import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from "@/views/NotFound.vue";
import LoginView from "@/views/LoginView.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      label: 'Главная',
      tab: true,
      all: true
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      label: 'Логин',
      requiresAuth: false,
      tab: false
    }
  },
  {
    path: '*',
    name: 'notFound',
    component: NotFound,
    meta: {
      label: 'Страница не найдена',
      requiresAuth: true,
      tab: false
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
