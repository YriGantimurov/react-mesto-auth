import accept from '../images/accept.png'
import unaccept from '../images/unaccept.png'
import React from 'react'

export default class InfoTooltip extends React.Component {
    constructor(props) {
        super(props);
        this.isOpen = ''
    }

    render() {
        this.props.isOpen
            ? this.isOpen = 'popup_opened'
            : this.isOpen = ''
            return(<div className={`popup ${this.isOpen}`}>
            <div className="popup-tooltip">
                <img className="popup-tooltip__image" src={this.props.isAccept? accept :unaccept} alt={this.props.isAccept? 'accept' : 'unaccept'}/>
                <p className="popup-tooltip__title" > {this.props.isAccept? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так!'}</p>
            </div>
            <button type="button" className={`popup__close-button`} onClick={this.props.onClose} />
        </div>)
    }

}