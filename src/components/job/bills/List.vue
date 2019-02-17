<template>
  <div>
    <div class="page-header">
      <div class="float-right">
        <input type="text" name="search" v-model="search" placeholder="Search..." class="form-control">
      </div>
      <h1>All bills</h1>
      {{currentUser.id}}
    </div>
        <b-table bordered responsive hover dark :items="bills" >
            <template slot="_id" slot-scope="data">
                <a :href="`/bills${data.value.replace(/[^a-z]+/i,'/').toLowerCase()}`">
                    {{data.value}}
                </a>
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
      bills: []
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