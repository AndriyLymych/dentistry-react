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
            <div className={s.resetContainer}>
                {
                    !isResetPassword ?
                        <div className={s.resetInfoContainer}>

                         <div className={s.resetInfoWrapper}>
                             <div className={s.resetInfo}>
                                 <div className={s.resetTitle}>Зміна паролю:</div>
                                 <ResetPasswordReduxForm onSubmit={onSubmit} errorMessage={errorMessage}/>
                             </div>
                         </div>
                            <div className={s.imgWrapper}>
                                <div className={s.modalImg}/>
                            </div>


                        </div> :

                        <div className={s.successInfo}>
                            <p className={s.sentSuccess}>Пароль успішно змінено!</p>
                            <NavLink className={s.loginBtnLink} to={"/login"}>Авторизуватись</NavLink>
                        </div>

                }
            </div>
            <Footer/>
        </div>
    )


};

export default ResetPassword;