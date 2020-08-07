import React, {useEffect} from "react";
import {reduxForm} from "redux-form";
import RegisterForm from "../../basic/RegisterForm/RegisterForm";
import Preloader from "../../basic/Preloader/Preloader";
import Alert from "@material-ui/lab/Alert";
import style from './Register.module.css';
import Footer from "../../basic/Footer/Footer";
import {NavLink} from "react-router-dom";
import s from "../ResetPassword/ResetPassword.module.css";

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
        <div>
            <div className={match.path === '/register' ? style.registerContainer : style.registerDoctorContainer}>

                {
                    !isRegisterSuccess &&
                    (match.path === '/my-profile/register-admin' || match.path === '/register') ?
                        <div className={style.regInfoContainer}>
                            <div className={match.path === '/register' ? style.regInfo : style.regAdminInfo}>
                                {
                                    match.path === '/register' ? <h1 className={style.regTitle}>Реєстрація:</h1> :
                                        <h1 className={style.regTitle}>Реєстрація адміністратора:</h1>
                                }

                                <RegisterReduxForm onSubmit={onSubmit} genders={genders}
                                                   errorMessage={errorMessage}/>
                            </div>
                        </div> :
                        <div className={style.success}>
                            <div className={style.successMsg}>
                                Реєстрація пройшла успішно!
                            </div>
                            <NavLink className={style.loginBtnLink} to={"/login"}>Авторизуватись</NavLink>

                        </div>
                }

            </div>
            {
                match.path === '/register' && <Footer/>

            }
        </div>
    )
};

export default Register;