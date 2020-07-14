import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {deleteMedicalService, getServicesFromDB} from "../../redux/reducers/serviceReducer/thunks";
import DeleteMedicalService from "../../components/pages/DeleteMedicalService/DeleteMedicalService";

const mapStateToProps = state => {
    return {
        isDeleted: state.serviceReducer.isDeleted,
        isLoading:  state.serviceReducer.isLoading,
        services:  state.serviceReducer.services
    }
};

const DeleteMedicalServiceWithRouter = withRouter(DeleteMedicalService);

export default connect(mapStateToProps,
    {
        getServicesFromDB,
        deleteMedicalService
    }
)(DeleteMedicalServiceWithRouter)