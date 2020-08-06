import React from 'react'
import {Field} from 'redux-form'
import {SelectCreator} from "../../../helpers/FormCreator/FormCreator";
import {isCorrectSpecialityValidator} from "../../../validators/validators";
import style from "../../../App.module.css";
import s from './DeleteMedicalServiceForm.module.css'

const DeleteMedicalServiceForm = props => {

    const {handleSubmit, pristine, submitting, services} = props;

    return (
        <form className={s.updateForm} onSubmit={handleSubmit}>

            <div>

                <div className={s.label}>Послуга:</div>

                <Field name="service_id" component={SelectCreator}
                       validate={[isCorrectSpecialityValidator]}>

                    <option defaultChecked>Виберіть послугу</option>
                    {
                        services.map(service => <option key={service.id}
                                                        value={service.id}>{service.service}</option>)
                    }

                </Field>

                {props.error && <div className={style.requiredStar}>{props.error}</div>}


            </div>

            <button className={s.check} type="submit" disabled={pristine || submitting}>
                Видалити
            </button>
        </form>
    )
};

export default DeleteMedicalServiceForm