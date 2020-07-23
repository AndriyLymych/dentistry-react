import React from "react";
import {Field} from 'redux-form'
import {InputCreator} from "../../../helpers/FormCreator/FormCreator";
import {
    emailValidator,
    maxLengthValidator,
    minLengthValidator, passwordValidator,
    requiredValidator
} from "../../../validators/validators";

import style from './LoginForm.module.css'

const maxLength = maxLengthValidator(100);
const minLength = minLengthValidator(2);
const minPasswordLength = minLengthValidator(8);


export const LoginForm = props => {

    return (
        <form className={style.loginForm} onSubmit={props.handleSubmit}>
            <div className={style.loginFormInfo}>
                <div className={style.label}>Email <span className={style.requiredStar}>*</span> :</div>
                <Field
                    name={"email"}
                    component={InputCreator}
                    placeholder={"Введіть емейл..."}
                    validate={[requiredValidator, minLength, maxLength, emailValidator]}
                    type={"email"}
                />
            </div>
            <div className={style.loginFormInfo}>
                <div className={style.label}>Password <span className={style.requiredStar}>*</span> :</div>
                <Field
                    name={"password"}
                    component={InputCreator}
                    placeholder={"Введіть пароль..."}
                    validate={[requiredValidator, minPasswordLength, passwordValidator]}
                    type={"password"}
                />

            </div>


            {props.errorMessage && '/' + window.location.href.split('/').pop() === '/login' &&
            <div className={style.errMsg}>{props.errorMessage}</div>}
            {props.adminErrorMessage && '/' + window.location.href.split('/').pop() === '/auth-admin' &&
            <div className={style.errMsg}>{props.adminErrorMessage}</div>}

            <button className={style.loginSubmit} type={"submit"}>Увійти</button>

        </form>
    )
};
