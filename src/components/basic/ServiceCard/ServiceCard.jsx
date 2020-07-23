import React from "react";
import {NavLink} from "react-router-dom";
import s from './ServiceCard.module.css'
import {configs} from "../../../config/configs";

const ServiceCard = ({service: {photo, small_description, id, service}}) => {
    return (
        <div className={s.serviceCardContainer}>
            <img className={s.serviceImg} src={`${configs.HOST}:${configs.PORT}/${photo}`} alt=""/>
            <div className={s.serviceInfo}>
                <h2 className={s.serviceInfoTitle}>{service}</h2>
                <p className={s.serviceInfoDesc}>{small_description}</p>
                <NavLink className={s.serviceInfoBtn} to={`/our-services/${id}`}>
                    Детальніше
                </NavLink>
            </div>
        </div>
    )
};

export default ServiceCard