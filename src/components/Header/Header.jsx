import React from "react";
import Logo from "./Logo/Logo";
import NavMenu from "./NavMenu/NavMenu";
import style from './Header.module.css'
import Preloader from "../Preloader/Preloader";

const Header = ({isAuth, me, logout,loginWithFacebook,loginFacebookUrl}) => {

    return (
        <header className={style.headerContainer}>
            <Logo/>
            <NavMenu isAuth={isAuth} me={me} logout={logout} loginWithFacebook={loginWithFacebook} loginFacebookUrl={loginFacebookUrl}/>
        </header>
    )
};

export default Header