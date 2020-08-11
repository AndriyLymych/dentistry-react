import React, {useEffect} from "react";
import {reduxForm} from "redux-form";
import ReceptionForm from "../../basic/ReceptionForm/ReceptionForm";
import Preloader from "../../basic/Preloader/Preloader";
import style from './Reception.module.css';
import receptionImg from '../../../assets/img/reception.png';

const ReceptionReduxForm = reduxForm({
    form: 'reception'
})(ReceptionForm);


const Reception = ({receptionPatient, isReceptionSuccess, isReceptionLoading, getServicesFromDB, isAuth, services}) => {

    useEffect(() => {
        if (!services.length){
            getServicesFromDB()
        }
    }, [services]);

    if (isReceptionLoading) {
        return <Preloader/>
    }
    const onSubmit = data => {
        receptionPatient(data)
    };

    return (
        <div className={style.receptionContainer}>
            {
                !isReceptionSuccess ?
                   <div className={style.receptionInfo}>
                       <div>
                           <div className={style.receptionTitle}>Запис на прийом:</div>
                           <ReceptionReduxForm
                               onSubmit={onSubmit}
                               services={services}
                               isAuth={isAuth}
                           />
                       </div>
                       <img className={style.receptionImg} src={receptionImg} alt=""/>
                   </div> :
                    <div className={style.receptionSuccess}>Запис пройшов успішно!</div>
            }
        </div>
    )
};

export default Reception