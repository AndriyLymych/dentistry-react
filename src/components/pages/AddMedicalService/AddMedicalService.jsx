import React from "react";
import {reduxForm} from "redux-form";
import Preloader from "../../basic/Preloader/Preloader";
import AddMedicalServiceForm from "../../basic/AddMedicalServiceForm/AddMedicalServiceForm";
import s from '../ChangePassword/ChangePassword.module.css';
import style from './AddMedicalService.module.css';
import serviceImg from '../../../assets/img/newService.png'

const AddMedicalServiceReduxForm = reduxForm({
    form: 'add-service'
})(AddMedicalServiceForm);


const AddMedicalService = ({addMedicalService, isServiceWorkDone, isLoading}) => {

    if (isLoading) {
        return <Preloader/>
    }

    const onSubmit = data => {
        addMedicalService(data.service, data.small_description, data.description, data.photo?.[0], data.price)
    };

    return (
        <div>
            {
                !isServiceWorkDone ?
                    <div className={s.changePasswordContainer}>
                        <div>
                            <div className={s.changePasswordTitle}>Додати послугу:</div>
                            <AddMedicalServiceReduxForm onSubmit={onSubmit}/>
                        </div>
                        <img className={style.serviceImg} src={serviceImg} alt=""/>
                    </div> :
                    <div className={s.success}>Послуга успішно додана!</div>
            }

        </div>
    )
};

export default AddMedicalService;