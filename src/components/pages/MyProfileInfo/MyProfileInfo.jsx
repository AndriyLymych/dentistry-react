import React, {useState} from "react";
import {USER_ROLE} from "../../../constant/userConstant/userRole";
import {configs} from "../../../config/configs";
import error from "../../../App.module.css";
import {reduxForm} from "redux-form";
import UpdateMyProfileInfoForm from "../../basic/UpdateMyProfileInfoForm/UpdateMyProfileInfoForm";
import Preloader from "../../basic/Preloader/Preloader";
import style from './MyProfileInfo.module.css'
import infoImg from '../../../assets/img/infoImg.png'

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
        <div className={style.infoContainer}>
            <div className={style.infoData}>
                {
                    userRole === USER_ROLE.DOCTOR &&
                    <div  className={style.avatarBlock}>
                        <img  className={style.ava} src={`${configs.HOST}:${configs.PORT}/${avatar}`}
                              alt="avatar"/>
                       <div className={style.changePhoto}>
                           <input  type="file" onChange={onUpdateDoctorAvatar}/>
                       </div>
                        {errorMessage && <div className={error.requiredStar}>{errorMessage}</div>}

                    </div>
                }
                {
                    !editMode && <div className={style.majorInfo}>
                        <div className={style.infoTitle}>Інформація про мене:</div>
                        <p className={style.infoItem}>{name}</p>
                        <p className={style.infoItem}>{middleName}</p>
                        <p className={style.infoItem}>{surname}</p>
                        <p className={style.infoItem}>{age} р.</p>
                        <p className={style.infoItem}>м.{city}</p>
                        <button className={style.editInfo} onClick={() => {
                            setEditMode(true)
                        }}>Редагувати
                        </button>
                    </div>}

                {
                    editMode && <div>
                        <div className={style.infoTitle}>Інформація про мене:</div>
                        <UpdateMyProfileInfoReduxForm
                            onSubmit={onUserProfileUpdate}
                            initialValues={{name, middleName, surname, age, city}}
                            avatar={avatar} userRole={userRole}
                        />
                        <button className={style.cancel} onClick={() => {
                            setEditMode(false)
                        }}>Відмінити
                        </button>
                    </div>
                }
            </div>
            <img src={infoImg} alt=""/>
        </div>

    )
};


export default MyProfileInfo;