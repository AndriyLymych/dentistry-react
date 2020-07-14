import React from "react";
import {NavLink} from "react-router-dom";

const OurDoctorsCard = ({doctor: {id, name, surname,UserSpeciality:{label}}}) => {

    return (
        <div>

            <h1>{name}</h1>
            <h1>{surname}</h1>
            <div>{label}</div>
            <NavLink to={`/our-doctors/${id}`}>
                <button>Детальніше</button>
            </NavLink>


        </div>
    )
};

export default OurDoctorsCard