import logoSvg from '../images/logo.svg'; 
import { Link } from 'react-router-dom'
import React from'react'

export default function Header(props) {

    return (
      <header className="header">
        <img src={logoSvg} alt="Логотип" className="header__logo" />
        {props.isLoggedIn
        ? <>
        <p className="header__email">{props.currentEmail}</p>
        <Link to="/sign-in" className="header__status" onClick={props.onSignOut}>Выйти</Link>
        </>
        : <Link to="/sign-up" className="header__status" >Регистрация</Link>
      }
    </header>
    )
}