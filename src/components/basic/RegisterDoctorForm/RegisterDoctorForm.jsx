import React from 'react'
import {Field} from 'redux-form'
import {InputCreator, SelectCreator} from "../../../helpers/FormCreator/FormCreator";
import {
    emailValidator, isCorrectSpecialityValidator, isNumberValidator,
    maxAgeValidator,
    maxLengthValidator,
    minAgeValidator,
    minLengthValidator, passwordValidator,
    requiredValidator
} from "../../../validators/validators";
import style from "../../../App.module.css";
import s from './RegisterDoctorForm.module.css'

const maxLength = maxLengthValidator(100);
const minLength = minLengthValidator(2);
const minPasswordLength = minLengthValidator(8);
const minNameLength = minLengthValidator(2);
const maxNameLength = maxLengthValidator(40);
const minAge = minAgeValidator(2);
const maxAge = maxAgeValidator(120);

const RegisterDoctorForm = props => {

    const {handleSubmit, pristine, submitting, specialities, errorMessage} = props;

    return (
        <form className={s.updateForm} onSubmit={handleSubmit}>
            <div className={s.regBlock}>
                <div>
                    <div className={s.label}>Електронна пошта:</div>
                    <div>
                        <Field
                            name="email"
                            component={InputCreator}
                            type="email"
                            placeholder="Введіть емейл..."
                            validate={[requiredValidator, minLength, maxLength, emailValidator]}

                        />
                    </div>
                </div>
                <div>
                    <div className={s.label}>Пароль:</div>
                    <div>
                        <Field
                            name="password"
                            component={InputCreator}
                            type="password"
                            placeholder="Введіть пароль..."
                            validate={[requiredValidator, minPasswordLength, passwordValidator]}

                        />
                    </div>
                </div>
                <div>
                    <div className={s.label}>Ім'я:</div>
                    <div>
                        <Field
                            name="name"
                            component={InputCreator}
                            type="text"
                            placeholder="Введіть ім'я..."
                            validate={[requiredValidator, minNameLength, maxNameLength]}

                        />
                    </div>
                </div>
                <div>
                    <div className={s.label}>По батькові:</div>
                    <div>
                        <Field
                            name="middleName"
                            component={InputCreator}
                            type="text"
                            placeholder="Введіть по батькові..."
                            validate={[requiredValidator, minNameLength, maxNameLength]}

                        />
                    </div>
                </div>

                <div>
                    <div className={s.label}>Прізвище:</div>
                    <div>
                        <Field
                            name="surname"
                            component={InputCreator}
                            type="text"
                            placeholder="Введіть прізвище..."
                            validate={[requiredValidator, minNameLength, maxNameLength]}

                        />
                    </div>
                </div>
                {errorMessage && <div className={style.requiredStar}>{errorMessage}</div>}
                <button className={s.check} type="submit" disabled={pristine || submitting}>
                    Підтвердити
                </button>
            </div>
            <div className={s.regBlock}>
                <div>
                    <div className={s.label}>Вік:</div>
                    <div>
                        <Field
                            name="age"
                            component={InputCreator}
                            type="text"
                            placeholder="Введіть вік..."
                            validate={[requiredValidator, isNumberValidator, minAge, maxAge]}

                        />
                    </div>

                    <div>
                        <div className={s.label}>Місто:</div>
                        <div>
                            <Field
                                name="city"
                                component={InputCreator}
                                type="text"
                                placeholder="Введіть місто..."
                                validate={requiredValidator}

                            />
                        </div>
                    </div>

                    <label className={s.label}>Стать:</label>

                    <div>
                        <div className={s.gender}>
                            <Field name="gender_id" component={InputCreator} type="radio" value="1"
                                   validate={requiredValidator}/> <span className={s.label}>Чоловіча</span>
                            <Field name="gender_id" component={InputCreator} type="radio" value="2"
                                   validate={requiredValidator}/> <span className={s.label}>Жіноча</span>
                        </div>

                    </div>

                    <div>
                        <label className={s.label}>Спеціальність:</label>

                        <Field name="speciality_id" component={SelectCreator}
                               validate={[requiredValidator, isCorrectSpecialityValidator]}>
                            <option defaultChecked>Виберіть спеціальність:</option>
                            {
                                specialities.map(speciality => <option
                                    value={speciality.id}>{speciality.label}</option>)
                            }

                        </Field>
                    </div>

                </div>
            </div>


        </form>
    )
};

export default RegisterDoctorForm