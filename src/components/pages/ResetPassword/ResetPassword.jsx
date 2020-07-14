import React from "react";
import {reduxForm} from "redux-form";
import {NavLink, Redirect} from "react-router-dom";
import {ResetPasswordForm} from "../../basic/ResetPasswordForm/ResetPasswordForm";
import Preloader from "../../basic/Preloader/Preloader";

const ResetPasswordReduxForm = reduxForm({
    form: 'reset-password'
})(ResetPasswordForm);


const ResetPassword = ({isAuth, isResetPassword, isLoading, errorMessage,match,resetUserPassword}) => {

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
            {
                !isResetPassword ?
                    <div>
                        <h1>Зміна паролю:</h1>
                        <ResetPasswordReduxForm onSubmit={onSubmit} errorMessage={errorMessage}/>
                    </div> :

                    <div>
                        <p>Пароль успішно змінено!</p>
                        <button><NavLink to={"/login"}>Авторизуватись</NavLink></button>
                    </div>

            }
        </div>
    )


};

export default ResetPassword;