import React from "react";
import Logo from "../Logo/Logo";
import NavMenu from "../NavMenu/NavMenu";
import style from './Header.module.css'

const Header = ({isAuth, me, logout, loginWithFacebook, loginFacebookUrl,loginWithGoogle}) => {

    return (
        <header className={style.headerContainer}>
            <Logo/>
            <NavMenu isAuth={isAuth} me={me} logout={logout} loginWithFacebook={loginWithFacebook}
                     loginFacebookUrl={loginFacebookUrl} loginWithGoogle={loginWithGoogle}/>
        </header>
    )
};

export default Header