import React, {useState} from "react";
import {USER_ROLE} from "../../../constant/userConstant/userRole";
import {configs} from "../../../config/configs";
import style from "../../OurDoctors/OurDoctorsCard/DoctorProfile/DoctoreProfile.module.css";
import {reduxForm} from "redux-form";
import UpdateMyProfileInfoForm from "./UpdateMyProfileInfoForm/UpdateMyProfileInfoForm";
import {connect} from "react-redux";
import {updateUserDates} from "../../../redux/reducers/authReducer";

const UpdateMyProfileInfoReduxForm = reduxForm({
    form: 'update-my-profile-info'
})(UpdateMyProfileInfoForm);

const MyProfileInfo = ({
                           me: {
                               name,
                               middleName,
                               surname,
                               age,
                               city,
                               UserRole: {
                                   label: userRole
                               }
                           },
                           avatar,
                           updateUserDates
                       }) => {

    const [editMode, setEditMode] = useState(false);

    const onSubmit = data => {
        updateUserDates(data);
        setEditMode(false)
    };


    return (
        <div>
            {
                !editMode && <div>
                    {
                        userRole === USER_ROLE.DOCTOR &&
                        <img className={style.avatarBlock} src={`${configs.HOST}:${configs.PORT}/${avatar}`}
                             alt="avatar"/>
                    }
                    <p>{name}</p>
                    <p>{middleName}</p>
                    <p>{surname}</p>
                    <p>{age}</p>
                    <p>{city}</p>
                </div>
            }

            {
                editMode && <div>
                    <button onClick={() => {
                        setEditMode(false)
                    }}>Відмінити
                    </button>

                    <UpdateMyProfileInfoReduxForm
                        onSubmit={onSubmit}
                        initialValues={{name, middleName, surname, age, city}}
                        avatar={avatar} userRole={userRole}
                    />
                </div>
            }
            <button onClick={() => {
                setEditMode(true)
            }}>редагувати
            </button>
        </div>

    )
};

export default connect(null, {updateUserDates})(MyProfileInfo);