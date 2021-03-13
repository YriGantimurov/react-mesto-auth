import React from 'react'
import { CurrentUserContext } from '../contexts/CurrentUserContext'
import PopupWithForm from './PopupWithForm'

export default function EditProfilePopup(props) {
    const [name, setName] = React.useState('')
    const [description, setDescription] = React.useState('')
    const currentUser = React.useContext(CurrentUserContext)

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);


    function handleNameInputChange(e) {
        e.preventDefault();
        setName(e.target.value)
    }

    function handleDescriptionInputChange(e) {
        e.preventDefault();
        setDescription(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateUser(name, description);
        props.onClose()
    }

    return (
    <>
        <PopupWithForm isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
            <>
            <h2 className="form__title">Редактировать профиль</h2>
            <input value={name} onChange={handleNameInputChange} id="name-input" required minLength={2} maxLength={40} type="text" 
            className="form__input input input_type_name" name="name-input" placeholder="Имя"/>
            <span id="name-input-error" className="form__input-error" />
            <input value={description} onChange={handleDescriptionInputChange} id="description-input" minLength={2} maxLength={200} required type="text" 
            className="form__input input input_type_description" name="description-input" placeholder="О себе"/>
            <span id="description-input-error" className="form__input-error" />
            <button type="submit" className="form__submit-button">Сохранить</button>
            </>
        </PopupWithForm>
    </>
    )
}
