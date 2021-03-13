import React from 'react'
import PopupWithForm from './PopupWithForm'

export default function AddPlacePopup(props) {
    const [title, setTitle] = React.useState('')
    const [link, setLink] = React.useState('')

    function handleChangeTitle(e) {
        setTitle(e.target.value)
    }

    function handleChangeLink(e) {
        setLink(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onAddCard(title, link);
        props.onClose();
        setLink('')
        setTitle('')
    }

    return(
        <PopupWithForm onClose={props.onClose} name='new-place' isOpen={props.isOpen} onSubmit={handleSubmit}>
              <>
                <h2 className="form__title form-new-place__title">Новое место</h2>
                <input onChange={handleChangeTitle} id="title-input" required type="text" maxLength={30} className="form__input form-new-place__input input input_type_title" name="title-input" placeholder="Название" />
                <span id="title-input-error" className="form__input-error" />
                <input onChange={handleChangeLink} type="url" id="url-input" required className="form__input form-new-place__input input input_type_url" name="url-input" placeholder="Ссылка на картинку" />
                <span id="url-input-error" className="form__input-error" />
                <button type="submit" className="form__submit-button form-new-place__submit-button">Создать</button>
              </>
            </PopupWithForm>
    )
}