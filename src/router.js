import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Dashboard from './views/loggedviews/Dashboard.vue';
import Logout from './components/basics/login/Logout.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {path: '/',name: 'home',component: Home},
    {path: '/login', component: () => import('./components/basics/login/Login.vue')},
    {path: '/dashboard',name: 'dashboard',component: Dashboard},
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
