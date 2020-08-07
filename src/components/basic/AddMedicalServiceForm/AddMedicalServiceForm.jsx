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
import s from './AddMedicalServiceForm.module.css'

const minPrice = minPriceValidator(1);
const minNameLength = minLengthValidator(2);
const minLength = minLengthValidator(6);

const AddMedicalServiceForm = props => {

    const {handleSubmit, pristine, submitting,error} = props;

    return (
        <form className={s.updateForm} onSubmit={handleSubmit}>
            <div>
                <div className={s.label}>Виберіть фото для послуги:</div>
                <div className={s.photo}>
                    <Field
                        name="photo"
                        component={MyFile}
                        type="file"
                        validate={[requiredValidator]}

                    >
                    </Field>

                </div>
            </div>
            <div>
                <div className={s.label}>Введіть назву послуги:</div>
                <div>
                    <Field
                        name="service"
                        component={InputCreator}
                        placeholder="Введіть назву послуги..."
                        validate={[requiredValidator, minNameLength]}

                    />
                </div>
            </div>
            <div >
                <div className={s.label}>Введіть короткий опис послуги:</div>
                <div>
                    <Field
                        name="small_description"
                        component={TextareaCreator}
                        placeholder="Короткий опис..."
                        validate={[requiredValidator, minLength]}

                    />
                </div>
            </div>
            <div >
                <div className={s.label}>Опишіть послугу:</div>
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
                <div className={s.label}>Введіть ціну послуги:</div>
                <div>
                    <Field
                        name="price"
                        component={InputCreator}
                        placeholder="Введіть ціну послуги..."
                        validate={[requiredValidator, isNumberValidator, minPrice]}
                    />
                </div>
            </div>
            {error && <div className={s.err}>{error}</div>}

            <button className={s.check} type="submit" disabled={pristine || submitting}>
                Підтвердити
            </button>
        </form>
    )
};

export default AddMedicalServiceForm