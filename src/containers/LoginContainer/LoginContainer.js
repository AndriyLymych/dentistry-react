import {connect} from "react-redux";
import {login, loginAdmin} from "../../redux/reducers/authReducer/thunks";
import {withRouter} from "react-router-dom";
import Login from "../../components/pages/Login/Login";
import {loginWithFacebook, loginWithGoogle} from "../../redux/reducers/authReducer/thunks";

const mapStateToProps = state => {

    return {

        isAuth: state.authReducer.isAuth,
        isLoading: state.authReducer.isLoading,
        errorMessage: state.authReducer.loginErrMsg,
        adminErrorMessage: state.authReducer.loginAdminErrMsg,

    }
};

const LoginWithRouter = withRouter(Login);

export default connect(mapStateToProps, {login, loginAdmin,loginWithFacebook,loginWithGoogle})(LoginWithRouter)