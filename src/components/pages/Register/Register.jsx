import React, {useEffect} from "react";
import {reduxForm} from "redux-form";
import RegisterForm from "../../basic/RegisterForm/RegisterForm";
import Preloader from "../../basic/Preloader/Preloader";
import Alert from "@material-ui/lab/Alert";

const RegisterReduxForm = reduxForm({
    form: 'register'
})(RegisterForm);


const Register = ({
                      getGenders,
                      registerPatient,
                      registerAdmin,
                      isRegisterSuccess,
                      genders,
                      registerLoading,
                      isCreateByAdmin,
                      errorMessage,
                      match
                  }) => {

    useEffect(() => {
        if (!genders?.length){
            getGenders()
        }
    }, [genders]);
    if (!registerLoading) {
        return <Preloader/>
    }
    if (isCreateByAdmin) {
        return <Preloader/>
    }


    const onSubmit = data => {
        if (match.path === '/register') {
            registerPatient(data)
        }
        if (match.path === '/my-profile/register-admin') {
            registerAdmin(data)
        }

    };
    return (
        <div>
            {
                !isRegisterSuccess &&
                (match.path === '/my-profile/register-admin' || match.path === '/register') ?
                    <div>
                        <h1>Реєстрація:</h1>
                        <RegisterReduxForm onSubmit={onSubmit} genders={genders}
                                           errorMessage={errorMessage}/>
                    </div> :
                    <Alert severity="success">Реєстрація пройшла успішно!</Alert>
            }

        </div>
    )
};

export default Register;