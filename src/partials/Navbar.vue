<template>
  <div class="nav-bar">
  <sidenav></sidenav>
    <router-link to="/"><a><img class="logo" src="../assets/image/LOGO-BIG.svg" alt="logo"></a></router-link>
  <ul class="navigation">
    <router-link to="/dashboard"><a>Hello, {{ currentUser.firstName }} !</a></router-link>
    <router-link to="/logout">
      <li>
        <a>
          Logout
        </a>
      </li>
    </router-link>
  </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Slide } from 'vue-burger-menu'  // import the CSS transitions you wish to use, in this case we are using `Slide`
import sidenav from './Sidenav'

export default {
    name: 'Navbar',
    computed: {
        ...mapGetters({ currentUser: 'currentUser' })
    },
    components:{
      sidenav
    }
}
</script>

<style lang="scss">


</style>
