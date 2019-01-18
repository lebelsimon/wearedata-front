<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>

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
  // #app{
    
  // }
    html { 
    background: url("./assets/home/bg-header.png") no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-color: #5f697a !important;
  }

  // #nav {
  //   padding: 30px;

  //   a {
  //     font-weight: bold;
  //     color: #2c3e50;

  //     &.router-link-exact-active {
  //       color: #42b983;
  //     }
  //   }
  // }
</style>
