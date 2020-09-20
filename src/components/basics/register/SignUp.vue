<template>
  <div class="login-wrapper border border-light">
    <form class="form-login" @submit.prevent="signUp">
      <h2 class="form-login-heading">Please register</h2>
      <label for="inputName" class="sr-only">Name</label>
      <input v-model="name" type="text" id="inputName" class="form-control" placeholder="Name" required autofocus>

      <label for="inputFirstName" class="sr-only">First name</label>
      <input v-model="firstName" type="text" id="inputFirstName" class="form-control" placeholder="FirstName" required>

      <label for="inputCompany" class="sr-only">Company</label>
      <input v-model="company" type="text" id="inputCompany" class="form-control" placeholder="Company" required>

      <label for="inputSiret" class="sr-only">Siret</label>
      <input v-model="siret" type="number" id="inputSiret" class="form-control" placeholder="Siret" required>

      <label for="inputEmail" class="sr-only">Email</label>
      <input v-model="email" type="email" id="inputEmail" class="form-control" placeholder="Email" required>

      <label for="inputTelephone" class="sr-only">First name</label>
      <input v-model="telephone" type="text" id="inputTelephone" class="form-control" placeholder="Telephone" required>      

      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
      <div class="alert alert-danger" v-if="error">{{ error }}</div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SignUp',
  data () {
    return {
      name: '', 
      firstName: '', 
      company: '', 
      siret: '', 
      email: '',
      telephone: '',
      error: false
    }
  },
  created () {
    this.checkCurrentLogin()
  },
  updated () {
      this.checkCurrentLogin()
  },
  methods: {
    checkCurrentLogin () {
        if (this.currentUser) {
            console.log(this.currentUser)
            this.$router.replace(this.$route.query.redirect || '/dashboard')
        }
    },
    
    signUp () {
        this.$http.post('/signUp', { name: this.name, firstName: this.firstName, company: this.company,
                                    siret: this.siret, email: this.email, telephone: this.telephone,
                                    })
        .then(request => this.signUpSuccessful(request))
        .catch(() => this.signUpFail())
    },

    signUpSuccessful (req) {
      console.log(req)
    this.$router.replace(this.$route.query.redirect || '/login')
    },

    signUpFail () {
    this.error = 'signUp failed!'
    this.$store.dispatch('logout')
    delete localStorage.token
    },
  },
  computed: {
    ...mapGetters({ currentUser: 'currentUser' })
  },
}
</script>

<style lang="css">
body {
  background: #605B56;
}

.login-wrapper {
  animation: fadein 0.6s;
  background: #fff;
  width: 70%;
  margin: 12% auto;
}

.form-login {
  max-width: 330px;
  padding: 10% 15px;
  margin: 0 auto;
}
.form-login .form-login-heading,
.form-login .checkbox {
  margin-bottom: 10px;
}
.form-login .checkbox {
  font-weight: normal;
}
.form-login .form-control {
  position: relative;
  height: auto;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  padding: 10px;
  font-size: 16px;
}
.form-login .form-control:focus {
  z-index: 2;
}
.form-login input[type="text"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-login input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
</style>