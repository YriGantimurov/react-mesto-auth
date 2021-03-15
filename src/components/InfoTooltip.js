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

        if (this.props.isAccept) {
            return(<div className={`popup ${this.isOpen}`}>
            <div className="popup-tooltip">
                <img className="popup-tooltip__image" src={accept} />
                <p className="popup-tooltip__title" >Вы успешно зарегистрировались!</p>
            </div>
            <button type="button" className={`popup__close-button`} onClick={this.props.onClose} />
        </div>)
        } else{
            return (
                <div className={`popup ${this.isOpen}`}>
                    <div className="popup-tooltip">
                        <img className="popup-tooltip__image" src={unaccept} />
                        <p className="popup-tooltip__title" >Что-то пошло не так!
    Попробуйте ещё раз.</p>
                    </div>
                    <button type="button" className={`popup__close-button`} onClick={this.props.onClose} />
                </div>
            )
        }
    }

}

// function InfoTooltip(props) {

//     if (props.isOpen) {
//         const isOpen = 'popup_opened'
//     } {
//         const isOpen = ''
//     }

//     return(
//         // <div className="popup popup_opened">
//         //     <div className="popup-tooltip">
//         //     <img className="popup-tooltip__image" src={accept}/>
//         //     <p className="popup-tooltip__title" >Вы успешно зарегистрировались!</p>
//         //     </div>
//         //     <button type="button" className={`popup__close-button`} onClick={''}/>
//         // </div>
//         <div className={`popup ${isOpen}`}>
//             <div className="popup-tooltip">
//             <img className="popup-tooltip__image" src={unaccept}/>
//             <p className="popup-tooltip__title" >Что-то пошло не так!
// Попробуйте ещё раз.</p>
//             </div>
//             <button type="button" className={`popup__close-button`} onClick={props.onClose}/>
//         </div>
//     )
// }