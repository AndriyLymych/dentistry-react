import React from "react";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import Preloader from "../Preloader/Preloader";
import {withRouter} from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import {
    getIsServiceDeletedSelector,
    getLoadingProgressSelector,
    getServicesSelector
} from "../../redux/selectors/serviceSelector";
import DeleteMedicalServiceForm from "./DeleteMedicalServiceForm/DeleteMedicalServiceForm";
import {deleteMedicalService, getServicesFromDB} from "../../redux/reducers/serviceReducer";

const AddMedicalServiceReduxForm = reduxForm({
    form: 'add-service'
})(DeleteMedicalServiceForm);


class DeleteMedicalService extends React.Component {

    componentDidMount() {
        this.props.getServicesFromDB()

    }

    render() {
        if (this.props.isLoading) {
            return <Preloader/>
        }
        const {isDeleted, deleteMedicalService} = this.props;

        const onSubmit = ({service_id:id}) => {
            deleteMedicalService(id)
        };

        return (
            <div>
                {
                    !isDeleted ?
                        <div>
                            <h1>Видалити медичну послугу:</h1>
                            <AddMedicalServiceReduxForm onSubmit={onSubmit} services={this.props.services}/>
                        </div> :
                        <Alert severity="success">Послуга успішно видалена!</Alert>
                }

            </div>
        )


    }
}

const mapStateToProps = state => {
    return {
        isDeleted: getIsServiceDeletedSelector(state),
        isLoading: getLoadingProgressSelector(state),
        services: getServicesSelector(state)
    }
};

const DeleteMedicalServiceWithRouter = withRouter(DeleteMedicalService);

export default connect(mapStateToProps,
    {
        getServicesFromDB,
        deleteMedicalService
    }
)(DeleteMedicalServiceWithRouter)