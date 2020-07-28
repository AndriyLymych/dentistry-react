import React, {useEffect, useState} from "react";
import Preloader from "../../basic/Preloader/Preloader";
import {NavLink} from "react-router-dom";
import style from "../DoctorProfile/DoctoreProfile.module.css";
import {configs} from "../../../config/configs";
import {USER_ROLE} from "../../../constant/userConstant/userRole";
import {reduxForm} from "redux-form";
import UpdateMedicalServiceForm from "../../basic/UpdateMedicalServiceForm/UpdateMedicalServiceForm";
import UpdateMedicalServicePhotoForm from "../../basic/UpdateMedicalServicePhotoForm/UpdateMedicalServiceFormPhoto";
import s from './ServiceProfile.module.css';
import Footer from "../../basic/Footer/Footer";
import Button from "@material-ui/core/Button";
import CancelIcon from '@material-ui/icons/Cancel';

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

        if (!serviceProfile.length) {
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
                    <div className={s.serviceContainer}>
                        <NavLink className={s.backBtn} to={'/our-services'}>
                            назад
                        </NavLink>

                        <div className={s.profileContainer}>
                            <div className={s.avatarBlock}>
                                <img className={s.avatar}
                                     src={`${configs.HOST}:${configs.PORT}/${photo}`}
                                     alt="ava"/>
                                {
                                    isAuth && me.UserRole.label === USER_ROLE.ADMIN && <div className={s.editPhoto}>
                                        <UpdateMedicalServicePhotoReduxForm onChange={onPhotoChange}
                                                                            errorMessage={errorMessage}/>
                                    </div>

                                }
                            </div>
                            <div className={s.profileInfo}>

                                {!editMode &&
                                <div >
                                    <p className={s.profileInfoTitle}>{service}</p>
                                    <p className={s.profileInfoText}>{description}</p>
                                    {price > 0 ?
                                        <p className={s.profileInfoText}><i>Ціна: від <strong>{price} </strong>грн</i>
                                        </p> :
                                        <p className={s.profileInfoText}><i>Ціна: <strong>безкоштовно</strong></i></p>}
                                </div>
                                }
                                {isAuth && !editMode && me.UserRole.label === USER_ROLE.ADMIN &&
                                <button className={s.editBtn} onClick={() => {
                                    setEditMode(!editMode);
                                }}>Редагувати послугу</button>
                                }
                                {isAuth && editMode && me.UserRole.label === USER_ROLE.ADMIN &&
                                <div className={s.updateForm}>
                                    < UpdateMedicalServiceReduxForm
                                        onSubmit={onSubmit}
                                        initialValues={{service, description, price}}/>

                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        startIcon={<CancelIcon/>}
                                        onClick={() => setEditMode(!editMode)}
                                    >
                                        Відхилити
                                    </Button>
                                </div>
                                }
                            </div>

                        </div>


                    </div>
            }

            <Footer/>
        </div>

    )
};

export default ServiceProfile