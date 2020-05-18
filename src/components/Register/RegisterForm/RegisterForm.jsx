import React from 'react'
import {Field} from 'redux-form'

const RegisterForm = props => {

    const {handleSubmit, pristine, reset, submitting,genders} = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Електронна пошта</label>
                <div>
                    <Field
                        name="email"
                        component="input"
                        type="email"
                        placeholder="Введіть ваш емейл..."
                    />
                </div>
            </div>
            <div>
                <label>Пароль:</label>
                <div>
                    <Field
                        name="password"
                        component="input"
                        type="password"
                        placeholder="Введіть ваш пароль..."
                    />
                </div>
            </div>
            <div>
                <label>Ім'я:</label>
                <div>
                    <Field
                        name="name"
                        component="input"
                        type="text"
                        placeholder="Введіть ваше ім'я..."
                    />
                </div>
            </div>
            <div>
                <label>По-батьков:</label>
                <div>
                    <Field
                        name="middleName"
                        component="input"
                        type="text"
                        placeholder="Введіть ваше по-батькові..."
                    />
                </div>
            </div>

            <div>
                <label>Прізвище:</label>
                <div>
                    <Field
                        name="surname"
                        component="input"
                        type="text"
                        placeholder="Введіть ваше прізвище..."
                    />
                </div>
            </div>

            <div>
                <div>
                    <label>Вік:</label>
                    <div>
                        <Field
                            name="age"
                            component="input"
                            type="text"
                            placeholder="Введіть ваше вік..."
                        />
                    </div>
                </div>

                <div>
                    <label>Місто:</label>
                    <div>
                        <Field
                            name="city"
                            component="input"
                            type="text"
                            placeholder="Введіть ваше місто..."
                        />
                    </div>
                </div>

                <label>Стать:</label>

                <div>
                    {
                        genders.map(
                            gender =>
                                <label key={gender.id}>
                                    <Field name="gender_id" component="input" type="radio" value={gender.id}/>{' '}
                                    {gender.label}
                                </label>

                        )
                    }

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

export default RegisterForm