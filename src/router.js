import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Dashboard from './views/loggedviews/Dashboard.vue';
import Bills from './views/loggedviews/Bills.vue';
import Logout from './components/basics/login/Logout.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {path: '/',name: 'home',component: Home},
    {path: '/login',name: 'login', component: () => import('./components/basics/login/Login.vue')},
    {path: '/signup',name: 'signup', component: () => import('./components/basics/register/SignUp.vue')},
    {path: '/dashboard',name: 'dashboard',component: Dashboard},
    {path: '/bills',name: 'bills',component: Bills},
    {path: '/logout',name: 'Logout',component: Logout}
  ]
});

// Router.beforeEach((to, from, next) => {
//   //redirect to login page if not loggedin and trying to access a restricted page
//   const publicPages = ['/login', '/'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('token');

//   if ( authRequired && !loggedIn){
//       return next('/login');
//   }
//   next();
// })
