import React from "react";
import {NavLink} from "react-router-dom";
import style from './NavMenu.module.css';
// import GoogleLogin from "react-google-login";
import {GoogleAPI,GoogleLogin} from 'react-google-oauth'
import FacebookLogin from 'react-facebook-login';
import {loginWithFacebook} from "../../../redux/reducers/authReducer";

const NavMenu = ({isAuth, me, logout, loginWithFacebook,loginFacebookUrl}) => {

    const onRes = (data) => {
        loginWithFacebook();
        console.log(data);
    }
    const onCl = (data)=>{
        loginFacebookUrl()
        // console.log(data);
    }

    return (
        <div>
            <NavLink to={'/'} exact>Головна</NavLink>
            <NavLink to={'/about-us'}>Про нас</NavLink>
            <NavLink to={'/our-services'}>Наші послуги</NavLink>
            <NavLink to={'/our-doctors'}>Наші лікарі</NavLink>
            <NavLink to={'/contacts'}>Контакти</NavLink>
            {
                !isAuth ?
                    <div>
                        <div>
                            <button><NavLink to={'/login'}>Увійти</NavLink></button>
                            {/*<button onClick={loginWithGoogle}>Увійти з гугл</button>*/}
                            <a href={'http://localhost:5000/auth/google'}>Увійти з гугл</a>
                            <a href={'http://localhost:5000/auth/facebook'}>Увійти з facebook</a>
                            {/*<GoogleAPI*/}
                            {/*    clientId="426897079068-knie738h207bd6sj4biq8129iem19kvf.apps.googleusercontent.com"*/}
                            {/*    onUpdateSigninStatus={onRes}*/}
                            {/*    onInitFailure={onRes}>*/}
                            {/*    <div><GoogleLogin/></div>*/}
                            {/*</GoogleAPI>*/}
                            <FacebookLogin
                                appId="3295493364010175"
                                // autoLoad={true}
                                fields="name,picture"
                                onClick={onCl}
                                callback={onRes} />
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