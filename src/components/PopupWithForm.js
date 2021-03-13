import React from 'react'
export default class PopupWithForm extends React.Component { 
    constructor(props) {
        super(props);
        this.isOpen = ''
    }
    
    render() { 
        // eslint-disable-next-line
        {
            this.props.isOpen
            ? this.isOpen = 'popup_opened'
            : this.isOpen = ''
        }
        return (
            <div className={`popup popup_type_${this.props.name} ${this.isOpen} `} id={`popup-${this.props.name}`}>
                <form onSubmit={this.props.onSubmit} className={`form form-${this.props.name}" name="form-${this.props.name}`} id={`form-${this.props.name}`}>
                {this.props.children}
                </form>
            <button type="button" className={`popup__close-button popup-${this.props.name}__close-button`} onClick={this.props.onClose}/>
            </div>
        )
    }
}