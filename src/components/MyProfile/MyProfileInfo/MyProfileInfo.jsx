import React, {useState} from "react";
import {USER_ROLE} from "../../../constant/userConstant/userRole";
import {configs} from "../../../config/configs";
import style from "../../OurDoctors/OurDoctorsCard/DoctorProfile/DoctoreProfile.module.css";

const MyProfileInfo = ({
                           me: {
                               name,
                               middleName,
                               surname,
                               age,
                               city,
                               avatar,
                               UserRole: {
                                   label: userRole
                               }
                           }
                       }) => {

    const [editMode, setEditMode] = useState(false);

    return (
        <div>
            {
                userRole === USER_ROLE.DOCTOR &&
                <img className={style.avatarBlock} src={`${configs.HOST}:${configs.PORT}/${avatar}`} alt="avatar"/>
            }
            <p>{name}</p>
            <p>{middleName}</p>
            <p>{surname}</p>
            <p>{age}</p>
            <p>{city}</p>
        </div>
    )
};

export default MyProfileInfo;