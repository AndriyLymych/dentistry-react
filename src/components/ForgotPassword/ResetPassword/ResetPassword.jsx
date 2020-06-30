import React, {useState} from "react";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {NavLink, Redirect, withRouter} from "react-router-dom";
import {resetUserPassword} from "../../../redux/reducers/authReducer";
import {isAuthSelector, isLoadingSelector, isResetPasswordSelector} from "../../../redux/selectors/authSelectors";
import {ResetPasswordForm} from "./ResetPasswordForm/ResetPasswordForm";
import {getErrorMsgSelector} from "../../../redux/selectors/errorSelectors";
import Preloader from "../../Preloader/Preloader";

const ResetPasswordReduxForm = reduxForm({
    form: 'reset-password'
})(ResetPasswordForm);


const ResetPassword = props => {


    const onSubmit = data => {
        const token = props.match.params.token;
        props.resetUserPassword(data, token);

    };

    if (props.isAuth) {
        return <Redirect to={`/`}/>
    }

    if (props.isLoading) {
        return <Preloader/>
    }

    return (
        <div>
            {
                !props.isResetPassword ?
                    <div>
                        <h1>Зміна паролю:</h1>
                        <ResetPasswordReduxForm onSubmit={onSubmit} errorMessage={props.errorMessage}/>
                    </div> :

                    <div>
                        <p>Пароль успішно змінено!</p>
                        <button><NavLink to={"/login"}>Авторизуватись</NavLink></button>
                    </div>

            }
        </div>
    )


};

const mapStateToProps = state => {
    return {
        isAuth: isAuthSelector(state),
        isResetPassword: isResetPasswordSelector(state),
        isLoading: isLoadingSelector(state),
        errorMessage: getErrorMsgSelector(state)
    }
};
const ResetPasswordWithRouter = withRouter(ResetPassword);

export default connect(mapStateToProps, {resetUserPassword})(ResetPasswordWithRouter)