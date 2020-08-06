import React from "react";
import logo from '../../../assets/img/logo.png'
import logoText from '../../../assets/img/Сімстомат.png'
import style from './Logo.module.css';

const Logo = () => {
    return (
        <div className={style.logoSlogan}>
                <img src={logo} alt="logo"/>
            <div className={style.logoDescription}>
                <img className={style.logoText}  src={logoText} alt="name"/>
            </div>
        </div>
    )
};

export default Logo