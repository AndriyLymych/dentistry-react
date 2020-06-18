import React from "react";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import Preloader from "../Preloader/Preloader";
import {withRouter} from "react-router-dom";

import Alert from "@material-ui/lab/Alert";
import AddMedicalServiceForm from "./AddMedicalServiceForm/AddMedicalServiceForm";
import {addMedicalService} from "../../redux/reducers/serviceReducer";
import {getIsServiceWorkDoneSelector} from "../../redux/selectors/serviceSelector";
import {getLoadingProgressSelector} from "../../redux/selectors/doctorSelectors";

const AddMedicalServiceReduxForm = reduxForm({
    form: 'add-service'
})(AddMedicalServiceForm);


class AddMedicalService extends React.Component {


    render() {
        if (this.props.isLoading) {
            return <Preloader/>
        }
        const {addMedicalService, isServiceWorkDone} = this.props;

        const onSubmit = data => {
            console.log(data.photo[0]);
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


    }
}


const mapStateToProps = state => {
    return {
        isServiceWorkDone: getIsServiceWorkDoneSelector(state),
        isLoading: getLoadingProgressSelector(state),
    }
};

const AddMedicalServiceWithRouter = withRouter(AddMedicalService);

export default connect(mapStateToProps, {
    addMedicalService
})(AddMedicalServiceWithRouter)