import React from "react";
import {Field} from 'redux-form'

export const ResetPasswordForm = props => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <label htmlFor="newPassword">Введіть новий пароль: </label>
                </div>
                <Field
                    name={"newPassword"}
                    component={'input'}
                    placeholder={"Введіть новий пароль..."}
                    autoFocus
                />
            </div>
            <div>
                <div>
                    <label htmlFor="newPasswordAgain">Повторіть новий пароль: </label>
                </div>
                <Field
                    name={"newPasswordAgain"}
                    component={'input'}
                    placeholder={"Повторіть новий пароль ..."}


                />
            </div>

            <button type={"submit"}>Підтвердити</button>

        </form>
    )
};