<template>
    <div class="home">
        <section>
        <section class="head">
            <section class="hero-home">
                <div class="hero-overlay">
                    <p class="firstPart">votre plateforme de reporting et dataviz</p>
                   <img src="../assets/image/LOGO-BIG.svg" alt="logo">
                    <div class ="secondPart">
                        <p class="uppercase">démocratisez l'accès à vos données d'entreprise </p>
                        <div class="butn butn-blue butn-rounded">soyez les premiers !</div>
                    </div>

                    <div class = "social_network_head">
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
                    <div id="explore_div" class="uppercase arrounded">
                            <p id="explore">explore</p>   
                            <i class="fas fa-angle-down"></i>
                    </div>
                    <div class="tirdPart">
            
                       
                    </div>
                </div>
            </section>
            
        </section>
        <section>
                <div class="second-section">
                    <div class="here">
                        Voici WeAreData 
                    </div>
                    <div class="application uppercase">
                        Application de dataviz 
                        financière pour les PME
                    </div>
                    
                    <div class="lorem">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                    <section class="flex">
                        <div class="wrapper">
                           <img src="../assets/image/icon4.svg" alt="reporting-cealises">
                           <p class="inner-text">Vos reporting centralisés</p> 
                        </div>
                        <div class="wrapper">
                           <img src="../assets/image/icon3.svg" alt="suivi-de-vostivites">
                           <p class="inner-text">Le suivi de vos activités en temps réel</p> 
                        </div>
                        <div class="wrapper">
                           <img src="../assets/image/icon2.svg" alt="pilotage">
                           <p class="inner-text">Un gain de temps pour le pilotage</p> 
                        </div>
                        <div class="wrapper">
                           <img src="../assets/image/icon1.svg" alt="entreprise">
                            <p class="inner-text"> Des  utilitaires pour votre entreprise</p> 
                        </div>
                    </section>

                </div>
            </section>
    </section>
        <section>
            <div class="first-section">
                <div class="first-elem">
                    <div class="title uppercase">comment ça marche ?</div>
                    <div class="inner-elem">
                        Vos reporting d’entreprise
                        réuni sur une
                        seule application
                    </div>
                    <div class="normal-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.</div>
                </div>

                <div class="second-elem">
                    <div class="about-step">
                        <div class="number-wrapper">
                            <div class="number-circle">
                                <span class="number">1</span>
                            </div>
                        </div>
                        <div class="description-wrapper">
                            <h1 class="title-desc">Pluguer vos données</h1>
                            <p class="normal-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div class="about-step">
                        <div class="number-wrapper">
                            <div class="number-circle">
                                <span class="number">2</span>
                            </div>
                        </div>
                        <div class="description-wrapper">
                            <h1 class="title-desc">Laisser tourner notre application</h1>
                            <p class="normal-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div class="about-step">
                        <div class="number-wrapper">
                            <div class="number-circle">
                                <span class="number">3</span>
                            </div>
                        </div>
                        <div class="description-wrapper">
                            <h1 class="title-desc">Customiser vos reporting</h1>
                            <p class="normal-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>


<script>
    // @ is an alias to /src
    import { mapGetters } from 'vuex'
    export default {
        name: "home",
        computed: {
            ...mapGetters({ currentUser: 'currentUser' })
        },
        components: {},
    };
</script>
