<template>
   <div class="nav-bar">
            <router-link to="/"><a><img class="logo" src="../assets/image/LOGO-BIG.svg" alt="logo"></a></router-link>
       
        <ul class="navigation">
            <router-link to="/login"><li><a>Connexion</a></li></router-link>
            <router-link to="/signup"><li><a>Inscription</a></li></router-link>
        </ul>
   </div>


</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">
</style>






