import React from "react";
import Preloader from "../../../Preloader/Preloader";

const ServiceProfile = ({isLoading, serviceProfile:{service,description,price}}) => {
    return (
        <div>
            {
                isLoading ? <Preloader/> :
                    <div>
                       <p>{service}</p>
                        <p>{description}</p>
                        <p>{price}</p>
                    </div>
            }
        </div>
    )
};

export default ServiceProfile