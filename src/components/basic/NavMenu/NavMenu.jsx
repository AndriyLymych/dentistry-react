import React from "react";
import {NavLink} from "react-router-dom";
import style from './NavMenu.module.css';

const NavMenu = ({isAuth, logout}) => {


    return (
        <ul className={style.menu}>
            <li className={style.menuItem + ' ' + style.itemLine}>
                <NavLink className={style.menuItemLink} to={'/'} exact>Головна</NavLink>
            </li>
            <li className={style.menuItem + ' ' + style.itemLine}>
                <NavLink className={style.menuItemLink} to={'/about-us'}>Про нас</NavLink>
            </li>
            <li className={style.menuItem + ' ' + style.itemLine}>
                <NavLink className={style.menuItemLink} to={'/our-services'}>Наші послуги</NavLink>
            </li>
            <li className={style.menuItem + ' ' + style.itemLine}>
                <NavLink className={style.menuItemLink} to={'/our-doctors'}>Наші лікарі</NavLink>
            </li>
            <li className={style.menuItem + ' ' + style.itemLine}>
                <a href={"#contacts"} className={style.menuItemLink}>Контакти</a>
            </li>
            {
                !isAuth ?
                    <div className={style.sign}>
                        <li className={style.menuItem}>

                            <NavLink className={style.menuItemBtnLink} to={'/login'}>
                                Увійти
                            </NavLink>

                        </li>


                        <li className={style.menuItem}>
                            <NavLink className={style.menuItemBtnLink}
                                     to={'/register'}> Реєстрація </NavLink>
                        </li>

                    </div>
                    :
                    <div>
                        <button><NavLink className={style.menuItemProfile} to={`/my-profile`}>Особистий
                            кабінет</NavLink>
                        </button>
                        <button className={style.menuItemProfile} onClick={logout}>logaut</button>

                    </div>
            }
        </ul>
    )
};

export default NavMenu