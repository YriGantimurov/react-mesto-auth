import React from 'react'
export default class ImagePopup extends React.Component {
    constructor(props) {
        super(props)
        this.isOpen = ''
    }

componentWillMount() {
    this.props.card.isImagePopupOpen
        ? this.isOpen = 'popup_opened'
        : this.isOpen = ''
}

    componentDidUpdate() {
        this.props.card.isImagePopupOpen
        ? this.isOpen = 'popup_opened'
        : this.isOpen = ''
    }

    render() { 
        return (
            <div className={`popup popup-image ${this.isOpen}`} id="popup-image">
                <img src={this.props.card.src} alt="#" className="popup-image__image" />
                <button type="button" className="popup__close-button popup-image__close-button" onClick = {this.props.onClose}/>
                <p className="popup-image__image-title" />
            </div>
        )
    }
}