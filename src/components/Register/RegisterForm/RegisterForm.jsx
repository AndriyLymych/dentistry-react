import React from 'react'
import {Field} from 'redux-form'
import {
    emailValidator, isNumberValidator, maxAgeValidator,
    maxLengthValidator, minAgeValidator,
    minLengthValidator, passwordValidator,
    requiredValidator
} from "../../../validators/validators";
import {InputCreator} from "../../../helpers/FormCreator/FormCreator";

import style from '../../../App.module.css'

const maxLength = maxLengthValidator(100);
const minLength = minLengthValidator(2);
const minPasswordLength = minLengthValidator(8);
const minNameLength = minLengthValidator(2);
const maxNameLength = maxLengthValidator(40);
const minAge = minAgeValidator(2);
const maxAge = maxAgeValidator(120);

const RegisterForm = props => {

    const {handleSubmit, pristine, reset, submitting, genders} = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Електронна пошта <span className={style.requiredStar}>*</span> :</label>
                <div>
                    <Field
                        name="email"
                        component={InputCreator}
                        type="email"
                        placeholder="Введіть ваш емейл..."
                        validate={[requiredValidator, minLength, maxLength, emailValidator]}
                    />
                </div>
            </div>
            <div>
                <label>Пароль <span className={style.requiredStar}>*</span> :</label>
                <div>
                    <Field
                        name="password"
                        component={InputCreator}
                        type="password"
                        placeholder="Введіть ваш пароль..."
                        validate={[requiredValidator, minPasswordLength, passwordValidator]}

                    />
                </div>
            </div>
            <div>
                <label>Ім'я <span className={style.requiredStar}>*</span> :</label>
                <div>
                    <Field
                        name="name"
                        component={InputCreator}
                        type="text"
                        placeholder="Введіть ваше ім'я..."
                        validate={[requiredValidator, minNameLength, maxNameLength]}
                    />
                </div>
            </div>
            <div>
                <label>По-батьков <span className={style.requiredStar}> *</span>:</label>
                <div>
                    <Field
                        name="middleName"
                        component={InputCreator}
                        type="text"
                        placeholder="Введіть ваше по-батькові..."
                        validate={[requiredValidator, minNameLength, maxNameLength]}

                    />
                </div>
            </div>

            <div>
                <label>Прізвище <span className={style.requiredStar}> *</span>:</label>
                <div>
                    <Field
                        name="surname"
                        component={InputCreator}
                        type="text"
                        placeholder="Введіть ваше прізвище..."
                        validate={[requiredValidator, minNameLength, maxNameLength]}

                    />
                </div>
            </div>

            <div>
                <label>Вік <span className={style.requiredStar}>*</span> :</label>
                <div>
                    <Field
                        name="age"
                        component={InputCreator}
                        type="text"
                        placeholder="Введіть ваше вік..."
                        validate={[requiredValidator, isNumberValidator, minAge, maxAge]}
                    />
                </div>
            </div>

            <div>
                <label>Місто <span className={style.requiredStar}>*</span> :</label>
                <div>
                    <Field
                        name="city"
                        component={InputCreator}
                        type="text"
                        placeholder="Введіть ваше місто..."
                        validate={requiredValidator}
                    />

                </div>
            </div>

            <div>

                <label>Стать <span className={style.requiredStar}>*</span> : </label>

                <div>
                    {
                        genders.map(
                            gender =>
                                <label key={gender.id}>
                                    <Field name="gender_id" component={InputCreator} type="radio" value={gender.id} validate={requiredValidator}/>
                                    {gender.label}
                                </label>
                        )
                    }

                </div>
                <div/>


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

export default RegisterForm