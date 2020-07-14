import React from "react";
import {Field} from 'redux-form'
import {InputCreator} from "../../../helpers/FormCreator/FormCreator";
import {minLengthValidator, passwordValidator, requiredValidator} from "../../../validators/validators";
import style from "../../../App.module.css";

const minPasswordLength = minLengthValidator(8);

export const ResetPasswordForm = props => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <label htmlFor="newPassword">Введіть новий пароль: </label>
                </div>
                <Field
                    name={"newPassword"}
                    component={InputCreator}
                    placeholder={"Введіть новий пароль..."}
                    autoFocus
                    validate={[requiredValidator, minPasswordLength, passwordValidator]}

                />
            </div>
            <div>
                <div>
                    <label htmlFor="newPasswordAgain">Повторіть новий пароль: </label>
                </div>
                <Field
                    name={"newPasswordAgain"}
                    component={InputCreator}
                    placeholder={"Повторіть новий пароль ..."}
                    validate={[requiredValidator, minPasswordLength, passwordValidator]}


                />
            </div>
            {props.errorMessage && <div className={style.requiredStar}>{props.errorMessage}</div>}

            <button type={"submit"}>Підтвердити</button>

        </form>
    )
};