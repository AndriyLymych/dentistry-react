import React, {useEffect} from "react";
import {reduxForm} from "redux-form";
import Preloader from "../../basic/Preloader/Preloader";
import Alert from "@material-ui/lab/Alert";
import DeleteMedicalServiceForm from "../../basic/DeleteMedicalServiceForm/DeleteMedicalServiceForm";

const AddMedicalServiceReduxForm = reduxForm({
    form: 'delete-service'
})(DeleteMedicalServiceForm);


const DeleteMedicalService = ({isDeleted, isLoading, services,getServicesFromDB,deleteMedicalService}) => {

    useEffect(()=>{
        if (!services.length){
            getServicesFromDB()
        }
    },[services]);

    if (isLoading) {
        return <Preloader/>
    }

    const onSubmit = ({service_id: id}) => {
        deleteMedicalService(id)
    };

    return (
        <div>
            {
                !isDeleted ?
                    <div>
                        <h1>Видалити медичну послугу:</h1>
                        <AddMedicalServiceReduxForm onSubmit={onSubmit} services={services}/>
                    </div> :
                    <Alert severity="success">Послуга успішно видалена!</Alert>
            }

        </div>
    )

};

export default DeleteMedicalService;