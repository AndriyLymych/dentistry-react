import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getGenders} from "../../redux/reducers/registerReducer/thunks";
import {registerDoctor} from "../../redux/reducers/adminReducer/thunks";
import {getSpecialities} from "../../redux/reducers/doctorReducer/thunks";
import RegisterDoctor from "../../components/pages/RegisterDoctor/RegisterDoctor";

const mapStateToProps = state => {
    return {
        genders: state.registerReducer.genders,
        isCreateByAdmin: state.adminReducer.isCreateByAdmin,
        specialities: state.doctorReducer.specialities,
        isRegisterDoctorSuccess: state.adminReducer.isRegisterDoctorSuccess,
        errorMessage: state.adminReducer.registerDoctorErrMsg
    }
};

const RegisterDoctorWithRouter = withRouter(RegisterDoctor);

export default connect(mapStateToProps, {
    getGenders,
    registerDoctor,
    getSpecialities
})(RegisterDoctorWithRouter)