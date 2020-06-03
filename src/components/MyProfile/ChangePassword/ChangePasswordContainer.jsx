import React from "react";
import {ChangePasswordForm} from "./ChangePasswordForm/ChangePasswordForm";
import {connect} from "react-redux";
import {changeUserPassword} from "../../../redux/reducers/authReducer";
import {isPasswordChangedSelector} from "../../../redux/selectors/authSelectors";
import {reduxForm} from "redux-form";


const ChangePasswordReduxForm = reduxForm({
    form: 'change-password'
})(ChangePasswordForm);


class ChangePasswordContainer extends React.Component {



    render() {
       const onSubmit = data => {

            this.props.changeUserPassword(data)
        };
        return (
            <div>
                {
                    !this.props.isPasswordChanged ?
                        <ChangePasswordReduxForm onSubmit={onSubmit}/> :
                        <h1>пароль успышно змінено</h1>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isPasswordChanged: isPasswordChangedSelector(state)
    }
};
export default connect(mapStateToProps, {changeUserPassword})(ChangePasswordContainer)