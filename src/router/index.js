import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/components/pages/homepages/Homepages.vue'
import datafiles from '@/views/datafiles.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('../views/Productdetalies.vue'),
      beforeEnter(to, from, next) {
        const exists = datafiles.products.find(
          (item) => item.id === parseInt(to.params.id, 10)
        );
        if (!exists) {
          next({ name: 'home' });
        } else {
          next();
        }
      },
    },
    {
      path: '/category/:id',
      name: 'category',
      component: () => import('../views/Productcategory.vue'),
      beforeEnter(to, from, next) {
        const exists = datafiles.productscategory.find(
          (item) => item.id === to.params.id
        );
        if (!exists) {
          next({ name: 'home' });
        } else {
          next();
        }
      },
    },
    {
      path: '/user/:id',
      name: 'user',
      component: () => import('../views/Productusers.vue'),
      beforeEnter(to, from, next) {
        const exists = datafiles.products.find(
          (item) => item.sotuvchi === to.params.id
        );
        if (!exists) {
          next({ name: 'home' });
        } else {
          next();
        }
      },
    },
    {
      path: '/brand/:id',
      name: 'brand',
      component: () => import('../views/Productbrand.vue'),
      beforeEnter(to, from, next) {
        const exists = datafiles.productsbrand.find(
          (item) => item.name === to.params.id
        );
        if (!exists) {
          next({ name: 'home' });
        } else {
          next();
        }
      },
    },
    {
      path: '/productall',
      name: 'productall',
      component: () => import('@/components/pages/productpages/productpages.vue')
    },
    {
      path: '/korzina',
      name: 'korzina',
      component: () => import('@/components/pages/Korzina/Savatcha.vue')
    },
    {
      path: '/korzinaoff',
      name: 'korzinaoff',
      component: () => import('@/components/pages/offkorzina.vue')
    },
    {
      path: '/buyurtma',
      name: 'buyurtma',
      component: () => import('@/components/pages/Korzina/Buyurtma.vue')
    },
    {
      path: '/arizaqabul',
      name: 'arizaqabul',
      component: () => import('@/components/pages/Korzina/ArizaQabul.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/pages/loginpages/login.vue')
    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import('@/components/pages/loginpages/registration.vue')
    },
    {
      path: '/vostonovleniya',
      name: 'vostonovleniya',
      component: () => import('@/components/pages/loginpages/vostonovleniya.vue')
    },
    {
      path: '/profil',
      name: 'profil',
      component: () => import('@/components/pages/profile/Profil.vue')
    },
    {
      path: '/sozlamalar',
      name: 'sozlamalar',
      component: () => import('@/components/pages/profile/Sozlamalar.vue')
    },
    {
      path: '/buyurtmatarix',
      name: 'buyurtmatarix',
      component: () => import('@/components/pages/profile/Tarixlari.vue')
    },
    {
      path: '/sevimlilarim',
      name: 'sevimlilarim',
      component: () => import('@/components/pages/profile/Sevimlilarim.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/components/pages/Contact.vue')
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/' 
    }
  ]
})

export default router
