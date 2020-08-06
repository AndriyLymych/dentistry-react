import React from 'react'
import {Field} from 'redux-form'
import {InputCreator} from "../../../helpers/FormCreator/FormCreator";
import {
    isNumberValidator, maxAgeValidator,
    maxLengthValidator, minAgeValidator,
    minLengthValidator,
    requiredValidator
} from "../../../validators/validators";
import style from './UpdateMyProfileInfo.module.css'

const minNameLength = minLengthValidator(2);
const maxNameLength = maxLengthValidator(40);
const minAge = minAgeValidator(2);
const maxAge = maxAgeValidator(120);

const UpdateMyProfileInfoForm = props => {

    const {handleSubmit, submitting} = props;

    return (
        <form className={style.updateForm} onSubmit={handleSubmit}>
            <div>
                <div className={style.label}>Змінити імя:</div>
                <div>
                    <Field
                        name="name"
                        component={InputCreator}
                        autoFocus
                        validate={[requiredValidator, minNameLength, maxNameLength]}

                    />
                </div>

            </div>
            <div>
                <div className={style.label}>Змінити по батькові:</div>
                <div>
                    <Field
                        name="middleName"
                        component={InputCreator}
                        validate={[requiredValidator, minNameLength, maxNameLength]}

                    />
                </div>
            </div>
            <div>
                <div className={style.label}>Змінити прізвище:</div>
                <div>
                    <Field
                        name="surname"
                        component={InputCreator}
                        validate={[requiredValidator, minNameLength, maxNameLength]}
                    />
                </div>
            </div>


            <div>
                <div className={style.label}>Змінити вік:</div>
                <div>
                    <Field
                        name="age"
                        component={InputCreator}
                        validate={[requiredValidator, isNumberValidator, minAge, maxAge]}

                    />
                </div>
            </div>

            <div>
                <div className={style.label}>Змінити місто:</div>
                <div>
                    <Field
                        name="city"
                        component={InputCreator}
                        validate={requiredValidator}
                    />
                </div>
            </div>


            <button className={style.check} type="submit" disabled={submitting}>
                Підтвердити
            </button>

        </form>
    )
};

export default UpdateMyProfileInfoForm