import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Dashboard from './views/Dashboard.vue';
import Login from '@/components/basics/login/Login'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {path: '/',name: 'home',component: Home},
    {path: '/login', component: Login},
    {path: '/dashboard',name: 'dashboard',component: Dashboard},
        
    //otherwise redirect to home
    {path: '*', redirect: '/'},
  ]
});

// router.beforeEach((to, from, next) => {
//   //redirect to login page if not loggedin and trying to access a restricted page
//   const publicPages = ['/login', '/'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');

//   if ( authRequired && !loggedIn){
//       return next('/login');
//   }
//   next();
// })
