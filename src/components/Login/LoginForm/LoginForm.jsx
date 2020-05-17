import React from "react";
import {Field} from 'redux-form'
import {InputCreator} from "../../../helpers/FormCreator/FormCreator";
import style from './LoginForm.module.css'



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
                    // validate={[requiredField, maxLengthEmail]}
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
                    // validate={[requiredField, maxLengthPassword]}
                    type={"password"}
                />
            </div>


            {/*{props.error && <div className={style.error}>{props.error}</div>}*/}

            <button type={"submit"}>Увійти</button>

        </form>
    )
};