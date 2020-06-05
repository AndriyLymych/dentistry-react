import React from 'react'
import {Field} from 'redux-form'

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
                            component="input"
                            autoFocus
                        />
                    </div>

                </div>
                <div>
                    <label>Змінити по батькові:</label>
                    <div>
                        <Field
                            name="middleName"
                            component="input"
                        />
                    </div>
                </div>
                <div>
                    <label>Змінити прізвище:</label>
                    <div>
                        <Field
                            name="surname"
                            component="input"
                        />
                    </div>
                </div>


                <div>
                    <label>Змінити вік:</label>
                    <div>
                        <Field
                            name="age"
                            component="input"
                        />
                    </div>
                </div>

                <div>
                    <label>Змінити місто:</label>
                    <div>
                        <Field
                            name="city"
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

export default UpdateMyProfileInfoForm