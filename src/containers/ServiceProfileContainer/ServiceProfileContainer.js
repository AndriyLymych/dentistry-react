import {compose} from "redux";
import {connect} from "react-redux";
import {getServiceProfile} from "../../redux/reducers/serviceProfileReducer/thunks";
import {withRouter} from "react-router-dom";
import {updateMedicalService, updateMedicalServicePhoto} from "../../redux/reducers/serviceReducer/thunks";
import ServiceProfile from "../../components/pages/ServiceProfile/ServiceProfile";


const mapStateToProps = state => {
    return {
        serviceProfile: state.serviceProfileReducer.serviceProfile,
        isLoading: state.serviceProfileReducer.isLoading,
        me: state.authReducer.me,
        isAuth: state.authReducer.isAuth,
        errorMessage: state.serviceReducer.updateMedicalServicePhotoErrMsg
    }
};

const ServiceProfileWithRouter = withRouter(ServiceProfile);

export default compose(connect(mapStateToProps, {
    getServiceProfile,
    updateMedicalService,
    updateMedicalServicePhoto
})(ServiceProfileWithRouter));