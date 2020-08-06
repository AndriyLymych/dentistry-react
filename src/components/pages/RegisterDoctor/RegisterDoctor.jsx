import React, {useEffect} from "react";
import {reduxForm} from "redux-form";
import Preloader from "../../basic/Preloader/Preloader";
import RegisterDoctorForm from "../../basic/RegisterDoctorForm/RegisterDoctorForm";
import style from './RegisterDoctor.module.css';

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
        <div className={style.regContainer}>

            {
                !isRegisterDoctorSuccess ?
                    <div className={style.regInfo}>
                        <div className={style.regTitle}>Реєстрація лікаря:</div>
                        <RegisterDoctorReduxForm
                            onSubmit={onSubmit}
                            genders={genders}
                            specialities={specialities}
                            errorMessage={errorMessage}
                        />
                    </div> :
                    <div className={style.successReg} >Реєстрація лікаря пройшла успішно!</div>

            }
        </div>
    )
};

export default RegisterDoctor;

