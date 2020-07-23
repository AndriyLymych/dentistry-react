import React, {useEffect} from "react";
import Preloader from "../../basic/Preloader/Preloader";
import ServiceCard from "../../basic/ServiceCard/ServiceCard";
import s from './OurServices.module.css'
import OurServicesAbout from "../../basic/OurDoctorsAbout/OurServicesAbout";
import CommonContacts from "../../basic/CommonContacts/CommonContacts";
import Footer from "../../basic/Footer/Footer";

const OurServices = ({isLoading, services, getServicesFromDB}) => {
    useEffect(() => {
        if (!services?.length) {
            getServicesFromDB()
        }
    }, [services]);

    return (
        <div >
            {
                isLoading ? <Preloader/> :
                   <div>
                       <OurServicesAbout/>
                       <div className={s.ourServicesContainer}>
                           {services.map(service => <ServiceCard key={service.id} service={service}/>)}
                       </div>
                       <CommonContacts/>
                       <Footer/>
                   </div>
            }
        </div>
    )
};

export default OurServices