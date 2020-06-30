import React from "react";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {registerPatient, getGenders} from "../../redux/reducers/registerReducer";
import RegisterForm from "./RegisterForm/RegisterForm";
import {
    getAllGendersSelector,
    getIsRegisterSuccessSelector, getRegisterLoadingSelector
} from "../../redux/selectors/registerSelectors";
import {registerAdmin} from "../../redux/reducers/adminReducer";
import Preloader from "../Preloader/Preloader";
import {withRouter} from "react-router-dom";

import Alert from "@material-ui/lab/Alert";
import {getIsCreateByAdmin} from "../../redux/selectors/adminSelectors";
import {getErrorMsgSelector} from "../../redux/selectors/errorSelectors";

const RegisterReduxForm = reduxForm({
    form: 'register'
})(RegisterForm);


class Register extends React.Component {

    componentDidMount() {
        this.props.getGenders();


    }

    render() {
        if (!this.props.registerLoading) {
            return <Preloader/>
        }
        if (this.props.isCreateByAdmin) {
            return <Preloader/>
        }
        const {registerPatient, isRegisterSuccess, registerAdmin, errorMessage} = this.props;


        const onSubmit = data => {
            if (this.props.match.path === '/register') {
                registerPatient(data)
            }
            if (this.props.match.path === '/my-profile/register-admin') {
                registerAdmin(data)
            }


        };
        return (
            <div>
                {
                    !isRegisterSuccess &&
                    (this.props.match.path === '/my-profile/register-admin' || this.props.match.path === '/register') ?
                        <div>
                            <h1>Реєстрація:</h1>
                            <RegisterReduxForm onSubmit={onSubmit} genders={this.props.genders}
                                               errorMessage={errorMessage}/>
                        </div> :
                        <Alert severity="success">Реєстрація пройшла успішно!</Alert>
                }

            </div>
        )


    }
}


const mapStateToProps = state => {
    return {
        isRegisterSuccess: getIsRegisterSuccessSelector(state),
        genders: getAllGendersSelector(state),
        registerLoading: getRegisterLoadingSelector(state),
        isCreateByAdmin: getIsCreateByAdmin(state),
        errorMessage: getErrorMsgSelector(state)
    }
};

const RegisterWithRouter = withRouter(Register);

export default connect(mapStateToProps, {
    registerPatient,
    getGenders,
    registerAdmin,

})(RegisterWithRouter)