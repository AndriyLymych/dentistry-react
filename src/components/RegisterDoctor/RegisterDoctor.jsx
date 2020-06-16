import React from "react";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import { getGenders} from "../../redux/reducers/registerReducer";

import {
    getAllGendersSelector,
} from "../../redux/selectors/registerSelectors";
import {getIsCreateByAdmin, getIsRegisterDoctorSuccess} from "../../redux/selectors/adminSelectors";
import {registerDoctor} from "../../redux/reducers/adminReducer";
import Preloader from "../Preloader/Preloader";
import {withRouter} from "react-router-dom";
import {getSpecialities} from "../../redux/reducers/doctorReducer";
import {getDoctorsSpecialitiesSelector} from "../../redux/selectors/doctorSelectors";
import Alert from "@material-ui/lab/Alert";
import RegisterDoctorForm from "./RegisterDoctorForm/RegisterDoctorForm";


const RegisterDoctorReduxForm = reduxForm({
    form: 'register-doctor'
})(RegisterDoctorForm);


class RegisterDoctor extends React.Component {

    componentDidMount() {

        this.props.getGenders();

        this.props.getSpecialities();

    }

    render() {
        if (this.props.isCreateByAdmin) {
            return <Preloader/>
        }
        const {registerDoctor, isRegisterDoctorSuccess} = this.props;

        const onSubmit = data => {

            if (this.props.match.path === '/my-profile/register-doctor') {
                registerDoctor(data)
            }

        };
        return (
            <div>

                {
                    !isRegisterDoctorSuccess ?
                        <div>
                            <h1>Реєстрація лікаря:</h1>
                            <RegisterDoctorReduxForm
                                onSubmit={onSubmit}
                                genders={this.props.genders}
                                specialities={this.props.specialities}/>
                        </div> :
                        <Alert severity="success">Реєстрація пройшла успішно!</Alert>

                }
            </div>
        )


    }
}


const mapStateToProps = state => {
    return {
        genders: getAllGendersSelector(state),
        isCreateByAdmin: getIsCreateByAdmin(state),
        specialities: getDoctorsSpecialitiesSelector(state),
        isRegisterDoctorSuccess: getIsRegisterDoctorSuccess(state)
    }
};

const RegisterDoctorWithRouter = withRouter(RegisterDoctor);

export default connect(mapStateToProps, {

    getGenders,
    registerDoctor,
    getSpecialities
})(RegisterDoctorWithRouter)