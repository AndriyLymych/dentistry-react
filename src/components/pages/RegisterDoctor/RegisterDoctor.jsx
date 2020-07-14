import React, {useEffect} from "react";
import {reduxForm} from "redux-form";
import Preloader from "../../basic/Preloader/Preloader";
import Alert from "@material-ui/lab/Alert";
import RegisterDoctorForm from "../../basic/RegisterDoctorForm/RegisterDoctorForm";

const RegisterDoctorReduxForm = reduxForm({
    form: 'register-doctor'
})(RegisterDoctorForm);

const RegisterDoctor = ({
                            genders,
                            isCreateByAdmin,
                            specialities,
                            isRegisterDoctorSuccess,
                            errorMessage,
                            getGenders,
                            registerDoctor,
                            getSpecialities,
                            match
                        }) => {

    useEffect(() => {
        if (!genders.length){
            getGenders();
        }
        if (!specialities.length){
            getSpecialities()

        }
    }, [genders, specialities]);

    if (isCreateByAdmin) {
        return <Preloader/>
    }

    const onSubmit = data => {

        if (match.path === '/my-profile/register-doctor') {
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
                            genders={genders}
                            specialities={specialities}
                            errorMessage={errorMessage}
                        />
                    </div> :
                    <Alert severity="success">Реєстрація пройшла успішно!</Alert>

            }
        </div>
    )
};

export default RegisterDoctor;

