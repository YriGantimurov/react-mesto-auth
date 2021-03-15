class Api {
    constructor(options) {
        this._options = options;
        this._key = this._options.headers.authorization;
        this._url = this._options.baseUrl
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }

    getInitialCards() {
        return fetch(`${this._url}/cards`, {
            headers: {
                authorization: this._key
            }
        })
        .then(this._checkResponse) 
    }

    getUserInformation() {
        return fetch(`${this._url}/users/me`, {
            headers: {
                authorization: this._key
            }
        })
           .then(this._checkResponse)
    }

    setUserInformation(newName, newAbout) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization:  this._key,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: newName,
                about: newAbout
            })
        })
       .then(this._checkResponse)
    }

    makeNewCard(newName, newLink) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: {
                authorization: this._key,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: newName,
                link: newLink
            })
        })
       .then(this._checkResponse)
    }

    deleteCard(cardID) {
        return fetch(`${this._url}/cards/${cardID}`, {
            method: 'DELETE',
            headers: {
                authorization: this._key,
                'Content-Type': 'application/json'
            }
        })
       .then(this._checkResponse)
    }

    like(cardId){
        return fetch(`${this._url}/cards/likes/${cardId}`, {
            method: 'PUT',
            headers: {
                authorization: this._key,
            },
        })
       .then(this._checkResponse)
    }

    unlike(cardId) {
        return fetch(`${this._url}/cards/likes/${cardId}`, {
            method: 'DELETE',
            headers: {
                authorization: this._key,
            },
        })
       .then(this._checkResponse)
    }

    setUserAvatar(link) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                authorization:  this._key,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: link,
            })
        })
       .then(this._checkResponse)
    }

}

const api = new Api({baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-19',
headers: {
    authorization: '903df890-7445-4454-b32e-ead2e8ee9036',
    'Content-Type': 'application/json'
}})

export default api