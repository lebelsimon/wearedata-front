<template>
   <div class="nav-bar">
            <div class="logo-h">
              <router-link to="/"><a><img class="logo-img" src="../assets/image/LOGO-BIG.svg" alt="logo"></a></router-link>
            </div>
            
        <ul class="navigation">
            <router-link to="/login"><li><a>Connexion</a></li></router-link>
            <div class="signup-ancre"><li><a href="#signup-form">Inscription</a></li></div>
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






