<template>
  <div>
    <div class="page-header">
      <div class="float-right">
        <input type="text" name="search" v-model="search" placeholder="Search..." class="form-control">
      </div>
      <h1>All bills</h1>
    </div>
        <b-table bordered responsive hover dark :items="bills" :fields="fields" >
            <template slot="_id" slot-scope="data">
                <a :href="`/bills${data.value.replace(/[^a-z]+/i,'/').toLowerCase()}`">
                    {{data.value}}
                </a>
            </template>
            <template slot="actions"> 
              <button class="button is-small is-light">
                <b-icon icon="edit" size="is-small"></b-icon>
              </button>
              <button class="button is-small is-danger">
                <b-icon icon="delete" size="is-small"></b-icon>
              </button>
            </template>
        </b-table>
    <!-- <div class="row">
        <Box v-for="bill in bills" :key="bill.id" :bill="bill" v-show="searchMatch(bill.nameProduct)"></Box>
    </div> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'List',
  data () {
    return {
      search: '',
      bills: [],
      fields: [
        { key: 'date', label: 'Date', sortable: true, sortDirection: 'desc'},
        // { key: 'idClient', label: 'Client', sortable: true, sortDirection: 'desc'},
        { key: 'nomClient', label: 'Name', sortable: true, sortDirection: 'desc'},
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
    searchRegExp () {
      return new RegExp(`(.*)${this.search}(.*)`)
    }
  },
  created () {
    this.$http.get('/bill')
        .then(request => this.buildBillList(request.data))
        .catch(() => { alert('Something went wrong!') })
  },
  methods: {
    buildBillList (data) {
      this.bills = data
    },
    searchMatch (billNameProduct) {
      return billNameProduct.toLowerCase().match(this.searchRegExp)
    }
  },
  computed: {
    searchRegExp () {
      return new RegExp(`(.*)${this.search}(.*)`)
    }
  },
  components: {
  }
}
</script>