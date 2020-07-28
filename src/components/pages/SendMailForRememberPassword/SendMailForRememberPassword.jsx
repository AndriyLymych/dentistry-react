import React, {useState} from "react";
import {SendMailForRememberPasswordForm} from "../../basic/SendMailForRememberPasswordForm/SendMailForRememberPasswordForm";
import {reduxForm} from "redux-form";
import {Redirect} from "react-router-dom";
import Preloader from "../../basic/Preloader/Preloader";
import style from '../Login/Login.module.css'
import s from './SendMailForRememberPassword.module.css'
import Footer from "../../basic/Footer/Footer";

const SendMailForRememberPasswordReduxForm = reduxForm({
    form: 'refresh-password'
})(SendMailForRememberPasswordForm);


const SendMailForRememberPassword = ({isAuth, isSentMail, isLoading, errorMessage, sendEmailForChangeForgotPassword}) => {

    const [email, setEmail] = useState(null);

    const onSubmit = data => {

        sendEmailForChangeForgotPassword(data);
        setEmail(data.email);
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
                    !isSentMail ?
                        <div className={style.loginInfoContainer}>

                            <div className={s.loginInfo}>
                                <div className={style.loginTitle + ' ' + s.loginTitle}>Введіть ваш емейл:</div>
                                <SendMailForRememberPasswordReduxForm onSubmit={onSubmit} errorMessage={errorMessage}/>
                            </div>
                            <div className={style.modalImg}/>


                        </div> :

                        <div className={s.sentSuccess}>Повідомлення по зміні паролю надіслане на електронну
                            адресу <i>{email}</i></div>
                }


            </div>
            <Footer/>
        </div>
    )
};

export default SendMailForRememberPassword;