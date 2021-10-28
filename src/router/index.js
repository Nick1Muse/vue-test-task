import VueRouter from 'vue-router';
import CardInfo from '../views/CardInfo';
import Main from '../views/Main';

const routes = [
  {
    path: '/',
    name: Main,
    component: Main,
  },
  {
    path: '/card-info/:id',
    component: CardInfo,
  },
];

export const router = new VueRouter({
  routes,
  mode: 'history',
});