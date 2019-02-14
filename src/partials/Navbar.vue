<template>
      <div class="nav-bar">
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
export default {
    name: 'Navbar',
    computed: {
        ...mapGetters({ currentUser: 'currentUser' })
    }
}
</script>

<style lang="scss">


</style>
