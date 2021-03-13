import React from 'react'
import Card from './Card.js'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

export default class Main extends React.Component {
  static contextType = CurrentUserContext;
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <>
        <main className="main">
          <section className="profile">
            <img className="profile__avatar" src={this.context.avatar} alt="Аватар" />
            <div className="profile__avatar-overlay">
              <button type="button" className="profile__avatar-button" onClick={this.props.onEditAvatar} />
            </div>
            <div className="profile__info">
              <h1 className="profile__name">{this.context.name}</h1>
              <button type="button" className="profile__edit-button" onClick={this.props.onEditProfile} />
              <p className="profile__description">{this.context.about}</p>
            </div>
            <button type="button" className="profile__add-button" onClick={this.props.onAddPlace} />
          </section>
          <section className="elements-section">
          <ul className="elements">
            {
            this.props.cards.map((card) => (
              <Card onCardDelete={this.props.onCardDelete} onCardLike={this.props.onCardLike} card = {card} key={card._id} handleCardClick = {this.props.handleCardClick}/>
            )
            )}
          </ul>
          </section>
        </main>
      </>
    )
  }
}