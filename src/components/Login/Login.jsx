import React from "react";
import {LoginForm} from "./LoginForm/LoginForm";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login, loginAdmin} from "../../redux/reducers/authReducer";
import {Redirect, withRouter} from "react-router-dom";

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);


const Login = props => {

    const onSubmit = data => {

        if (props.match.path === '/login') {
            props.login(data.email, data.password)
        }

        if (props.match.path === '/auth/admin') {
            props.loginAdmin(data.email, data.password)
        }
    };

    if (props.isAuth) {
        return <Redirect to={`/`}/>
    }


    return (
        <div>
            <h1>Увійти:</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )


};

const mapStateToProps = (state) => {

    return {

        userId: state.authReducer.id,
        isAuth: state.authReducer.isAuth,

    }

};

const LoginWithRouter = withRouter(Login);

export default connect(mapStateToProps, {login, loginAdmin})(LoginWithRouter)