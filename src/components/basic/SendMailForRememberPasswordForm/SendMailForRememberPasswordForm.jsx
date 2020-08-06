import React from "react";
import {Field} from 'redux-form'
import {emailValidator, requiredValidator} from "../../../validators/validators";
import {InputCreator} from "../../../helpers/FormCreator/FormCreator";
import style from "../../basic/LoginForm/LoginForm.module.css";
import s from "./SendMailForRememberPasswordForm.css";

export const SendMailForRememberPasswordForm = props => {

    return (
        <form className={style.loginForm} onSubmit={props.handleSubmit}>
            <div className={style.loginFormInfo}>
                <div className={style.label}>Введіть емейл <span className={style.requiredStar}>*</span> :</div>
                <Field
                    name={"email"}
                    component={InputCreator}
                    placeholder={"Введіть емейл..."}
                    type={"email"}
                    autoFocus
                    validate={[requiredValidator, emailValidator]}
                />
            </div>

            {props.errorMessage && <div className={style.errMsg}>{props.errorMessage}</div>}


            <button className={style.loginSubmit +' '+s.submit} type={"submit"}>Підтвердити</button>

        </form>
    )
};