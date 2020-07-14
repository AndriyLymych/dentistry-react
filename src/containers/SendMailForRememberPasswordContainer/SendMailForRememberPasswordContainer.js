import {connect} from "react-redux";
import {sendEmailForChangeForgotPassword} from "../../redux/reducers/authReducer/thunks";
import SendMailForRememberPassword
    from "../../components/pages/SendMailForRememberPassword/SendMailForRememberPassword";

const mapStateToProps = state => {
    return {
        isAuth: state.authReducer.isAuth,
        isSentMail: state.authReducer.isSentMail,
        isLoading: state.authReducer.isLoading,
        errorMessage: state.authReducer.sendMailErrMsg
    }
};

export default connect(mapStateToProps, {sendEmailForChangeForgotPassword})(SendMailForRememberPassword)