import React from "react";
import {Field} from 'redux-form'
import {InputCreator} from "../../../helpers/FormCreator/FormCreator";
import {minLengthValidator, passwordValidator, requiredValidator} from "../../../validators/validators";
import style from "../LoginForm/LoginForm.module.css";

const minPasswordLength = minLengthValidator(8);

export const ResetPasswordForm = props => {

    return (
        <form className={style.loginForm} onSubmit={props.handleSubmit}>
            <div className={style.loginFormInfo}>
                <div className={style.label}>Введіть новий пароль <span className={style.requiredStar}>*</span> :</div>
                <Field
                    name={"newPassword"}
                    component={InputCreator}
                    placeholder={"Введіть новий пароль..."}
                    autoFocus
                    validate={[requiredValidator, minPasswordLength, passwordValidator]}
                    // type={'password'}
                />
            </div>
            <div className={style.loginFormInfo}>
                <div className={style.label}>Повторіть новий пароль <span className={style.requiredStar}>*</span> :</div>
                <Field
                    name={"newPasswordAgain"}
                    component={InputCreator}
                    placeholder={"Повторіть новий пароль ..."}
                    validate={[requiredValidator, minPasswordLength, passwordValidator]}
                    // type={'password'}

                />
            </div>
            {props.errorMessage && <div className={style.errMsg}>{props.errorMessage}</div>}

            <button className={style.loginSubmit} type={"submit"}>Підтвердити</button>

        </form>
    )
};