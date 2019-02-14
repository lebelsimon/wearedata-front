<template>
  <div id="app">
    <!-- <div class="container"> -->
      <template v-if="currentUser">
        <Navbar></Navbar>
      </template>
      <template  v-else>
        <Header />
      </template>
        <router-view />
      <Footer />
    </div>
  <!-- </div> -->

</template>

<script>
  import Header from "@/partials/Header.vue";
  import Footer from "@/partials/Footer.vue";
  import Navbar from '@/partials/Navbar.vue'
  import { mapGetters } from 'vuex'
  export default {
    components: {
      Header,
      Footer,
      Navbar
    },
    computed: {
    ...mapGetters({ currentUser: 'currentUser' })
    },
    created () {
      this.checkCurrentLogin()
    },
    updated () {
      this.checkCurrentLogin()
    },
    methods: {
      checkCurrentLogin () {
        if (!this.currentUser && (this.$route.path !== '/login' && this.$route.path !== '/' && this.$route.path !== '/signup')) {
          this.$router.push('/login')
        }
      }
    }
  }
</script>


<style lang="scss">
@import "./assets/css/style.css";
  // #app {
  //   -webkit-font-smoothing: antialiased;
  //   //-moz-osx-font-smoothing: grayscale;
  //   text-align: center;
  //   color: #2c3e50;
  // }
</style>
