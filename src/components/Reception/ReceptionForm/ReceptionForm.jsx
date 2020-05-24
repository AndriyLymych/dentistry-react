import React from 'react'
import {Field} from 'redux-form'

const ReceptionForm = props => {

    const {handleSubmit, pristine, reset, submitting, services} = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Номер телефону:</label>
                <div>
                    <Field
                        name="phone_number"
                        component="input"
                        placeholder="Введіть ваш номер телефону..."
                    />
                </div>
            </div>
            <div>
                <label>Електронна пошта:</label>
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
                <label>Час прийому:</label>
                <div>
                    <Field
                        name="date"
                        component="input"
                        type="datetime-local"
                        placeholder="Виберіть час прийому..."
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
                        name="middle_name"
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
                <label>Вік:</label>
                <div>
                    <Field
                        name="age"
                        component="input"
                        placeholder="Введіть ваше вік..."
                    />
                </div>
            </div>


            <label>Послуга:</label>

            <Field name="service_id" component="select">
                <option disabled>Выберіть послугу</option>
                {
                    services.map(service => <option value={service.id}>{service.service}</option>)
                }

            </Field>
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

export default ReceptionForm