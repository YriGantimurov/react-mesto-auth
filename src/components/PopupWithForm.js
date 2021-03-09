import React from 'react'
export default class PopupWithForm extends React.Component { 
    constructor(props) {
        super(props);
        this.isOpen = ''
    }

    componentDidUpdate() {
        this.props.isOpen
        ? this.isOpen = 'popup_opened'
        : this.isOpen = ''
    }
    
    render() {
        return (
            <div className={`popup popup_type_${this.props.name} ${this.isOpen} `} id={`popup-${this.props.name}`}> {}
                {this.props.children}
            <button type="button" className={`popup__close-button popup-${this.props.name}__close-button`} onClick={this.props.onClose}/>
            </div>
        )
    }
}