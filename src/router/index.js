import { createRouter, createWebHistory } from 'vue-router';

// import LoginPage from '../views/LoginPage.vue';
// import HomePage from '../views/HomePage.vue';
// const routes = [
//   {
//     path: '/',
//     name: 'HomePage',
//     component: HomePage
//   },
//   {
//     path: '/login',
//     name: 'LoginPage',
//     component: LoginPage
//   }
// ];

const routes = [
  {
    path: '/',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/login',
    component: () => import('../views/LoginPage.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;