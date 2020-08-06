import React from "react";
import {NavLink} from "react-router-dom";
import s from './OurDoctorsCard.module.css'
import {configs} from "../../../config/configs";

const OurDoctorsCard = ({doctor: {avatar, id, name, surname, UserSpeciality}}) => {

    return (
        <div className={s.docInfo}>
            <img className={s.docAva} src={`${configs.HOST}:${configs.PORT}/${avatar}`} alt=""/>
            <div className={s.nameContainer}>
                <div className={s.docName}>{name}</div>
                <div className={s.docName}>{surname}</div>
            </div>
            <div className={s.docSpec}>{UserSpeciality?.label}</div>
            <NavLink className={s.docMoreInfo} to={`/our-doctors/${id}`}>
                Детальніше
            </NavLink>

        </div>
    )
};

export default OurDoctorsCard