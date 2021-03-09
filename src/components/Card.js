import React from 'react'
export default class Card extends React.Component {
    constructor(props) {
        super(props)
    }

    handleClick = () => {
        this.props.handleCardClick(this.props.card.link);
    }  

    render() {
        return (
            <li className="elements__item element">
                <img src={this.props.card.link} alt="#" className="element__image" onClick = {this.handleClick}/>
                <p className="element__title">{this.props.card.name}</p>
                <div className="element__group">
                    <button type="button" className="element__heart-button"></button>
                    <p className="element__likes">{this.props.card.likes.length}</p>
                </div>
                <button type="button" className="element__delete-button"></button>
            </li>
        )
    }
}