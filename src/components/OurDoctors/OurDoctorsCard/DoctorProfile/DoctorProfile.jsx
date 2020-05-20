import React from "react";
import Preloader from "../../../Preloader/Preloader";

const DoctorProfile = ({isLoading, doctorProfile:{name,middleName,surname,price}}) => {
    return (
        <div>
            {
                isLoading ? <Preloader/> :
                    <div>
                        <p>{name}</p>
                        <p>{middleName}</p>
                        <p>{surname}</p>
                        <p>{price}</p>
                    </div>
            }
        </div>
    )
};

export default DoctorProfile