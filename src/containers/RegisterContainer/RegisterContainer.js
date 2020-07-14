import {getGenders, registerPatient} from "../../redux/reducers/registerReducer/thunks";
import {registerAdmin} from "../../redux/reducers/adminReducer/thunks";
import {withRouter} from "react-router-dom";
import Register from "../../components/pages/Register/Register";
import {connect} from "react-redux";

const mapStateToProps = state => {

    return {
        isRegisterSuccess: state.registerReducer.isRegisterSuccess,
        genders: state.registerReducer.genders,
        registerLoading: state.registerReducer.registerLoading,
        isCreateByAdmin: state.adminReducer.isCreateByAdmin,
        errorMessage: state.registerReducer.registerErrMsg
    }
};

const RegisterWithRouter = withRouter(Register);

export default connect(mapStateToProps, {
    registerPatient,
    getGenders,
    registerAdmin
})(RegisterWithRouter)