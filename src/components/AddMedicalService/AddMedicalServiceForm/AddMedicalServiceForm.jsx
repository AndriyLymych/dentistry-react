import React from 'react'
import {Field} from 'redux-form'
import MyFile from "../../MyFile/MyFile";

const AddMedicalServiceForm = props => {

    const {handleSubmit, pristine, reset, submitting} = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Виберіть фото для послуги:</label>
                <div>
                    <Field
                        name="photo"
                        component={MyFile}
                        type="file"
                    >
                    </Field>

                </div>
            </div>
            <div>
                <label>Введіть назву послуги:</label>
                <div>
                    <Field
                        name="service"
                        component="input"
                        placeholder="Введіть назву послуги..."
                    />
                </div>
            </div>
            <div>
                <label>Опишіть послугу:</label>
                <div>
                    <Field
                        name="description"
                        component="input"
                        placeholder="Опишіть послугу..."
                    />
                </div>
            </div>
            <div>
                <label>Введіть ціну послуги:</label>
                <div>
                    <Field
                        name="price"
                        component="input"
                        placeholder="Введіть ціну послуги..."
                    />
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

export default AddMedicalServiceForm