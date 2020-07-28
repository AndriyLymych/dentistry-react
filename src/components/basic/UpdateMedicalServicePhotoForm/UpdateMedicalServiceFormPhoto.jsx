import React from 'react'
import {Field} from 'redux-form'
import MyFile from "../MyFile/MyFile";
import style from "../../../App.module.css";
import s from './UpdateMedicalServicePhotoForm.module.css'

const UpdateMedicalServicePhotoForm = props => {

    const {handleSubmit, errorMessage} = props;

    return (

        <form className={s.photoForm} onSubmit={handleSubmit}>

            <div>
                <Field

                    name="photo"
                    component={MyFile}

                />
            </div>
            {errorMessage && <div className={style.requiredStar}>{errorMessage}</div>}

        </form>
    )
};

export default UpdateMedicalServicePhotoForm