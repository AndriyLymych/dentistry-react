import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {addMedicalService} from "../../redux/reducers/serviceReducer/thunks";
import AddMedicalService from "../../components/pages/AddMedicalService/AddMedicalService";

const mapStateToProps = state => {
    return {
        isServiceWorkDone: state.serviceReducer.isServiceWorkDone,
        isLoading: state.serviceReducer.isLoading,
        error: state.serviceReducer.addMedicalServicePhotoErrMsg,
    }
};
const AddMedicalServiceWithRouter = withRouter(AddMedicalService);

export default connect(mapStateToProps, {
    addMedicalService
})(AddMedicalServiceWithRouter)