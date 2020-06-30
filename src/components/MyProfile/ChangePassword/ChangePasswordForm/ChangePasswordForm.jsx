import React from "react";
import {Field} from "redux-form";
import {InputCreator} from "../../../../helpers/FormCreator/FormCreator";
import {minLengthValidator, passwordValidator, requiredValidator} from "../../../../validators/validators";
import style from "../../../../App.module.css";


const minPasswordLength = minLengthValidator(8);

export const ChangePasswordForm = props => {

    const {handleSubmit, pristine, reset, submitting} = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Старий пароль:</label>
                <div>
                    <Field
                        name="password"
                        type="password"
                        component={InputCreator}
                        placeholder="Введіть старий пароль..."
                        validate={[requiredValidator, minPasswordLength, passwordValidator]}

                    />
                </div>
            </div>
            <div>
                <label> Новий пароль:</label>
                <div>
                    <Field
                        name="newPassword"
                        type="password"
                        component={InputCreator}
                        placeholder="Введіть новий пароль..."
                        validate={[requiredValidator, minPasswordLength, passwordValidator]}

                    />
                </div>
            </div>
            <div>
                <label>Новий пароль ще раз:</label>
                <div>
                    <Field
                        name="newPasswordAgain"
                        type="password"
                        component={InputCreator}
                        placeholder="Введіть новий пароль ще раз..."
                        validate={[requiredValidator, minPasswordLength, passwordValidator]}

                    />
                </div>
            </div>
            {props.errorMessage && <div className={style.requiredStar}>{props.errorMessage}</div>}
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

