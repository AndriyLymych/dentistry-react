import React from 'react'
import {Field} from 'redux-form'
import MyFile from "../MyFile/MyFile";
import {InputCreator, TextareaCreator} from "../../../helpers/FormCreator/FormCreator";
import {
    isNumberValidator,
    minLengthValidator,
    minPriceValidator,
    requiredValidator
} from "../../../validators/validators";
import style from "../../../App.module.css";

const minPrice = minPriceValidator(1);
const minLength = minLengthValidator(2);

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
                        component={InputCreator}
                        placeholder="Введіть назву послуги..."
                        validate={[requiredValidator, minLength]}

                    />
                </div>
            </div>
            <div>
                <label>Опишіть послугу:</label>
                <div>
                    <Field
                        name="description"
                        component={TextareaCreator}
                        placeholder="Опишіть послугу..."
                        validate={[requiredValidator, minLength]}

                    />
                </div>
            </div>
            <div>
                <label>Введіть ціну послуги:</label>
                <div>
                    <Field
                        name="price"
                        component={InputCreator}
                        placeholder="Введіть ціну послуги..."
                        validate={[requiredValidator, isNumberValidator, minPrice]}
                    />
                </div>
            </div>
            {props.error && <div className={style.requiredStar}>{props.error}</div>}

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