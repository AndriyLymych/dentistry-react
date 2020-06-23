import React from 'react'
import {Field} from 'redux-form'

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
                            component="input"
                            autoFocus={true}
                        />
                    </div>
                </div>
                <div>
                    <label>Змінити опис:</label>
                    <div>
                        <Field
                            name="description"
                            component="input"
                        />
                    </div>
                </div>


                <div>
                    <label>Змінити ціну:</label>
                    <div>
                        <Field
                            name="price"
                            component="input"
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