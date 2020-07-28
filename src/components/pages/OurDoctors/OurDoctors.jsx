import React, {useEffect} from "react";
import Preloader from "../../basic/Preloader/Preloader";
import OurDoctorsCard from "../../basic/OurDoctorsCard/OurDoctorsCard";
import s from './OurDoctors.module.css'
import Footer from "../../basic/Footer/Footer";
import CommonContacts from "../../basic/CommonContacts/CommonContacts";

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
                      <div className={s.ourDoctorsContainer}>
                          <h2 className={s.ourDoctorsTitle}>Наша команда</h2>
                          <div className={s.ourDoctorCard}>
                              {doctors.map(doctor => <OurDoctorsCard key={doctor.id} doctor={doctor}/>)}
                          </div>

                      </div>
                      <CommonContacts/>
                      <Footer/>
                  </div>
            }
        </div>
    )
};

export default OurDoctors