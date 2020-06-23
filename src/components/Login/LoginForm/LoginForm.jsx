import React from "react";
import {Field} from 'redux-form'
import {InputCreator} from "../../../helpers/FormCreator/FormCreator";
import style from './LoginForm.module.css'
import {
    emailValidator,
    maxLengthValidator,
    minLengthValidator, passwordValidator,
    requiredValidator
} from "../../../validators/validators";

const maxLength = maxLengthValidator(40);
const minLength = minLengthValidator(2);
const minPasswordLength = minLengthValidator(8);


export const LoginForm = props => {


    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <label htmlFor="email">Email: </label>
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
                    <label htmlFor="password">Password: </label>
                </div>
                <Field
                    name={"password"}
                    component={InputCreator}
                    placeholder={"Введіть пароль..."}
                    validate={[requiredValidator,minPasswordLength,passwordValidator]}
                    type={"password"}
                />
            </div>


            {/*{props.error && <div className={style.error}>{props.error}</div>}*/}

            <button type={"submit"}>Увійти</button>

        </form>
    )
};