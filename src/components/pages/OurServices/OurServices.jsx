import React, {useEffect} from "react";
import Preloader from "../../basic/Preloader/Preloader";
import ServiceCard from "../../basic/ServiceCard/ServiceCard";

const OurServices = ({isLoading, services, getServicesFromDB}) => {
    useEffect(() => {
        if (!services?.length){
            getServicesFromDB()
        }
    }, [services]);

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