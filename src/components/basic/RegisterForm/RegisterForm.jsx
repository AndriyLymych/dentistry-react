import React from 'react'
import {Field} from 'redux-form'
import {
    emailValidator, isNumberValidator, maxAgeValidator,
    maxLengthValidator, minAgeValidator,
    minLengthValidator, passwordValidator,
    requiredValidator
} from "../../../validators/validators";
import {InputCreator} from "../../../helpers/FormCreator/FormCreator";
import s from './RegisterForm.module.css'
import style from '../../../App.module.css'

const maxLength = maxLengthValidator(100);
const minLength = minLengthValidator(2);
const minPasswordLength = minLengthValidator(8);
const minNameLength = minLengthValidator(2);
const maxNameLength = maxLengthValidator(40);
const minAge = minAgeValidator(2);
const maxAge = maxAgeValidator(120);

const RegisterForm = props => {

    const {handleSubmit, pristine, reset, submitting, errorMessage} = props;

    return (
        <form onSubmit={handleSubmit}>
            <div className={s.inputInfo}>
                <label>Електронна пошта <span className={style.requiredStar}>*</span> :</label>
                <Field
                    name="email"
                    component={InputCreator}
                    type="email"
                    placeholder="Введіть ваш емейл..."
                    validate={[requiredValidator, minLength, maxLength, emailValidator]}

                />
            </div>
            <div className={s.inputInfo}>
                <label>Пароль <span className={style.requiredStar}>*</span> :</label>
                <Field
                    name="password"
                    component={InputCreator}
                    type="password"
                    placeholder="Введіть ваш пароль..."
                    validate={[requiredValidator, minPasswordLength, passwordValidator]}

                />
            </div>
            <div className={s.inputInfo}>
                <label>Ім'я <span className={style.requiredStar}>*</span> :</label>
                <Field
                    name="name"
                    component={InputCreator}
                    type="text"
                    placeholder="Введіть ваше ім'я..."
                    validate={[requiredValidator, minNameLength, maxNameLength]}
                />
            </div>
            <div className={s.inputInfo}>
                <label>По батькові <span className={style.requiredStar}> *</span>:</label>
                <Field
                    name="middleName"
                    component={InputCreator}
                    type="text"
                    placeholder="Введіть ваше по-батькові..."
                    validate={[requiredValidator, minNameLength, maxNameLength]}

                />
            </div>

            <div className={s.inputInfo}>
                <label>Прізвище <span className={style.requiredStar}> *</span>:</label>
                <Field
                    name="surname"
                    component={InputCreator}
                    type="text"
                    placeholder="Введіть ваше прізвище..."
                    validate={[requiredValidator, minNameLength, maxNameLength]}

                />
            </div>

            <div className={s.inputInfo}>
                <label>Вік <span className={style.requiredStar}>*</span> :</label>
                <Field
                    name="age"
                    component={InputCreator}
                    type="text"
                    placeholder="Введіть ваше вік..."
                    validate={[requiredValidator, isNumberValidator, minAge, maxAge]}
                />
            </div>

            <div className={s.inputInfo}>
                <label>Місто <span className={style.requiredStar}>*</span> :</label>
                <Field
                    name="city"
                    component={InputCreator}
                    type="text"
                    placeholder="Введіть ваше місто..."
                    validate={requiredValidator}
                />

            </div>

            <div className={s.inputInfo + ' ' + s.genderInfo}>


                <label>Стать <span className={style.requiredStar}>*</span> : </label>

                <Field name="gender_id" component={InputCreator} type="radio" value="1"
                       validate={requiredValidator}/><span>Чоловіча</span>
                <Field name="gender_id" component={InputCreator} type="radio" value="2"
                       validate={requiredValidator}/><span>Жіноча</span>

                <div/>

            </div>
            {errorMessage && <div className={style.requiredStar}>{errorMessage}
            </div>}

            <div className={s.regFormBtn}>
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