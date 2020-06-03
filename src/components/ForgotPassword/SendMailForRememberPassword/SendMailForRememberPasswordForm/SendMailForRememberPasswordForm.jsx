import React from "react";
import {Field} from 'redux-form'

export const SendMailForRememberPasswordForm = props => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <label htmlFor="email">Введіть емейл: </label>
                </div>
                <Field
                    name={"email"}
                    component={'input'}
                    placeholder={"Введіть емейл..."}
                    type={"email"}
                    autoFocus
                />
            </div>
            {/*{props.error && <div className={style.error}>{props.error}</div>}*/}

            <button type={"submit"}>Підтвердити</button>

        </form>
    )
};