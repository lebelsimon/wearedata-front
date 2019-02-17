import JwtDecode from 'jwt-decode'

export default class User {
  static from (token) {
    try {
      let obj = JwtDecode(token)
      return new User(obj)
    } catch (_) {
      return null
    }
  }

  constructor ({ id, name, firstName, company, siret, email, 
                telephone, company_adress,company_citycode,company_city,
                website, login, created, version
              }) {
    this.id = id // eslint-disable-line camelcase
    this.name = name
    this.firstName = firstName
    this.company = company
    this.siret = siret
    this.email = email
    this.telephone = telephone
    this.company_adress = company_adress
    this.company_citycode = company_citycode
    this.company_city = company_city
    this.website = website
    this.login = login
    this.created = created
    this.version = version
  }

  // get isAdmin () {
  //   return this.admin
  // }
}