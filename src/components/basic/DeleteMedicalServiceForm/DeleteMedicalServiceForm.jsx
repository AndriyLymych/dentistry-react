import React from 'react'
import {Field} from 'redux-form'
import {SelectCreator} from "../../../helpers/FormCreator/FormCreator";
import {isCorrectSpecialityValidator} from "../../../validators/validators";
import style from "../../../App.module.css";

const DeleteMedicalServiceForm = props => {

    const {handleSubmit, pristine, submitting, services} = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>

                <div>

                    <label>Послуга:</label>

                    <Field name="service_id" component={SelectCreator}
                           validate={[isCorrectSpecialityValidator]}>

                        <option defaultChecked>Выберіть послугу</option>
                        {
                            services.map(service => <option key={service.id}
                                                            value={service.id}>{service.service}</option>)
                        }

                    </Field>

                    {props.error && <div className={style.requiredStar}>{props.error}</div>}

                    <div>
                        <button type="submit" disabled={pristine || submitting}>
                            Видалити послугу
                        </button>
                    </div>
                </div>

            </div>

        </form>
    )
};

export default DeleteMedicalServiceForm