import React from "react";
import {NavLink} from "react-router-dom";
import style from './NavMenu.module.css';

const NavMenu = ({isAuth, me, logout}) => {


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
                <NavLink className={style.menuItemLink} to={'/contacts'}>Контакти</NavLink>
            </li>
            {
                !isAuth ?
                    <div className={style.sign}>
                        <li className={style.menuItem}>
                            <button className={style.signBtn}>
                                <NavLink className={style.menuItemLink +' '+style.menuItemBtnLink} to={'/login'}>
                                    Увійти
                                </NavLink>

                            </button>
                        </li>


                        <li className={style.menuItem}>
                            <button className={style.signBtn}>
                                <NavLink className={style.menuItemLink + ' ' + style.menuItemBtnLink}
                                         to={'/register'}> Реєстрація </NavLink>
                            </button>
                        </li>

                    </div>
                    :
                    <div>
                        <button><NavLink className={style.menuItemLink} to={`/my-profile`}>Особистий кабінет</NavLink>
                        </button>
                        <button onClick={logout}>logaut</button>
                    </div>
            }
        </ul>
    )
};

export default NavMenu