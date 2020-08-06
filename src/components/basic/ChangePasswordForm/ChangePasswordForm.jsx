import React from "react";
import {Field} from "redux-form";
import style from './ChangePasswordForm.module.css'
import s from '../UpdateMyProfileInfoForm/UpdateMyProfileInfo.module.css'
import {InputCreator} from "../../../helpers/FormCreator/FormCreator";
import {minLengthValidator, passwordValidator, requiredValidator} from "../../../validators/validators";


const minPasswordLength = minLengthValidator(8);

export const ChangePasswordForm = props => {

    const {handleSubmit, pristine, submitting} = props;

    return (
        <form className={s.updateForm} onSubmit={handleSubmit}>
            <div>
                <div className={s.label}>Старий пароль:</div>
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
                <div className={s.label}> Новий пароль:</div>
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
                <div className={s.label}>Повторіть новий пароль :</div>
                <div>
                    <Field
                        name="newPasswordAgain"
                        type="password"
                        component={InputCreator}
                        placeholder="Повторіть новий пароль..."
                        validate={[requiredValidator, minPasswordLength, passwordValidator]}

                    />
                </div>
            </div>
            {props.errorMessage && <div className={style.err}>{props.errorMessage}</div>}

            <button className={s.check} type="submit" disabled={pristine || submitting}>
                Підтвердити
            </button>

        </form>
    )

};

