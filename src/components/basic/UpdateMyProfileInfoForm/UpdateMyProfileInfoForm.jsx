import React from 'react'
import {Field} from 'redux-form'
import {InputCreator} from "../../../helpers/FormCreator/FormCreator";
import {
    isNumberValidator, maxAgeValidator,
    maxLengthValidator, minAgeValidator,
    minLengthValidator,
    requiredValidator
} from "../../../validators/validators";

const minNameLength = minLengthValidator(2);
const maxNameLength = maxLengthValidator(40);
const minAge = minAgeValidator(2);
const maxAge = maxAgeValidator(120);

const UpdateMyProfileInfoForm = props => {

    const {handleSubmit, submitting} = props;

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Змінити імя:</label>
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
                    <label>Змінити по батькові:</label>
                    <div>
                        <Field
                            name="middleName"
                            component={InputCreator}
                            validate={[requiredValidator, minNameLength, maxNameLength]}

                        />
                    </div>
                </div>
                <div>
                    <label>Змінити прізвище:</label>
                    <div>
                        <Field
                            name="surname"
                            component={InputCreator}
                            validate={[requiredValidator, minNameLength, maxNameLength]}
                        />
                    </div>
                </div>


                <div>
                    <label>Змінити вік:</label>
                    <div>
                        <Field
                            name="age"
                            component={InputCreator}
                            validate={[requiredValidator, isNumberValidator, minAge, maxAge]}

                        />
                    </div>
                </div>

                <div>
                    <label>Змінити місто:</label>
                    <div>
                        <Field
                            name="city"
                            component={InputCreator}
                            validate={requiredValidator}
                        />
                    </div>
                </div>


                <div>
                    <button type="submit" disabled={submitting}>
                        Підтвердити
                    </button>

                </div>
            </form>
        </div>
    )
};

export default UpdateMyProfileInfoForm