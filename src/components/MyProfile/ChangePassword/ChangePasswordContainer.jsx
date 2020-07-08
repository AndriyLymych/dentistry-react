import React from "react";
import {ChangePasswordForm} from "./ChangePasswordForm/ChangePasswordForm";
import {connect} from "react-redux";
import {isLoadingSelector, isPasswordChangedSelector} from "../../../redux/selectors/authSelectors";
import {reduxForm} from "redux-form";
import {getErrorMsgSelector} from "../../../redux/selectors/errorSelectors";
import Preloader from "../../Preloader/Preloader";
import {changeUserPassword} from "../../../redux/reducers/authReducer";


const ChangePasswordReduxForm = reduxForm({
    form: 'change-password'
})(ChangePasswordForm);


class ChangePasswordContainer extends React.Component {

    render() {

        if (this.props.isLoading) {
            return <Preloader/>
        }

        const onSubmit = data => {

            this.props.changeUserPassword(data)
        };

        return (
            <div>
                {
                    !this.props.isPasswordChanged ?
                        <ChangePasswordReduxForm onSubmit={onSubmit} errorMessage={this.props.errorMessage}/> :
                        <h1>пароль успышно змінено</h1>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isPasswordChanged: isPasswordChangedSelector(state),
        isLoading: isLoadingSelector(state),
        errorMessage: getErrorMsgSelector(state)
    }
};
export default connect(mapStateToProps, {changeUserPassword})(ChangePasswordContainer)