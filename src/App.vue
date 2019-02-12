<template>
  <div id="app">
    <!-- <div class="container"> -->
      <Header />
        <router-view />
      <Footer />
    </div>
  <!-- </div> -->

</template>

<script>
  import Header from "@/partials/Header.vue";
  import Footer from "@/partials/Footer.vue";
  export default {
    components: {
      Header,
      Footer
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
