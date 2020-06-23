import React, {useState} from "react";
import {USER_ROLE} from "../../../constant/userConstant/userRole";
import {configs} from "../../../config/configs";
import style from "../../OurDoctors/OurDoctorsCard/DoctorProfile/DoctoreProfile.module.css";
import {reduxForm} from "redux-form";
import UpdateMyProfileInfoForm from "./UpdateMyProfileInfoForm/UpdateMyProfileInfoForm";
import {connect} from "react-redux";
import {updateDoctorProfilePhoto, updateUserDates} from "../../../redux/reducers/authReducer";
import {isProfileUpdateSelector} from "../../../redux/selectors/authSelectors";
import Preloader from "../../Preloader/Preloader";


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
                           updateDoctorProfilePhoto
                       }) => {

    const [editMode, setEditMode] = useState(false);

    const onUserProfileUpdate = data => {
        updateUserDates(data);
        setEditMode(false)
    };

    const onUpdateDoctorAvatar = (e) => {
        if (e.target.files.length) {
            const isUpdate = updateDoctorProfilePhoto(e.target.files[0]);
            Promise.all([isUpdate]).then(()=>{
                    window.location.reload()
                }
            );
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


const mapStateToProps = state => {
    return {
        isProfileUpdate: isProfileUpdateSelector(state)
    }
};


export default connect(mapStateToProps, {updateUserDates, updateDoctorProfilePhoto})(MyProfileInfo);