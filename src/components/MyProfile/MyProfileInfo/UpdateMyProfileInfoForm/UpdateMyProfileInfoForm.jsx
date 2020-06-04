import React from 'react'
import {Field} from 'redux-form'
import {USER_ROLE} from "../../../../constant/userConstant/userRole";
import style from "../../../OurDoctors/OurDoctorsCard/DoctorProfile/DoctoreProfile.module.css";
import {configs} from "../../../../config/configs";

const UpdateMyProfileInfoForm = props => {

    const {handleSubmit, submitting, avatar, userRole} = props;

    return (
        <div>
            {
                userRole === USER_ROLE.DOCTOR &&
                <img className={style.avatarBlock} src={`${configs.HOST}:${configs.PORT}/${avatar}`}
                     alt="avatar"/>
            }
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