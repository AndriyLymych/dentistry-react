import React from "react";
import {NavLink} from "react-router-dom";
import style from './NavMenu.module.css';

const NavMenu = ({isAuth, me, logout}) => {


    return (
        <div>
            <NavLink to={'/'} exact>Головна</NavLink>
            <NavLink to={'/about-us'}>Про нас</NavLink>
            <NavLink to={'/our-services'}>Наші послуги</NavLink>
            <NavLink to={'/our-doctors'}>Наші лікарі</NavLink>
            <NavLink to={'/reception-service'}>Запис на прийом</NavLink>
            <NavLink to={'/contacts'}>Контакти</NavLink>
            {
                !isAuth ?
                    <div>
                        <div>
                            <button><NavLink to={'/login'}>Увійти</NavLink></button>
                            <button><NavLink to={'/register'}>Реєстрація</NavLink></button>
                        </div>

                        <div>
                            <NavLink to={'/forgot-password'}><span>Забули пароль?</span></NavLink>
                        </div>
                    </div> :
                    <div>
                        <div>Вітаємо, {me.name} {me.middleName}</div>
                        <button><NavLink to={`/my-profile`}>Особистий кабінет</NavLink></button>
                        <button onClick={logout}>logaut</button>
                    </div>
            }
        </div>
    )
};

export default NavMenu