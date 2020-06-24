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
export const SelectCreator = (props) => {

    return <FormCreator {...props}>
        <select {...props.input} {...props}/>
    </FormCreator>

};
export const TextareaCreator = (props) => {

    return <FormCreator {...props}>
        <textarea {...props.input
        } {...props} style={{'resize': 'none'}} rows="7" cols="50"/>
    </FormCreator>

};
