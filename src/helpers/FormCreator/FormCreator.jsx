import React from "react";
import style from './FormCreator.module.css';
import Alert from "@material-ui/lab/Alert";
import TextField from "@material-ui/core/TextField";

const FormCreator = ({input, meta, ...props}) => {

    return (
        <div className={meta.error && meta.touched ? style.errorMsg : ''}>
            {props.children}
            {/*<TextField*/}
            {/*    error*/}
            {/*    id="outlined-error-helper-text"*/}
            {/*    label="Помилка"*/}
            {/*    defaultValue="Hello World"*/}
            {/*    helperText={meta.error}*/}
            {/*    variant="outlined"*/}
            {/*/>*/}
            {meta.error && meta.touched && <div>{meta.error}</div>}
        </div>
    )
};

export const InputCreator = (props) => {

    return <FormCreator {...props}>
        <input {...props.input} {...props}/>
    </FormCreator>

};