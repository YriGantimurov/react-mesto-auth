import React from 'react'

export default function Register (props) {
    const[email, setEmail] = React.useState('')
    const[password, setPassword] = React.useState('')

    function handleEmailChange(e) {
        setEmail(e.target.value)
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.onRegister(password, email)
    }


    return(
        <form onSubmit={handleSubmit} className ="form form-auth" >
        <h2 className="form__title form-auth__title" >Регистрация</h2>
        <input value={email} onChange={handleEmailChange} className = "form__input input form-auth__input" required type="email" id="email-input" name="email-input" placeholder="Email"/>
        <input value={password} onChange={handlePasswordChange} minLength={4} maxLength={20} className = "form__input input form-auth__input" required type="password" id="password-input" name="password-input" placeholder="Password"/>
        <button type="submit" className="form__submit-button form-auth__submit-button">Зарегистрироваться</button>
        </form>
    )
}