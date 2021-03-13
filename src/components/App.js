import React from 'react'
import '../index.css'
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import PopupWithForm from './PopupWithForm.js'
import ImagePopup from './ImagePopup.js'
import api from '../utils/api.js'
import { CurrentUserContext } from '../contexts/CurrentUserContext'
import EditProfilePopup from './EditProfilePopup'
import EditAvatarPopup from './EditAvatarPopup'
import AddPlacePopup from './AddPlacePopup'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.popupFunctions = {
      onEditProfile: () => {
        this.setState({ isEditProfilePopupOpen: true })
      },

      onAddPlace: () => {
        this.setState({ isAddPlacePopupOpen: true })
      },

      onEditAvatar: () => {
        this.setState({ isEditAvatarPopupOpen: true })
      },

      closeAllpopups: () => {
        this.setState({
          isEditProfilePopupOpen: false,
          isAddPlacePopupOpen: false,
          isEditAvatarPopupOpen: false,
          isConfirmPopupOpen: false,
          selectedCard: {
            isImagePopupOpen: false,
            src: ''
          },
        })
      }
    }

    this.state = {
      cards: [],
      currentUser: {},
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
      isEditAvatarPopupOpen: false,
      isConfirmPopupOpen: false,
      selectedCard: {
        isImagePopupOpen: false,
        src: ''
      },
    }

    
  }

  componentDidMount() {
    api.getUserInformation()
      .then(info => this.setState({ currentUser: info}))
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      })
    api.getInitialCards()
      .then(getedCards => {
        this.setState({ cards: getedCards })
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      })
  }

  handleUpdateUser = (name, description) => {
    api.setUserInformation(name, description)
    .then(info => {
      this.setState({
        currentUser: info
      })
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });
  }

  handleUpdateAvatar = (link) => {
    api.setUserAvatar(link)
    .then(info => {
      this.setState({
        currentUser: info
      })
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });
  }

  handleCardDelete = (card) => {
      api.deleteCard(card._id)
      .then(() => {
        api.getInitialCards()
        .then(getedCards => {
          this.setState({ cards: getedCards })
        })
        .catch((err) => {
          console.log(err); // выведем ошибку в консоль
        })
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }

  handleCardLike= (card) => {
    const isLiked = card.likes.some(i => i._id === this.state.currentUser._id);

    if(isLiked) {
      api.unlike(card._id)
      .then(newCard => {
        this.setState({cards: this.state.cards.map(c => c._id === card._id ? newCard : c)})
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
      } else {
      api.like(card._id)
      .then(newCard => {
        this.setState({cards: this.state.cards.map(c => c._id === card._id ? newCard : c)})
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
    }
}

  handleCardClick = ({ link, title }) => {
    this.setState({
      selectedCard: {
        isImagePopupOpen: true,
        link: link,
        title: title
      }
    })
  }

  handleAddCard = (title, link) => {
    api.makeNewCard(title, link)
    .then(newCard => {
      this.setState({
          cards: [newCard, ...this.state.cards]
        })
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });
  }

  render() {
    return (
        <>
        <CurrentUserContext.Provider value = {this.state.currentUser}>
          <div className="page">
            <Header />
            <Main 
            onEditProfile={this.popupFunctions.onEditProfile} onAddPlace={this.popupFunctions.onAddPlace} onEditAvatar={this.popupFunctions.onEditAvatar} 
            cards = {this.state.cards} onCardDelete={this.handleCardDelete} handleCardClick={this.handleCardClick} onCardLike={this.handleCardLike}
            />
            <Footer />
            <AddPlacePopup onAddCard={this.handleAddCard} onClose={this.popupFunctions.closeAllpopups} name='new-place' isOpen={this.state.isAddPlacePopupOpen}/>
            <EditProfilePopup onUpdateUser = {this.handleUpdateUser} onClose={this.popupFunctions.closeAllpopups} isOpen={this.state.isEditProfilePopupOpen}/>
            <PopupWithForm onClose={this.popupFunctions.closeAllpopups} isOpen={this.state.isConfirmPopupOpen} name='confirm'>
              <>
                <h2 className="form__title form-confirm__title">Вы уверены?</h2>
                <button type="submit" className="form__submit-button form-confirm__submit-button">Да</button>
              </>
            </PopupWithForm>
            <EditAvatarPopup onUpdateAvatar = {this.handleUpdateAvatar} isOpen={this.state.isEditAvatarPopupOpen} onClose={this.popupFunctions.closeAllpopups} /> 
            <ImagePopup onClose={this.popupFunctions.closeAllpopups} card={this.state.selectedCard} />
          </div>
        </CurrentUserContext.Provider>
    </>
    )
  }
}

export default App;
