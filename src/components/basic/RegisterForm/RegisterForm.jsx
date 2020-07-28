import React from 'react'
import {Field} from 'redux-form'
import {
    emailValidator, isNumberValidator, maxAgeValidator,
    maxLengthValidator, minAgeValidator,
    minLengthValidator, passwordValidator,
    requiredValidator
} from "../../../validators/validators";
import {InputCreator} from "../../../helpers/FormCreator/FormCreator";
import style from './RegisterForm.module.css'

const maxLength = maxLengthValidator(100);
const minLength = minLengthValidator(2);
const minPasswordLength = minLengthValidator(8);
const minNameLength = minLengthValidator(2);
const maxNameLength = maxLengthValidator(40);
const minAge = minAgeValidator(2);
const maxAge = maxAgeValidator(120);

const RegisterForm = props => {

    const {handleSubmit, pristine, submitting, errorMessage} = props;

    return (
        <form className={style.regForm} onSubmit={handleSubmit}>
            <div className={style.inputInfo}>
                <div className={style.inputInfoLabel}>Емейл <span className={style.requiredStar}>*</span> :</div>
                <div className={style.regInput}>
                    <Field
                        name="email"
                        component={InputCreator}
                        type="email"
                        placeholder="Введіть ваш емейл..."
                        validate={[requiredValidator, minLength, maxLength, emailValidator]}

                    />
                </div>
            </div>
            <div className={style.inputInfo}>
                <div className={style.inputInfoLabel}>Пароль <span className={style.requiredStar}>*</span> :</div>
                <div className={style.regInput}>
                    <Field
                        name="password"
                        component={InputCreator}
                        type="password"
                        placeholder="Введіть ваш пароль..."
                        validate={[requiredValidator, minPasswordLength, passwordValidator]}

                    />
                </div>

            </div>
            <div className={style.inputInfo}>
                <div className={style.inputInfoLabel}>Ім'я <span className={style.requiredStar}>*</span> :</div>
                <div className={style.regInput}>
                    <Field
                        name="name"
                        component={InputCreator}
                        type="text"
                        placeholder="Введіть ваше ім'я..."
                        validate={[requiredValidator, minNameLength, maxNameLength]}
                    />
                </div>

            </div>
            <div className={style.inputInfo}>
                <div className={style.inputInfoLabel}>По батькові <span className={style.requiredStar}> *</span>:</div>
                <div className={style.regInput}>
                    <Field
                        name="middleName"
                        component={InputCreator}
                        type="text"
                        placeholder="Введіть ваше по-батькові..."
                        validate={[requiredValidator, minNameLength, maxNameLength]}

                    />
                </div>

            </div>

            <div className={style.inputInfo}>
                <div className={style.inputInfoLabel}>Прізвище <span className={style.requiredStar}> *</span>:</div>
                <div className={style.regInput}>
                    <Field
                        name="surname"
                        component={InputCreator}
                        type="text"
                        placeholder="Введіть ваше прізвище..."
                        validate={[requiredValidator, minNameLength, maxNameLength]}

                    />
                </div>
            </div>

            <div className={style.inputInfo}>
                <div className={style.inputInfoLabel}>Вік <span className={style.requiredStar}>*</span> :</div>
                <div className={style.regInput}>
                    <Field
                        name="age"
                        component={InputCreator}
                        type="text"
                        placeholder="Введіть ваше вік..."
                        validate={[requiredValidator, isNumberValidator, minAge, maxAge]}
                    />
                </div>
            </div>

            <div className={style.inputInfo}>
                <div className={style.inputInfoLabel}>Місто <span className={style.requiredStar}>*</span> :</div>
                <div className={style.regInput}>
                    <Field
                        name="city"
                        component={InputCreator}
                        type="text"
                        placeholder="Введіть ваше місто..."
                        validate={requiredValidator}
                    />
                </div>

            </div>

            <div className={style.inputInfo}>


                <div className={style.inputInfoLabel}>Стать <span className={style.requiredStar}>*</span> :</div>

                <div className={style.gender}>
                    <Field name="gender_id" component={InputCreator}  type="radio" value="1"
                           validate={requiredValidator}/><span>Чоловіча</span>
                </div>
                <div className={style.gender}>
                    <Field  name="gender_id" component={InputCreator} type="radio" value="2"
                            validate={requiredValidator}/><span>Жіноча</span>
                </div>

                <div/>

            </div>
            {errorMessage && <div className={style.requiredStar}>{errorMessage}
            </div>}

            <button className={style.regFormBtn} type="submit" disabled={pristine || submitting}>
                Підтвердити
            </button>

        </form>
    )
};

export default RegisterForm