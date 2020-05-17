import React from "react";

const OurDoctors = (props) => {
    return (
        <div>
            <div>Лікарі:</div>

            {props.doctors.map(doctor => <div>{doctor.name}</div>)}
        </div>
    )
}

export default OurDoctors