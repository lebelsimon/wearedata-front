<template>
    <footer>
        <div class="logo-footer">
            <router-link to="/"><img class="logo" src="../assets/image/LOGO-BIG.svg" alt="logo-footer"></router-link>
        </div>
       
        <p class="copyright">copyright 2019</p>

         <div class = "social_network">
             <div class="social_item">
                 <i class="fab fa-facebook-f elmt"></i>
             </div>
             
             <div class="social_item">
                 <i class="fab fa-twitter elmt"></i>
             </div>

             <div class="social_item">
                 <i class="fab fa-linkedin-in elmt"></i>
             </div>

         </div>
    </footer>
</template>
<script>
export default {
  name: 'Footer'
}
</script>