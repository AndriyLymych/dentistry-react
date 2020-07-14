import React from "react";
import {LoginForm} from "../../basic/LoginForm/LoginForm";
import {reduxForm} from "redux-form";
import {NavLink, Redirect} from "react-router-dom";
import Preloader from "../../basic/Preloader/Preloader";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import style from "../../basic/NavMenu/NavMenu.module.css";

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);


const Login = ({isAuth, isLoading, errorMessage,match,login,loginAdmin,loginWithFacebook,loginWithGoogle}) => {
    const onRes = (data) => {
        loginWithFacebook();
        console.log(data);
    };
    const withGoogle = () => {
        loginWithGoogle()
    };
    const onSubmit = data => {

        if (match.path === '/login') {
            login(data.email, data.password)
        }

        if (match.path === '/auth/admin') {
            loginAdmin(data.email, data.password)
        }
    };

    if (isAuth) {
        return <Redirect to={`/`}/>
    }
    if (isLoading) {
        return <Preloader/>
    }


    return (
        <div>
            <h1>Увійти:</h1>
            <LoginReduxForm onSubmit={onSubmit} errorMessage={errorMessage}/>
            <a href={'http://localhost:5000/auth/google'}>Увійти з гугл</a>
            <a href={'http://localhost:5000/auth/facebook'}>Увійти з facebook</a>
            <li className={style.menuForgot + ' ' + style.itemLine}>
                <NavLink className={style.menuItemLink} to={'/forgot-password'}>Забули пароль?</NavLink>
            </li>
            <GoogleLogin
                clientId="426897079068-knie738h207bd6sj4biq8129iem19kvf.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={withGoogle}
                onFailure={withGoogle}
            >
            </GoogleLogin>
            <FacebookLogin
                appId="3295493364010175"
                // autoLoad={true}
                fields="name,picture"
                // onClick={onCl}
                callback={onRes}/>
        </div>
    )


};

export default Login;