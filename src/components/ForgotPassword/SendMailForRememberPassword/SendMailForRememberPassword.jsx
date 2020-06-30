import React, {useState} from "react";
import {SendMailForRememberPasswordForm} from "./SendMailForRememberPasswordForm/SendMailForRememberPasswordForm";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {sendEmailForChangeForgotPassword} from "../../../redux/reducers/authReducer";
import {isAuthSelector, isLoadingSelector, isSentMailSelector} from "../../../redux/selectors/authSelectors";
import Preloader from "../../Preloader/Preloader";
import {getErrorMsgSelector} from "../../../redux/selectors/errorSelectors";

const SendMailForRememberPasswordReduxForm = reduxForm({
    form: 'refresh-password'
})(SendMailForRememberPasswordForm);


const SendMailForRememberPassword = props => {

    const [email, setEmail] = useState(null);

    const onSubmit = data => {

        props.sendEmailForChangeForgotPassword(data);
        setEmail(data.email);

    };

    if (props.isAuth) {
        return <Redirect to={`/`}/>
    }

    if (props.isLoading){
        return <Preloader/>
    }

    return (
        <div>
            {
                !props.isSentMail ?
                    <div>
                        <h1>Введіть ваш емейл:</h1>
                        <SendMailForRememberPasswordReduxForm onSubmit={onSubmit} errorMessage={props.errorMessage}/>
                    </div> :

                    <h1>Повідомлення по зміні паролю надіслане на електронну адресу <i>{email}</i></h1>

            }

        </div>
    )


};

const mapStateToProps = state => {
    return {
        isAuth: isAuthSelector(state),
        isSentMail: isSentMailSelector(state),
        isLoading:isLoadingSelector(state),
        errorMessage: getErrorMsgSelector(state)
    }
};

export default connect(mapStateToProps, {sendEmailForChangeForgotPassword})(SendMailForRememberPassword)