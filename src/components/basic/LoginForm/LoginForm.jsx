import React from "react";
import {Field} from 'redux-form'
import {InputCreator} from "../../../helpers/FormCreator/FormCreator";
import {
    emailValidator,
    maxLengthValidator,
    minLengthValidator, passwordValidator,
    requiredValidator
} from "../../../validators/validators";

import style from '../../../App.module.css'

const maxLength = maxLengthValidator(100);
const minLength = minLengthValidator(2);
const minPasswordLength = minLengthValidator(8);


export const LoginForm = props => {


    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <label htmlFor="email">Email  <span className={style.requiredStar}>*</span> : </label>
                </div>
                <Field
                    name={"email"}
                    component={InputCreator}
                    placeholder={"Введіть емейл..."}
                    validate={[requiredValidator,minLength,maxLength,emailValidator]}
                    type={"email"}
                />
            </div>
            <div>
                <div>
                    <label htmlFor="password">Password  <span className={style.requiredStar}>*</span> : </label>
                </div>
                <Field
                    name={"password"}
                    component={InputCreator}
                    placeholder={"Введіть пароль..."}
                    validate={[requiredValidator,minPasswordLength,passwordValidator]}
                    type={"password"}
                />
            </div>


            {props.errorMessage  && <div className={style.requiredStar}>{props.errorMessage}</div>}

            <button type={"submit"}>Увійти</button>

        </form>
    )
};