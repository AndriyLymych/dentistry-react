import React from "react";
import {NavLink} from "react-router-dom";

const ServiceCard = ({service: {id,service, price}}) => {
    return (
        <div>
            <h2>{service}</h2>
            <h6>{price}</h6>
           <NavLink to={`/our-services/${id}`} ><button>Детальніше</button></NavLink>
        </div>
    )
};

export default ServiceCard