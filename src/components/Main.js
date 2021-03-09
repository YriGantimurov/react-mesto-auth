import avatarJpg from '../images/avatar.jpg'
import React from 'react'
import api from '../utils/Api';
import Card from './Card.js'

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      about: '',
      avatar: '',
      cards: []
    }
    this.api = api
  }

  getInformation = () => {
    this.api.getUserInformation()
      .then(information => {
        this.setState(
          {name: information.name,
          about: information.about,
          avatar: information.avatar,})
      })
      .catch((err) => {
        console.log(err);
      })
  }

  getInitialCards = () => {
    this.api.getInitialCards()
      .then(getedCards => {
        this.setState({ cards: getedCards }).call(Main)
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      })
  }

  setInitialCards = () => {
    listItems = this.cards.forEach((card, i) => {
      a = <li className="elements__item element" key={card._id}>
        <img src={card.link} alt="#" className="element__image" />
        <p className="element__title">{card.name}</p>
        <div className="element__group">
          <button type="button" className="element__heart-button"></button>
          <p className="element__likes"></p>
        </div>
        <button type="button" className="element__delete-button"></button>
      </li>
    })
    return <ul className="elements">{listItems}</ul>
  }

  componentDidMount() {
    this.getInformation()
    this.getInitialCards()
  }
  render() {
    return (
      <>
        <main className="main">
          <section className="profile">
            <img className="profile__avatar" src={this.state.avatar} alt="Аватар" />
            <div className="profile__avatar-overlay">
              <button type="button" className="profile__avatar-button" onClick={this.props.onEditAvatar} />
            </div>
            <div className="profile__info">
              <h1 className="profile__name">{this.state.name}</h1>
              <button type="button" className="profile__edit-button" onClick={this.props.onEditProfile} />
              <p className="profile__description">{this.state.about}</p>
            </div>
            <button type="button" className="profile__add-button" onClick={this.props.onAddPlace} />
          </section>
          <section className="elements-section">
          <ul className="elements">
            {
            this.state.cards.map((card) => (
              <Card card = {card} key={card._id} handleCardClick = {this.props.handleCardClick}/>
            )
            )}
          </ul>
          </section>
        </main>
      </>
    )
  }
}