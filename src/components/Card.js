import React from 'react'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

export default class Card extends React.Component {
    static contextType = CurrentUserContext;
    // eslint-disable-next-line
    constructor(props) {
        super(props)
    }

    handleClick = () => {
        this.props.handleCardClick({
            link: this.props.card.link,
            title: this.props.card.name
        });
    }

    onCardLike = () => {
        this.props.onCardLike(this.props.card)
    }

    onCardDelete = () => {
        this.props.onCardDelete(this.props.card)
    }

    render() {
        this.isOwn = this.props.card.owner._id === this.context._id;
        this.cardDeleteButtonClassName = `${this.isOwn ? 'element__delete-button_visible' : 'element__delete-button_hidden'}`

        this.isLiked = this.props.card.likes.some(i => i._id === this.context._id);
        this.cardLikeButtonClassName = `${this.isLiked ? 'element__heart-button_theme_pushed' : ''}`; 
        return (
            <li className="elements__item element">
                <img src={this.props.card.link} alt={this.props.card.name} className="element__image" onClick={this.handleClick} />
                <p className="element__title">{this.props.card.name}</p>
                <div className="element__group">
                    <button onClick = {this.onCardLike} type="button" className={`element__heart-button ${this.cardLikeButtonClassName}`}></button>
                    <p className="element__likes">{this.props.card.likes.length}</p>
                </div>
                <button onClick={this.onCardDelete} type="button" className={`element__delete-button ${this.cardDeleteButtonClassName}`}></button>
            </li>
        )
    }
}