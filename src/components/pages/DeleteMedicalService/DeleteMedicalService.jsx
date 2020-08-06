import React, {useEffect} from "react";
import {reduxForm} from "redux-form";
import Preloader from "../../basic/Preloader/Preloader";
import DeleteMedicalServiceForm from "../../basic/DeleteMedicalServiceForm/DeleteMedicalServiceForm";
import style from './DeleteMedicalService.module.css'
import img from '../../../assets/img/deleteService.png'

const AddMedicalServiceReduxForm = reduxForm({
    form: 'delete-service'
})(DeleteMedicalServiceForm);


const DeleteMedicalService = ({isDeleted, isLoading, services, getServicesFromDB, deleteMedicalService}) => {

    useEffect(() => {
        if (!services.length) {
            getServicesFromDB()
        }
    }, [services]);

    if (isLoading) {
        return <Preloader/>
    }

    const onSubmit = ({service_id: id}) => {
        deleteMedicalService(id)
    };

    return (
        <div className={style.deleteServiceContainer}>
            {
                !isDeleted ?
                    <div className={style.deleteServiceInfo}>
                        <div className={style.deleteServiceData}>
                            <div className={style.deleteServiceTitle}>Видалити медичну послугу:</div>
                            <AddMedicalServiceReduxForm onSubmit={onSubmit} services={services}/>
                        </div>
                        <img src={img} className={style.deleteServiceImg} alt=""/>
                    </div> :
                    <div className={style.sentSuccess}>Послугу успішно видалено!</div>
            }

        </div>
    )

};

export default DeleteMedicalService;