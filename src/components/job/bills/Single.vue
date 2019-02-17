<template>
  <div class="row">
    <b-table bordered responsive hover dark :items="bill" :fields="fields">
            <!-- <template slot="_id" slot-scope="data">
                <a :href="`/bills${data.value.replace(/[^a-z]+/i,'/').toLowerCase()}`">
                    {{data.value}}
                </a>
            </template> -->
        </b-table>
  </div>
</template>
<script>
import List from './List'
import { mapGetters } from 'vuex'
export default {
  name: 'Single',
  props: ['bills'],
  data () {
    return {
      bill: [],
      bills:[],
      fields: [
        { key: 'date', label: 'Date', sortable: true, sortDirection: 'desc'},
        // { key: 'idClient', label: 'Client', sortable: true, sortDirection: 'desc'},
        { key: 'nomClient', label: 'Client', sortable: true, sortDirection: 'desc'},
        { key: 'nameProduct', label: 'Product', sortable: true, sortDirection: 'desc'},
        { key: 'quantity', label: 'Quantity', sortable: true, sortDirection: 'desc'},
        { key: 'salesCategory', label: 'Category', sortable: true, sortDirection: 'desc'},
        { key: 'totalHT', label: 'Total HT', sortable: true, sortDirection: 'desc'},
        { key: 'totalTTC', label: 'Total TTC', sortable: true, sortDirection: 'desc'},
        { key: 'totalTVA', label: 'Total TVA', sortable: true, sortDirection: 'desc'},
        { key: 'workfield', label: 'Workfield', sortable: true, sortDirection: 'desc'},
        // { key: '_id', label: 'id', sortable: true, sortDirection: 'desc'},
        // { key: '__v', label: 'v', sortable: true, sortDirection: 'desc'},
        { key: 'actions', label: 'Actions' }
      ]
    }
  },
  computed: {
  ...mapGetters({ currentUser: 'currentUser' }),
  },
  created () {
    console.log($route.params._id);
     this.$http.get('/bill')
            .then(request => this.buildBillList(request.data))
            .catch(() => { alert('Something went wrong!') })
    this.$http.get(`/bill/${this.$route.params._id}`)
        .then(request => { this.bill = request.data })
        .catch(() => { alert('Something went wrong!') })
  },
  components: {
    List
  }

}
</script>
