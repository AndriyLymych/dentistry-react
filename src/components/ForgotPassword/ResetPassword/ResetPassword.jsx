import React, {useState} from "react";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {NavLink, Redirect, withRouter} from "react-router-dom";
import {resetUserPassword} from "../../../redux/reducers/authReducer";
import {isAuthSelector} from "../../../redux/selectors/authSelectors";
import {ResetPasswordForm} from "./ResetPasswordForm/ResetPasswordForm";

const ResetPasswordReduxForm = reduxForm({
    form: 'reset-password'
})(ResetPasswordForm);


const ResetPassword = props => {

    const [isReset, setIsReset] = useState(false);

    const onSubmit = data => {
        const token = props.match.params.token;
        props.resetUserPassword(data,token);
        setIsReset(true)

    };

    if (props.isAuth) {
        return <Redirect to={`/`}/>
    }

    return (
        <div>
            {
                !isReset ?
                    <div>
                        <h1>Зміна паролю:</h1>
                        <ResetPasswordReduxForm onSubmit={onSubmit}/>
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
        isAuth: isAuthSelector(state)
    }
};
const ResetPasswordWithRouter = withRouter(ResetPassword);

export default connect(mapStateToProps, {resetUserPassword})(ResetPasswordWithRouter)