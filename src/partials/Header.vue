<template>
    <header>
        <div class="header">
            <section class="hero-home">
                <div class="hero-overlay">
                    <p id="prem">votre plateforme de reporting et dataviz</p>
                    <img src="../assets/LOGO-BIG.svg" alt="logo">
                    <div id ="deux">
                    <p class="uppercase">démocratisez l'accès à vos données d'entreprise </p>
                    <div class="arrounded">soyez les premiers !</div>
                    </div>
                    <div class="uppercase">
                        explore
                    </div>
                </div>
            </section>
        </div>
    </header>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
    .uppercase{
        text-transform: uppercase;
    }
    .heading {
        background-color: rgba(96,96,96,0.7);
    }
    .hero-home{
    height: 500px;
    background-image: url("../assets/bg-header.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    .hero-overlay{  
        width: 100%;
        height: 100%;
        background-color: rgba(96,96,96,0.7); 
    }
    #prem{
        position: absolute;
        top: 20%;
        left: 50%;
        color: white;
        transform: translate(-50%,-50%);
        padding:0px;
        font-size: 24px;
        letter-spacing: 3px;
    }
    img{
        position: absolute;
        top: 50%;
        left: 50%;
        color: white;
        transform: translate(-50%,-50%);
        padding:0px;
        font-size: 40px;
        letter-spacing: 3px;
        font-weight: 800;
        // animation: 2s textEffect alternate infinite;
    }

    #deux{
        position: absolute;
        top: 70%;
        left: 50%;
        color: white;
        transform: translate(-50%,-50%);
        padding:0px;
        font-size: 20px;
        letter-spacing: 3px;
        font-weight: 800;
        // animation: 2s textEffect alternate infinite;
    }

}

</style>






