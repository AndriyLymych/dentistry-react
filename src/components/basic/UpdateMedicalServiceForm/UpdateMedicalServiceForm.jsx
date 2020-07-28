import React from 'react'
import {Field} from 'redux-form'
import {InputCreator, TextareaCreator} from "../../../helpers/FormCreator/FormCreator";
import {
    isNumberValidator,
    minLengthValidator,
    requiredValidator
} from "../../../validators/validators";
import s from '../LoginForm/LoginForm.module.css'
import style from './UpdateMedicalServiceForm.module.css';
import Button from "@material-ui/core/Button";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const minLength = minLengthValidator(2);

const UpdateMedicalServiceForm = props => {

    const {handleSubmit} = props;

    return (
        <form className={s.loginForm +' '+style.updateForm} onSubmit={handleSubmit}>

            <div className={s.loginFormInfo}>
                <div className={s.label}> Змінити назву:</div>
                <div>
                    <Field
                        name="service"
                        component={InputCreator}
                        autoFocus={true}
                        validate={[requiredValidator, minLength]}

                    />
                </div>
            </div>
            <div className={s.loginFormInfo}>
                <div className={s.label}>Змінити опис:</div>
                <div>
                    <Field
                        name="description"
                        component={TextareaCreator}
                        validate={[requiredValidator, minLength]}

                    />
                </div>
            </div>


            <div className={s.loginFormInfo}>
                <div className={s.label}>Змінити ціну:</div>
                <div>
                    <Field
                        name="price"
                        component={InputCreator}
                        validate={[requiredValidator, isNumberValidator]}

                    />
                </div>
            </div>

            <Button
                type="submit"
                variant="contained"
                color="primary"
                startIcon={<CheckCircleOutlineIcon/>}

            >
                Підтвердити
            </Button>

        </form>
    )
};

export default UpdateMedicalServiceForm