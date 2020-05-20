import React from "react";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {registerPatient,getGenders} from "../../redux/reducers/registerReducer";
import RegisterForm from "./RegisterForm/RegisterForm";
import {
    getAllGendersSelector,
    getIsRegisterSuccessSelector
} from "../../redux/selectors/registerSelectors";

const RegisterReduxForm = reduxForm({
    form: 'register'
})(RegisterForm);


class Register extends React.Component {
    componentDidMount() {
        this.props.getGenders()
    }

    render() {
        let {registerPatient, isRegisterSuccess} = this.props;

        const onSubmit = data => {
            registerPatient(data)
        };


        return (
            <div>
                {
                    !isRegisterSuccess ?
                        <div>
                            <h1>Реєстрація:</h1>
                            <RegisterReduxForm onSubmit={onSubmit} genders={this.props.genders}/>
                        </div> :
                        <h1>Реєстрація пройшла успішно</h1>
                }
            </div>
        )


    }
}


const mapStateToProps = state => {
    return {
        isRegisterSuccess: getIsRegisterSuccessSelector(state),
        genders: getAllGendersSelector(state)
    }
}


export default connect(mapStateToProps, {registerPatient,getGenders})(Register)