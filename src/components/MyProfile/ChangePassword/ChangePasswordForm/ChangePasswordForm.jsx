import React from "react";
import {Field} from "redux-form";

export const ChangePasswordForm = props => {

    const {handleSubmit, pristine, reset, submitting} = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Старий пароль:</label>
                <div>
                    <Field
                        name="password"
                        component="input"
                        placeholder="Введіть старий пароль..."
                    />
                </div>
            </div>
            <div>
                <label> Новий пароль:</label>
                <div>
                    <Field
                        name="newPassword"
                        component="input"
                        placeholder="Введіть новий пароль..."
                    />
                </div>
            </div>
            <div>
                <label>Новий пароль ще раз:</label>
                <div>
                    <Field
                        name="newPasswordAgain"
                        component="input"
                        placeholder="Введіть новий пароль ще раз..."
                    />
                </div>
            </div>
            <div>
                <button type="submit" disabled={pristine || submitting}>
                    Підтвердити
                </button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                    Очистити дані
                </button>
            </div>

        </form>
    )

};

