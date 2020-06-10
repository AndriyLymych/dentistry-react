import React from 'react'
import {Field} from 'redux-form'

const ReceptionForm = props => {

    const {handleSubmit, pristine, reset, submitting, services} = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <label>Як до Вас звертатися:</label>
                    <div>
                        <Field
                            name="name"
                            component="input"
                            placeholder="Як до Вас звертатися..."
                        />
                    </div>
                </div>

            </div>
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





            <label>Послуга:</label>

            <Field name="service_id" component="select">
                <option  defaultChecked>Выберіть послугу</option>
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