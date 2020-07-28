import React from "react";
import {reduxForm} from "redux-form";
import {NavLink, Redirect} from "react-router-dom";
import {ResetPasswordForm} from "../../basic/ResetPasswordForm/ResetPasswordForm";
import Preloader from "../../basic/Preloader/Preloader";
import style from "../Login/Login.module.css";
import s from './ResetPassword.module.css'
import styleSuccess from '../SendMailForRememberPassword/SendMailForRememberPassword.module.css';
import Footer from "../../basic/Footer/Footer";

const ResetPasswordReduxForm = reduxForm({
    form: 'reset-password'
})(ResetPasswordForm);


const ResetPassword = ({isAuth, isResetPassword, isLoading, errorMessage, match, resetUserPassword}) => {

    const onSubmit = data => {
        const token = match.params.token;
        resetUserPassword(data, token);
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
                {
                    !isResetPassword ?
                        <div className={style.loginInfoContainer}>

                            <div className={s.resetInfo}>
                                <div className={s.resetTitle}>Зміна паролю:</div>
                                <ResetPasswordReduxForm onSubmit={onSubmit} errorMessage={errorMessage}/>
                            </div>
                            <div className={style.modalImg}/>

                        </div> :

                        <div>
                            <p style={styleSuccess.sentSuccess}>Пароль успішно змінено!</p>
                            <NavLink to={"/login"}>Авторизуватись</NavLink>
                        </div>

                }
            </div>
            <Footer/>
        </div>
    )


};

export default ResetPassword;