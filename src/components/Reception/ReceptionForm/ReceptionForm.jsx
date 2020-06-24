import React from 'react'
import {Field} from 'redux-form'
import {
    emailValidator,
    isNumberValidator,
    maxLengthValidator,
    minLengthValidator, phoneNumberValidator,
    requiredValidator
} from "../../../validators/validators";
import {InputCreator, SelectCreator} from "../../../helpers/FormCreator/FormCreator";
import style from "../../../App.module.css";

const minNameLength = minLengthValidator(2);
const maxNameLength = maxLengthValidator(40);

const ReceptionForm = props => {

    const {handleSubmit, pristine, reset, submitting, services} = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Як до Вас звертатися <span className={style.requiredStar}>*</span> :</label>
                <div>
                    <Field
                        name="name"
                        component={InputCreator}
                        placeholder="Як до Вас звертатися..."
                        validate={[requiredValidator, minNameLength, maxNameLength]}
                    />
                </div>

            </div>
            <div>
                <label>Номер телефону <span className={style.requiredStar}>*</span> :</label>

                <Field
                    name="phone_number"
                    component={InputCreator}
                    placeholder="Введіть ваш номер телефону..."
                    validate={[requiredValidator, phoneNumberValidator]}

                />
            </div>
            <div>
                <label>Електронна пошта <span className={style.requiredStar}>*</span> :</label>
                <div>
                    <Field
                        name="email"
                        component={InputCreator}
                        type="email"
                        placeholder="Введіть ваш емейл..."
                        validate={[requiredValidator, emailValidator]}
                    />
                </div>
            </div>


            <div>
                <label>Час прийому <span className={style.requiredStar}>*</span> :</label>
                <div>
                    <Field
                        name="date"
                        component={InputCreator}
                        type="datetime-local"
                        placeholder="Виберіть час прийому..."
                        validate={requiredValidator}
                    />
                </div>
            </div>


            <label>Послуга <span className={style.requiredStar}>*</span> : </label>

            <Field name="service_id" component={SelectCreator} validate={requiredValidator}>
                <option >Виберіть послугу:</option>
                {
                    services.map(service => <option key={service.id} value={service.id}>{service.service}</option>)
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