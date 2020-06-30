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

const maxLength = maxLengthValidator(100);
const minLength = minLengthValidator(2);
const minPasswordLength = minLengthValidator(8);
const minNameLength = minLengthValidator(2);
const maxNameLength = maxLengthValidator(40);
const minAge = minAgeValidator(2);
const maxAge = maxAgeValidator(120);

const RegisterDoctorForm = props => {

    const {handleSubmit, pristine, reset, submitting, genders, specialities, errorMessage} = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Електронна пошта</label>
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
                <label>Пароль:</label>
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
                <label>Ім'я:</label>
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
                <label>По-батьков:</label>
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
                <label>Прізвище:</label>
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
                <label>Вік:</label>
                <div>
                    <Field
                        name="age"
                        component={InputCreator}
                        type="text"
                        placeholder="Введіть ваше вік..."
                        validate={[requiredValidator, isNumberValidator, minAge, maxAge]}

                    />
                </div>

                <div>
                    <label>Місто:</label>
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

                <label>Стать:</label>

                <div>
                    {/*{*/}
                    {/*    genders.map(*/}
                    {/*        gender =>*/}
                    {/*            <label key={gender.id}>*/}
                    {/*                <Field name="gender_id" component={InputCreator} type="radio" />*/}
                    {/*                {gender.label}*/}
                    {/*            </label>*/}
                    {/*    )*/}
                    {/*}*/}

                    <div>
                        <label><Field name="gender_id" component={InputCreator} type="radio" value="1"
                                      validate={requiredValidator}/> Чоловіча</label>
                        <label><Field name="gender_id" component={InputCreator} type="radio" value="2"
                                      validate={requiredValidator}/> Жіноча</label>
                    </div>

                </div>

                <div>
                    <label>Спеціальність:</label>

                    <Field name="speciality_id" component={SelectCreator}
                           validate={[requiredValidator, isCorrectSpecialityValidator]}>
                        <option defaultChecked>Виберіть спеціальність:</option>
                        {
                            specialities.map(speciality => <option value={speciality.id}>{speciality.label}</option>)
                        }

                    </Field>
                </div>

            </div>
            {errorMessage && <div className={style.requiredStar}>{errorMessage}</div>}
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

export default RegisterDoctorForm