import React, {useEffect, useState} from "react";
import Preloader from "../../basic/Preloader/Preloader";
import {NavLink} from "react-router-dom";
import style from "../DoctorProfile/DoctoreProfile.module.css";
import {configs} from "../../../config/configs";
import {USER_ROLE} from "../../../constant/userConstant/userRole";
import {reduxForm} from "redux-form";
import UpdateMedicalServiceForm from "../../basic/UpdateMedicalServiceForm/UpdateMedicalServiceForm";
import UpdateMedicalServicePhotoForm from "../../basic/UpdateMedicalServicePhotoForm/UpdateMedicalServiceFormPhoto";
import {getServiceProfile} from "../../../redux/reducers/serviceProfileReducer/thunks";

const UpdateMedicalServiceReduxForm = reduxForm({
    form: 'update-medical-service'
})(UpdateMedicalServiceForm);

const UpdateMedicalServicePhotoReduxForm = reduxForm({
    form: 'update-medical-service-photo'
})(UpdateMedicalServicePhotoForm);

const ServiceProfile = ({
                            isLoading,
                            serviceProfile,
                            serviceProfile: {
                                id,
                                photo,
                                service,
                                description,
                                price
                            },
                            me,
                            updateMedicalService,
                            updateMedicalServicePhoto,
                            isAuth,
                            errorMessage,
                            match,
                            getServiceProfile
                        }) => {

    useEffect(() => {

        const id = match.params.id;

        if (!serviceProfile.length){
            getServiceProfile(id)
        }

    }, []);

    const [editMode, setEditMode] = useState(false);

    const onSubmit = data => {

        const isUpdate = updateMedicalService(data, id);

        if (isUpdate) {
            setEditMode(!editMode)
        }
    };
    const onPhotoChange = data => {

        updateMedicalServicePhoto(data.photo[0], id);

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
                                {
                                    isAuth && me.UserRole.label === USER_ROLE.ADMIN &&
                                    <UpdateMedicalServicePhotoReduxForm onChange={onPhotoChange}
                                                                        errorMessage={errorMessage}/>
                                }
                            </div>
                            {!editMode &&
                            <div>
                                <p>{service}</p>
                                <p>{description}</p>
                                <p>{price}</p>
                            </div>
                            }

                        </div>

                        {isAuth && !editMode && me.UserRole.label === USER_ROLE.ADMIN &&
                        <button onClick={() => {
                            setEditMode(!editMode);
                        }}>Редагувати послугу</button>
                        }
                        {isAuth && editMode && me.UserRole.label === USER_ROLE.ADMIN &&
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