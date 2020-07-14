import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {resetUserPassword} from "../../redux/reducers/authReducer/thunks";
import ResetPassword from "../../components/pages/ResetPassword/ResetPassword";

const mapStateToProps = state => {
    return {
        isAuth: state.authReducer.isAuth,
        isResetPassword: state.authReducer.isResetPassword,
        isLoading: state.authReducer.isLoading,
        errorMessage: state.authReducer.resetPasswordErrMsg
    }
};
const ResetPasswordWithRouter = withRouter(ResetPassword);

export default connect(mapStateToProps, {resetUserPassword})(ResetPasswordWithRouter)