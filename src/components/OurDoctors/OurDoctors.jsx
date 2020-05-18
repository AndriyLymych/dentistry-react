import React from "react";

const OurDoctors = (props) => {
    return (
        <div>
            <div>Лікарі:</div>

            {props.doctors.map(doctor =>
                <div key={doctor.id}>
                    <h1>{doctor.name}</h1>
                    <h1>{doctor.surname}</h1>
                    <img src={doctor.avatar} alt="" height={'100px'} width={'100px'}/>
                    <div>{doctor.UserSpeciality.label}</div>
                </div>
            )}
        </div>
    )
}

export default OurDoctors