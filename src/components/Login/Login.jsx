import React from "react";
import {LoginForm} from "./LoginForm/LoginForm";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../redux/reducers/authReducer";
import {Redirect} from "react-router";

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);


const Login = props => {

    const onSubmit = data => {
        props.login(data.email, data.password)
    };

    if (props.isAuth) {
        return <Redirect to={`/`}/>
    }

    return (
        <div>
            <h1>Увійти:</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )


};

const mapStateToProps = (state) => {

    return {
        userId: state.authReducer.id,
        isAuth: state.authReducer.isAuth,

    }

};
export default connect(mapStateToProps, {login})(Login)