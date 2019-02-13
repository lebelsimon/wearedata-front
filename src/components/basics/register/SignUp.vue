<template>
  <div class="login-wrapper border border-light">
    <form class="form-signin" @submit.prevent="signUp">
      <h2 class="form-signin-heading">Please sign in</h2>
      <label for="inputLogin" class="sr-only">Login</label>
      <input v-model="login" type="text" id="inputLogin" class="form-control" placeholder="Login" required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
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
      login: '',
      password: '',
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
        this.$http.post('/signUp', { login: this.login, password: this.password })
        .then(request => this.signUpSuccessful(request))
        .catch(() => this.signUpFail())
    },

    signUpSuccessful (req) {
    if (!req.data.token) {
        this.signUpFail()
        return
    }
    localStorage.token = req.data.token
    this.$store.dispatch('login')
    this.$router.replace(this.$route.query.redirect || '/dashboard')
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

.form-signin {
  max-width: 330px;
  padding: 10% 15px;
  margin: 0 auto;
}
.form-signin .form-signin-heading,
.form-signin .checkbox {
  margin-bottom: 10px;
}
.form-signin .checkbox {
  font-weight: normal;
}
.form-signin .form-control {
  position: relative;
  height: auto;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="text"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
</style>