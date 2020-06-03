import React, {useState} from "react";
import {SendMailForRememberPasswordForm} from "./SendMailForRememberPasswordForm/SendMailForRememberPasswordForm";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {sendEmailForChangeForgotPassword} from "../../../redux/reducers/authReducer";
import {isAuthSelector} from "../../../redux/selectors/authSelectors";

const SendMailForRememberPasswordReduxForm = reduxForm({
    form: 'refresh-password'
})(SendMailForRememberPasswordForm);


const SendMailForRememberPassword = props => {

    const [sendMail,setSendMail]= useState(false);
    const [email,setEmail] = useState(null);

    const onSubmit = data => {

        props.sendEmailForChangeForgotPassword(data);
        setEmail(data.email);
        setSendMail(true);
    };

    if (props.isAuth) {
        return <Redirect to={`/`}/>
    }

    return (
        <div>
            {
                !sendMail ?
                    <div>
                        <h1>Введіть ваш емейл:</h1>
                        <SendMailForRememberPasswordReduxForm onSubmit={onSubmit} />
                    </div>:

                    <h1>Повідомлення по зміні паролю надіслане на електронну адресу <i>{email}</i></h1>

            }
        </div>
    )


};

const mapStateToProps = state => {
    return {
        isAuth: isAuthSelector(state)
    }
};

export default connect(mapStateToProps, {sendEmailForChangeForgotPassword})(SendMailForRememberPassword)