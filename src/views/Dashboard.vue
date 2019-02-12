<template>
<div class="form-style-5">
    <form>
    <fieldset>
        <legend class="form-title">Importation des factures</legend>
        <input type="text" name="number" placeholder="Numéro de facture *">
        <input type="date" name="date" placeholder="Date de la facture *">
        <input type="text" name="name" placeholder="Nom du produit vendu *">
        <input type="number" name="totalHT" placeholder="Total ht *">
        <input type="number" name="totalTVA" placeholder="Taux de TVA *">
        <input type="number" name="totalTTC" placeholder="Taux de TVA *">
        <input type="text" name="workfield" placeholder="Secteur d’activité *">
        <input type="number" name="quantity" placeholder="Quantités vendues *">
        <input type="text" name="idClient" placeholder="Client *">
        <input type="text" name="salesCategory" placeholder="Catégorie de produits vendus *">
</fieldset>
<input type="submit" value="Apply" />
</form>
</div>
</template>





<script>
import { mapGetters } from 'vuex'

export default {
    name: "dashboard",
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
      if (!this.currentUser && this.$route.path !== '/') {
        this.$router.push('/?redirect=' + this.$route.path)
      }
    }
  }
};
</script>
