<template>

<div class="container">
    <section class="dashboard-cotainer">

        <div class="user-info">
            <div>
                <i class="fab fa-elementor"></i>
                Nombre de vos produits vendus au total : {{ totalSales[0].totalSalesQuantity }}
            </div>
            <div>
                <i class="fas fa-file-invoice-dollar"></i>
                Chiffre d ‘affaires total : {{ totalCA }}
                <b-table bordered hover dark :items="ca" :fields="fields">
                </b-table>
            </div>
            <div>
                <i class="fas fa-chart-line"></i>
                Courbe des ventes par mois :
            </div>
        </div>

        <div class="form-style-5">
          <form class="form-bill" @submit.prevent="newBill">
            <h2 class="form-login-heading">Ajouter une nouvelle facture</h2>
            <label for="inputnomProduit" class="sr-only">Nom du Produit</label>
            <input v-model="nomProduit" type="text" id="inputnomProduit" class="form-control" placeholder="nom Produit" required autofocus>

            <label for="inputtotalHT" class="sr-only">Total HT</label>
            <input v-model="totalHT" type="number" id="inputtotalHT" class="form-control" placeholder="totalHT" required>

            <label for="inputtotalTVA" class="sr-only">Total TVA</label>
            <input v-model="totalTVA" type="number" id="inputtotalTVA" class="form-control" placeholder="totalTVA" required>

            <label for="inputtotalTTC" class="sr-only">Total TTC</label>
            <input v-model="totalTTC" type="number" id="inputtotalTTC" class="form-control" placeholder="totalTTC" required>

            <label for="inputQuantity" class="sr-only">Quantité</label>
            <input v-model="quantity" type="number" id="inputQuantity" class="form-control" placeholder="Quantité" required>

            <label for="inputnomClient" class="sr-only">Nom du Client</label>
            <input v-model="nomClient" type="text" id="inputnomClient" class="form-control" placeholder="nom Client" required autofocus>

            <label for="inputSalesCategory" class="sr-only">Sales Category</label>
            <input v-model="salesCategory" type="text" id="inputSalesCategory" class="form-control" placeholder="salesCategory" required>

            <label for="inputWorkfield" class="sr-only">WorkField</label>
            <input v-model="workField" type="text" id="inputWorkfield" class="form-control" placeholder="workField" required>

            <button class="btn btn-lg btn-primary btn-block" type="submit">Nouvelle facture</button>
            <div class="alert alert-danger" v-if="error">{{ error }}</div>
          </form>
        </div>
    </section>

</div>
</template>


<script>

import { mapGetters } from 'vuex'

export default {
    name: "dashboard",
    data () {
      return {
        nomProduit: '',
        totalHT: '',
        totalTVA: '',
        totalTTC: '',
        quantity: '',
        nomClient: '',
        salesCategory: '',
        workField: '',
        error: false,
        search: '',
        totalSales: [],
        ca: [],
        totalCA : '',
        fields: [
          { key: '_id', label: 'Année', sortable: true, sortDirection: 'desc'},
          { key: 'grossSales', label: 'Chiffre d\'affaire', sortable: true, sortDirection: 'desc'}
        ]
      }
    },
    computed: {
    ...mapGetters({ currentUser: 'currentUser' })
},
created () {
  this.$http.get('/client/salesquantity')
      .then(request => { this.buildTotalSales(request.data) })
      .catch(() => { alert('Something went wrong!') }),

  this.$http.get('/client/grosssales')
      .then(request => { this.buildGrossSales(request.data) })
      .catch(() => { alert('Something went wrong!') })
},
methods: {
  buildTotalSales (data) {
    this.totalSales = data
  },

  buildGrossSales (data) {
    this.ca = data
    var compteur = 0
    this.ca.forEach(function(element) {
    compteur += element.grossSales
      console.log(compteur)
      })
      this.totalCA = compteur
  },

  newBill () {
      this.$http.post('/bill', { nameProduct: this.nomProduit, totalHT: this.totalHT, totalTVA: this.totalTVA,
                                  totalTTC: this.totalTTC, quantity: this.quantity, nomClient: this.nomClient, salesCategory: this.salesCategory,
                                  workfield: this.workField
                                  })
                                  .then(request => this.newBillSuccess())
                                  .catch(() => this.newBillFail())
  },

  newBillSuccess () {
  this.$router.go('/dashboard')
  },

  newBillFail () {
  this.error = 'signUp failed!'
  },
},
};
</script>
