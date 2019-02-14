<template>
   
<ul class="navigation">
  <router-link to="/"><a><img src="../assets/image/LOGO-BIG.svg" alt="logo"></a></router-link>
  <router-link to="/"><a>Hello, {{ currentUser.firstName }} !</a></router-link>
  <router-link to="/logout">
    <li>
      <a>
        Logout
      </a>
    </li>
  </router-link>
</ul>

</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Navbar',
    computed: {
        ...mapGetters({ currentUser: 'currentUser' })
    }
}
</script>

<style lang="scss">


</style>
