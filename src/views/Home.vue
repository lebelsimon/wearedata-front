<template>

  <div class="home">
  
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
