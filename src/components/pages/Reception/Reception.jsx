import React, {useEffect} from "react";
import {reduxForm} from "redux-form";
import ReceptionForm from "../../basic/ReceptionForm/ReceptionForm";
import Preloader from "../../basic/Preloader/Preloader";

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
        <div>
            {
                !isReceptionSuccess ?
                    <div>
                        <div>Запис на прийом:</div>
                        <ReceptionReduxForm
                            onSubmit={onSubmit}
                            services={services}
                            isAuth={isAuth}
                        />
                    </div> :
                    <div>Запис пройшов успішно</div>
            }
        </div>
    )
};

export default Reception