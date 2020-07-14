import React from 'react'
import {Field} from 'redux-form'
import {InputCreator, TextareaCreator} from "../../../helpers/FormCreator/FormCreator";
import {
    isNumberValidator,
    minLengthValidator,
    minPriceValidator,
    requiredValidator
} from "../../../validators/validators";

const minPrice = minPriceValidator(1);
const minLength = minLengthValidator(2);

const UpdateMedicalServiceForm = props => {

    const {handleSubmit, submitting} = props;

    return (
        <div>

            <form onSubmit={handleSubmit}>

                <div>
                    <label>Змінити назву:</label>
                    <div>
                        <Field
                            name="service"
                            component={InputCreator}
                            autoFocus={true}
                            validate={[requiredValidator, minLength]}

                        />
                    </div>
                </div>
                <div>
                    <label>Змінити опис:</label>
                    <div>
                        <Field
                            name="description"
                            component={TextareaCreator}
                            validate={[requiredValidator, minLength]}

                        />
                    </div>
                </div>


                <div>
                    <label>Змінити ціну:</label>
                    <div>
                        <Field
                            name="price"
                            component={InputCreator}
                            validate={[requiredValidator, isNumberValidator, minPrice]}

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

export default UpdateMedicalServiceForm