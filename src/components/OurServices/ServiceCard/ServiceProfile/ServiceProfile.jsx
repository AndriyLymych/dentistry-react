import React from "react";
import Preloader from "../../../Preloader/Preloader";
import {NavLink} from "react-router-dom";

const ServiceProfile = ({isLoading, serviceProfile:{service,description,price}}) => {
    return (
        <div>
            {
                isLoading ? <Preloader/> :
                    <div>
                        <NavLink to={'/our-services'}>
                            <button>
                                назад
                            </button>
                        </NavLink>
                       <p>{service}</p>
                        <p>{description}</p>
                        <p>{price}</p>
                    </div>
            }
        </div>
    )
};

export default ServiceProfile