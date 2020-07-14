import React, {useEffect} from "react";
import Preloader from "../../basic/Preloader/Preloader";
import OurDoctorsCard from "../../basic/OurDoctorsCard/OurDoctorsCard";

const OurDoctors = ({isLoading, doctors, getDoctors}) => {

    useEffect(() => {
        if (!doctors.length){
            getDoctors()
        }
    }, [doctors]);

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
};

export default OurDoctors