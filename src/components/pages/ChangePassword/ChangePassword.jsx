import React from "react";
import {ChangePasswordForm} from "../../basic/ChangePasswordForm/ChangePasswordForm";
import {reduxForm} from "redux-form";
import Preloader from "../../basic/Preloader/Preloader";

const ChangePasswordReduxForm = reduxForm({
    form: 'change-password'
})(ChangePasswordForm);

const ChangePassword = ({isPasswordChanged, isLoading, errorMessage, changeUserPassword}) => {

    if (isLoading) {
        return <Preloader/>
    }

    const onSubmit = data => {

        changeUserPassword(data)
    };

    return (
        <div>
            {
                !isPasswordChanged ?
                    <ChangePasswordReduxForm onSubmit={onSubmit} errorMessage={errorMessage}/> :
                    <h1>пароль успышно змінено</h1>
            }
        </div>
    )
};

export default ChangePassword;