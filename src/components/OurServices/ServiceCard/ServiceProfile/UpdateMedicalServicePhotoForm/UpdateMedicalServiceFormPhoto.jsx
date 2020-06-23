import React from 'react'
import {Field} from 'redux-form'
import MyFile from "../../../../MyFile/MyFile";

const UpdateMedicalServicePhotoForm = props => {

    const {handleSubmit} = props;

    return (
        <div>

            <form onSubmit={handleSubmit}>

                <div>
                    <Field
                        name="photo"
                        component={MyFile}
                    />
                </div>

            </form>
        </div>
    )
};

export default UpdateMedicalServicePhotoForm