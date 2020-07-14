import React, {useState} from "react";
import {SendMailForRememberPasswordForm} from "../../basic/SendMailForRememberPasswordForm/SendMailForRememberPasswordForm";
import {reduxForm} from "redux-form";
import {Redirect} from "react-router-dom";
import Preloader from "../../basic/Preloader/Preloader";

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
            {
                !isSentMail ?
                    <div>
                        <h1>Введіть ваш емейл:</h1>
                        <SendMailForRememberPasswordReduxForm onSubmit={onSubmit} errorMessage={errorMessage}/>
                    </div> :

                    <h1>Повідомлення по зміні паролю надіслане на електронну адресу <i>{email}</i></h1>
            }

        </div>
    )
};

export default SendMailForRememberPassword;