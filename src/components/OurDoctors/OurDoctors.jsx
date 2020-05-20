import React from "react";
import Preloader from "../Preloader/Preloader";
import OurDoctorsCard from "./OurDoctorsCard/OurDoctorsCard";

const OurDoctors = ({isLoading, doctors}) => {
    return (
        <div>
            {
                isLoading ?
                    <Preloader/> :

                    <div>
                        <div>Нашы лыкары</div>
                        {doctors.map(doctor => <OurDoctorsCard key={doctor.id} doctor={doctor}/>)}
                    </div>

            }
            </div>
    )
}

export default OurDoctors