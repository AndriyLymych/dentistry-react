import React from "react";
import {LoginForm} from "../../basic/LoginForm/LoginForm";
import {reduxForm} from "redux-form";
import {NavLink, Redirect} from "react-router-dom";
import Preloader from "../../basic/Preloader/Preloader";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import style from "./Login.module.css";
import signGoogle from '../../../assets/img/Google__G__Logo.png'
import signFacebook from '../../../assets/img/Facebook_F_icon.png'
import Footer from "../../basic/Footer/Footer";

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);


const Login = ({isAuth, isLoading, errorMessage, match, login, loginAdmin, loginWithFacebook, loginWithGoogle, adminErrorMessage}) => {
    // const onRes = (data) => {
    //     loginWithFacebook();
    // };
    // const withGoogle = () => {
    //     loginWithGoogle()
    // };
    const onSubmit = data => {

        if (match.path === '/login') {
            login(data.email, data.password)
        }

        if (match.path === '/auth-admin') {
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
            <div className={style.loginContainer}>
                <div className={style.loginInfoContainer}>
                    <div className={style.loginInfo}>
                        <div className={style.loginTitle}>УВІЙТИ</div>
                        <div className={style.withText}>через</div>
                        <div className={style.signWithContainer}>
                            <a className={style.signWith} href={'http://localhost:5000/auth/google'}>
                                <div className={style.signGoogle}>
                                    <img src={signGoogle} alt=""/>
                                </div>
                            </a>
                            <a className={style.signWith} href={'http://localhost:5000/auth/facebook'}>
                                <div className={style.signFacebook}>
                                    <img src={signFacebook} alt=""/>
                                </div>
                            </a>
                        </div>
                        <div className={style.withText}>
                            або
                        </div>
                        <LoginReduxForm onSubmit={onSubmit} errorMessage={errorMessage} adminErrorMessage={adminErrorMessage}/>


                        <NavLink className={style.menuItemLink} to={'/forgot-password'}>Забули пароль?</NavLink>
                    </div>
                    <div className={style.modalImg}/>
                </div>

            </div>
            <Footer/>
        </div>
    )


};

export default Login;