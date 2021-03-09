import React from 'react'
import '../index.css'
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import PopupWithForm from './PopupWithForm.js'
import ImagePopup from './ImagePopup.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.popupFunctions = {
      onEditProfile: () => {
        this.setState({isEditProfilePopupOpen: true})
      },
  
      onAddPlace: () => {
        this.setState({isAddPlacePopupOpen: true})
      },
  
      onEditAvatar: () => {
        this.setState({isEditAvatarPopupOpen: true})      
      },

      closeAllpopups : () => 
      {this.setState({
        isEditProfilePopupOpen: false,
        isAddPlacePopupOpen: false,
        isEditAvatarPopupOpen: false,
        isConfirmPopupOpen: false,
        selectedCard: {
          isImagePopupOpen: false,
          src: ''
        },
      })}
    }

    this.handleCardClick = (src) => {
      console.log(src)
      this.setState({
        selectedCard: {
        isImagePopupOpen: true,
        src: src
      }})
    }

    this.state = {
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

  render() {
    return (
      <>
      <meta charSet="UTF-8" />
      <title>Место</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <div className="page">
      <Header />
      <Main handleCardClick = {this.handleCardClick} onEditProfile = {this.popupFunctions.onEditProfile} onAddPlace ={this.popupFunctions.onAddPlace} onEditAvatar = {this.popupFunctions.onEditAvatar}/>
      <Footer />
      <PopupWithForm onClose = {this.popupFunctions.closeAllpopups} name = 'new-place' isOpen = {this.state.isAddPlacePopupOpen}>
      <form className="form form-new-place" name="form-new-place" id="form-new-place">
          <h2 className="form__title form-new-place__title">Новое место</h2>
          <input id="title-input" required type="text" maxLength={30} className="form__input form-new-place__input input input_type_title" name="title-input" placeholder="Название" />
          <span id="title-input-error" className="form__input-error" />
          <input type="url" id="url-input" required className="form__input form-new-place__input input input_type_url" name="url-input" placeholder="Ссылка на картинку" />
          <span id="url-input-error" className="form__input-error" />
          <button type="submit" className="form__submit-button form-new-place__submit-button">Создать</button>
        </form>
      </PopupWithForm>
      <PopupWithForm onClose = {this.popupFunctions.closeAllpopups} isOpen = {this.state.isEditProfilePopupOpen} name = 'edit-profile'> 
      <form className="form form-edit-profile" name="form" id="form-edit-profile">
          <h2 className="form__title">Редактировать профиль</h2>
          <input id="name-input" required minLength={2} maxLength={40} type="text" className="form__input input input_type_name" name="name-input" placeholder="Имя" />
          <span id="name-input-error" className="form__input-error" />
          <input id="description-input" minLength={2} maxLength={200} required type="text" className="form__input input input_type_description" name="description-input" placeholder="О себе" />
          <span id="description-input-error" className="form__input-error" />
          <button type="submit" className="form__submit-button">Сохранить</button>
        </form>
      </PopupWithForm>
      <PopupWithForm onClose = {this.popupFunctions.closeAllpopups} isOpen = {this.state.isConfirmPopupOpen} name = 'confirm'>
      <form className="form form-confirm">
          <h2 className="form__title form-confirm__title">Вы уверены?</h2>
          <button type="submit" className="form__submit-button form-confirm__submit-button">Да</button>
        </form>
      </PopupWithForm>
      <PopupWithForm onClose = {this.popupFunctions.closeAllpopups} isOpen = {this.state.isEditAvatarPopupOpen} name = 'new-avatar'>
      <form className="form form-new-avatar" name="form-new-avatar" id="form-new-avatar">
          <h2 className="form__title form-new-avatar__title">Обновить аватар</h2>
          <input type="url" id="new-avatar" required className="form__input form-new-avatar__input input input_type_avatar" name="url-input" placeholder="Ссылка на картинку" />
          <span id="new-avatar-error" className="form__input-error" />
          <button type="submit" className="form__submit-button form-new-avatar__submit-button">Сохранить</button>
        </form>
      </PopupWithForm>
      <ImagePopup onClose = {this.popupFunctions.closeAllpopups} card = {this.state.selectedCard}/>
    
    
    
      </div>
      <div className="popup popup-image" id="popup-image">
        <img src="#" alt="#" className="popup-image__image" />
        <button type="button" className="popup__close-button popup-image__close-button" />
        <p className="popup-image__image-title" />
      </div>
    </>
    )
  }
}

export default App;
