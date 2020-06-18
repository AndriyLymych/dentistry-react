import React from 'react'
import {Field} from 'redux-form'

const DeleteMedicalServiceForm = props => {

    const {handleSubmit,pristine,submitting, services} = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>

                <div>

                    <label>Послуга:</label>

                    <Field name="service_id" component="select">

                        <option defaultChecked>Выберіть послугу</option>
                        {
                            services.map(service => <option key={service.id} value={service.id}>{service.service}</option>)
                        }

                    </Field>
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