import React from "react";
import logo from '../../../assets/img/logo.png'
import logoText from '../../../assets/img/Сімстомат.png'
import style from './Logo.module.css';


const Logo = () => {
    return (
        <div>
            <div className={style.logoSlogan}>
                <div>
                    <img src={logo} alt="logo"/>
                </div>
                <div className={style.logoDescription}>
                    <img src={logoText} alt="name"/>
                </div>
            </div>
        </div>
    )
};

export default Logo