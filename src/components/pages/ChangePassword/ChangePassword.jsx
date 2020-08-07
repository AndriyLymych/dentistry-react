import React from "react";
import {ChangePasswordForm} from "../../basic/ChangePasswordForm/ChangePasswordForm";
import {reduxForm} from "redux-form";
import Preloader from "../../basic/Preloader/Preloader";
import style from './ChangePassword.module.css'
import passImg from '../../../assets/img/changePass.png';

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
                    <div className={style.changePasswordContainer}>
                        <div className={style.changePasswordInfo}>
                            <div className={style.changePasswordTitle}>Змінити пароль:</div>
                            <ChangePasswordReduxForm onSubmit={onSubmit} errorMessage={errorMessage}/>
                        </div>
                        <img className={style.passImg} src={passImg} alt=""/>
                    </div> :
                    <div className={style.changePasswordContainer}>
                        <div className={style.success}>Пароль успішно змінено</div>

                    </div>
            }
        </div>
    )
};

export default ChangePassword;