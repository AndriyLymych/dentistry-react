import React from "react";
import logo from '../../../assets/img/favicon.png'
import style from './Logo.module.css';


const Logo = ()=> {
    return(
        <div className={style.logoContainer}>
            <div className={style.logoSlogan}>
                <div>
                    <img src={logo} alt="logo"/>
                </div>
                <div className={style.logoSloganText}>Стоматологія<span className={style.logoSloganTextDot}>.</span></div>
            </div>
            <div className={style.logoDescription}>усе заради Вашої посмішки</div>
        </div>
    )
};

export default Logo