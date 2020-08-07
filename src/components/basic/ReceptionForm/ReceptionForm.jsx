import React from 'react'
import {Field} from 'redux-form'
import {
    emailValidator, isCorrectServiceValidator,
    maxLengthValidator,
    minLengthValidator, phoneNumberValidator,
    requiredValidator
} from "../../../validators/validators";
import {InputCreator, SelectCreator} from "../../../helpers/FormCreator/FormCreator";
import style from "../../../App.module.css";
import s from './ReceptionForm.module.css'

const minNameLength = minLengthValidator(2);
const maxNameLength = maxLengthValidator(40);

const ReceptionForm = props => {

    const {handleSubmit, pristine, submitting, services} = props;
    return (
        <form className={s.receptionForm} onSubmit={handleSubmit}>
            <div>
                <div className={s.label}>Ім'я пацієнта <span className={style.requiredStar}>*</span> :</div>
                <div>
                    <Field
                        name="name"
                        component={InputCreator}
                        placeholder="Введіть ім'я..."
                        validate={[requiredValidator, minNameLength, maxNameLength]}
                    />
                </div>

            </div>
            <div>
                <div className={s.label}>Номер телефону <span className={style.requiredStar}>*</span> :</div>

                <Field
                    name="phone_number"
                    component={InputCreator}
                    placeholder="Введіть номер телефону..."
                    validate={[requiredValidator, phoneNumberValidator]}

                />
            </div>
            <div>
                <div className={s.label}>Електронна пошта пацієнта <span className={style.requiredStar}>*</span> :</div>
                <div>
                    <Field
                        name="email"
                        component={InputCreator}
                        type="email"
                        placeholder="Введіть емейл..."
                        validate={[requiredValidator, emailValidator]}
                    />
                </div>
            </div>


            <div>
                <div className={s.label}>Час прийому <span className={style.requiredStar}>*</span> :</div>
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


            <div className={s.label}>Послуга <span className={style.requiredStar}>*</span> : </div>

            <Field name="service_id" component={SelectCreator}
                   validate={[requiredValidator, isCorrectServiceValidator]}>
                <option>Виберіть послугу:</option>
                {
                    services.map(service => <option key={service.id} value={service.id}>{service.service}</option>)
                }

            </Field>
            <button className={s.check} type="submit" disabled={pristine || submitting}>
                Підтвердити
            </button>

        </form>
    )
};

export default ReceptionForm