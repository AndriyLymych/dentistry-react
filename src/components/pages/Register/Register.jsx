import React, {useEffect} from "react";
import {reduxForm} from "redux-form";
import RegisterForm from "../../basic/RegisterForm/RegisterForm";
import Preloader from "../../basic/Preloader/Preloader";
import Alert from "@material-ui/lab/Alert";
import style from './Register.module.css';
import regImg from '../../../assets/img/reg-img.png';

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
        if (!genders?.length) {
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
        <div className={style.registerContainer}>

            {
                !isRegisterSuccess &&
                (match.path === '/my-profile/register-admin' || match.path === '/register') ?
                    <div className={style.regInfo}>
                        <h1 className={style.regTitle}>Реєстрація:</h1>
                        <RegisterReduxForm  onSubmit={onSubmit} genders={genders}
                                           errorMessage={errorMessage}/>
                    </div> :
                    <Alert severity="success">Реєстрація пройшла успішно!</Alert>
            }
            {/*<div className={style.regImg}>*/}
            {/*    <img src={regImg} alt=""/>*/}
            {/*</div>*/}

        </div>
    )
};

export default Register;