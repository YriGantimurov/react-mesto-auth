import PopupWithForm from './PopupWithForm'
import React from 'react'

export default function EditAvatarPopup(props) {
    const [link, setLink] = React.useState('')
    
    function handleChangeAvatar(e) {
        setLink(e.target.value)
    }


    function handleSubmit(e) {
        e.preventDefault()
        props.onUpdateAvatar(link)
        props.onClose()
    }

    return (
        <PopupWithForm title="Обновить аватар" onClose={props.onClose} isOpen={props.isOpen} name='new-avatar' onSubmit={handleSubmit}>
            <>
                <input value={link} onChange={handleChangeAvatar} type="url" id="new-avatar" required className="form__input form-new-avatar__input input input_type_avatar" name="url-input" placeholder="Ссылка на картинку" />
                <span id="new-avatar-error" className="form__input-error" />
                <button type="submit" className="form__submit-button form-new-avatar__submit-button">Сохранить</button>
            </>
        </PopupWithForm>
    )
}