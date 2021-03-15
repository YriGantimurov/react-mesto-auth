class Auth {
    constructor(options) {
        this._options = options
        this._key = this._options.headers.authorization;
        this._url = this._options.baseUrl
    }

    register(password, email) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: {
        authorization: this.key,
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "password": password,
        "email": email
      })
    })
    }
 
    login(password, email) {
        return fetch(`${this._url}/signin`, {
            method: 'POST',
            headers: {
              authorization: '903df890-7445-4454-b32e-ead2e8ee9036',
              "Accept": "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              "password": password,
              "email": email
            })
          })
    }

    authentification() {
        return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      }
    })
    }

}
const auth = new Auth({baseUrl: 'https://auth.nomoreparties.co',
headers: {
    authorization: '903df890-7445-4454-b32e-ead2e8ee9036',
    'Content-Type': 'application/json'
}})
export default auth