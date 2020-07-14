import React, {useState} from "react";
import {USER_ROLE} from "../../../constant/userConstant/userRole";
import {configs} from "../../../config/configs";
import style from "../DoctorProfile/DoctoreProfile.module.css";
import error from "../../../App.module.css";
import {reduxForm} from "redux-form";
import UpdateMyProfileInfoForm from "../../basic/UpdateMyProfileInfoForm/UpdateMyProfileInfoForm";
import Preloader from "../../basic/Preloader/Preloader";

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
                           updateUserDates,
                           isProfileUpdate,
                           updateDoctorProfilePhoto,
                           errorMessage
                       }) => {

    const [editMode, setEditMode] = useState(false);
    console.log(isProfileUpdate);
    const onUserProfileUpdate = data => {
        updateUserDates(data);
        setEditMode(false)
    };

    const onUpdateDoctorAvatar = (e) => {
        if (e.target.files.length) {
            updateDoctorProfilePhoto(e.target.files[0])
        }

    };

    if (!isProfileUpdate) {
        return <Preloader/>
    }

    return (
        <div>
            {
                userRole === USER_ROLE.DOCTOR &&
                <div>
                    <img className={style.avatarBlock} src={`${configs.HOST}:${configs.PORT}/${avatar}`}
                         alt="avatar"/>
                    <input type="file" onChange={onUpdateDoctorAvatar}/>
                    {errorMessage && <div className={error.requiredStar}>{errorMessage}</div>}

                </div>
            }
            {
                !editMode && <div>

                    <p>{name}</p>
                    <p>{middleName}</p>
                    <p>{surname}</p>
                    <p>{age}</p>
                    <p>{city}</p>
                    <button onClick={() => {
                        setEditMode(true)
                    }}>редагувати
                    </button>
                </div>}

            {
                editMode && <div>


                    <UpdateMyProfileInfoReduxForm
                        onSubmit={onUserProfileUpdate}
                        initialValues={{name, middleName, surname, age, city}}
                        avatar={avatar} userRole={userRole}
                    />
                    <button onClick={() => {
                        setEditMode(false)
                    }}>Відмінити
                    </button>
                </div>
            }

        </div>

    )
};


export default MyProfileInfo;