import React from "react";
import {reduxForm} from "redux-form";
import Preloader from "../../basic/Preloader/Preloader";
import Alert from "@material-ui/lab/Alert";
import AddMedicalServiceForm from "../../basic/AddMedicalServiceForm/AddMedicalServiceForm";


const AddMedicalServiceReduxForm = reduxForm({
    form: 'add-service'
})(AddMedicalServiceForm);


const AddMedicalService = ({addMedicalService, isServiceWorkDone, isLoading}) => {

    if (isLoading) {
        return <Preloader/>
    }

    const onSubmit = data => {
        addMedicalService(data.service, data.description, data.photo[0], data.price)
    };

    return (
        <div>
            {
                !isServiceWorkDone ?
                    <div>
                        <h1>Додати послугу:</h1>
                        <AddMedicalServiceReduxForm onSubmit={onSubmit}/>
                    </div> :
                    <Alert severity="success">Послуга успішно додана!</Alert>
            }

        </div>
    )
};

export default AddMedicalService;