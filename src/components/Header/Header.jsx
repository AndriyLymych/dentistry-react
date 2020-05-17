import React from "react";
import Logo from "./Logo/Logo";
import NavMenu from "./NavMenu/NavMenu";
import style from './Header.module.css'
const Header = () => {
    return (
        <header className={style.headerContainer}>
            <Logo/>
            <NavMenu/>
        </header>
    )
};

export default Header