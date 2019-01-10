<template>

  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    
    
    <h1>Je suis le dev' le plus chaud du monde</h1>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>


<style lang="scss" scoped>
    h1{
      color: blue;
  }
</style>


<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
