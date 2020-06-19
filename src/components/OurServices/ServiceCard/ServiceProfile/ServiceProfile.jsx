import React, {useState} from "react";
import Preloader from "../../../Preloader/Preloader";
import {NavLink} from "react-router-dom";
import style from "../../../OurDoctors/OurDoctorsCard/DoctorProfile/DoctoreProfile.module.css";
import {configs} from "../../../../config/configs";
import {USER_ROLE} from "../../../../constant/userConstant/userRole";
import {reduxForm} from "redux-form";
import UpdateMedicalServiceForm from "./UpdateMedicalServiceForm/UpdateMedicalServiceForm";

const UpdateMedicalServiceReduxForm = reduxForm({
    form: 'update-medical-service'
})(UpdateMedicalServiceForm);

const ServiceProfile = ({
                            isLoading,
                            serviceProfile: {
                                id,
                                photo,
                                service,
                                description,
                                price
                            },
                            userRole,
                            updateMedicalService
                        }) => {

    const [editMode, setEditMode] = useState(false);

    const onSubmit = data => {

        const isUpdate = updateMedicalService(data, id);

        if (isUpdate) {
            setEditMode(!editMode)
        }
    };

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

                        <div>
                            <div>
                                <img className={style.avatarBlock} src={`${configs.HOST}:${configs.PORT}/${photo}`}
                                     alt="ava"/>
                            </div>
                            {!editMode &&
                            <div>
                                <p>{service}</p>
                                <p>{description}</p>
                                <p>{price}</p>
                            </div>
                            }

                        </div>

                        {!editMode && userRole === USER_ROLE.ADMIN &&
                        <button onClick={() => {
                            setEditMode(!editMode);
                        }}>Редагувати послугу</button>
                        }
                        {editMode && userRole === USER_ROLE.ADMIN &&
                        <div>
                            < UpdateMedicalServiceReduxForm
                                onSubmit={onSubmit}
                                initialValues={{service, description, price}}/>
                            <button onClick={() => {
                                setEditMode(!editMode);
                            }}>Відхилити
                            </button>
                        </div>
                        }
                    </div>
            }


        </div>
    )
};

export default ServiceProfile