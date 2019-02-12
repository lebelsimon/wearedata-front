export default {
    name: 'Login',
    data () {
      return {
        email: '',
        password: '',
        error: false
      }
    },
    methods: {
      login () {
          this.$http.post('/auth', { user: this.email, password: this.password })
          .then(request => this.loginSuccessful(request))
          .catch(() => this.loginFailed())
      },
  
      loginSuccessful (req) {
      if (!req.data.token) {
          this.loginFailed()
          return
      }
  
      localStorage.token = req.data.token
      this.error = false
  
      this.$router.replace(this.$route.query.redirect || '/dashboard')
      },
  
      loginFailed () {
      this.error = 'Login failed!'
      delete localStorage.token
      }
    }
  }