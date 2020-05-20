import React from "react";
import Preloader from "../Preloader/Preloader";
import ServiceCard from "./ServiceCard/ServiceCard";

const OurServices = ({isLoading, services}) => {
    return (
        <div>
            {
                isLoading ? <Preloader/> :
               <div>
                   <p>Нашы послуги</p>
                   {services.map(service => <ServiceCard key={service.id} service={service}/>)}
               </div>
            }
        </div>
    )
};

export default OurServices