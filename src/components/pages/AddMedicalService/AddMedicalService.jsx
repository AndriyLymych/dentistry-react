import React from "react";
import {reduxForm} from "redux-form";
import Preloader from "../../basic/Preloader/Preloader";
import AddMedicalServiceForm from "../../basic/AddMedicalServiceForm/AddMedicalServiceForm";
import style from './AddMedicalService.module.css';
import serviceImg from '../../../assets/img/newService.png'

const AddMedicalServiceReduxForm = reduxForm({
    form: 'add-service'
})(AddMedicalServiceForm);


const AddMedicalService = ({addMedicalService, isServiceWorkDone, isLoading, error}) => {

    if (isLoading) {
        return <Preloader/>
    }

    const onSubmit = data => {
        addMedicalService(data.service, data.small_description, data.description, data.photo[0], data.price)
    };

    return (
        <div>
            {
                !isServiceWorkDone ?
                    <div className={style.changePasswordContainer}>
                        <div>
                            <div className={style.changePasswordTitle}>Додати послугу:</div>
                            <AddMedicalServiceReduxForm error={error} onSubmit={onSubmit}/>
                        </div>
                        <img className={style.serviceImg} src={serviceImg} alt=""/>
                    </div> :
                    <div className={style.success}>Послуга успішно додана!</div>
            }

        </div>
    )
};

export default AddMedicalService;