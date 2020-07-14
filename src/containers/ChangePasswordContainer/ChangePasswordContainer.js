import {connect} from "react-redux";
import {changeUserPassword} from "../../redux/reducers/authReducer/thunks";
import ChangePassword from "../../components/pages/ChangePassword/ChangePassword";


const mapStateToProps = state => {
    return {
        isPasswordChanged: state.authReducer.isPasswordChanged,
        isLoading: state.authReducer.isLoading,
        errorMessage: state.authReducer.changePasswordErrMsg
    }
};
export default connect(mapStateToProps, {changeUserPassword})(ChangePassword)