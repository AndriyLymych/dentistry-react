import React from "react";
import style from './FormCreator.module.css';

const FormCreator = ({input, meta, ...props}) => {

    return (
        <div className={meta.error && meta.touched ? style.errorMsg : ''}>
            {props.children}
            {meta.error && meta.touched && <div>{meta.error}</div>}
        </div>
    )
};

export const InputCreator = (props) => {

    return <FormCreator {...props}>
        <input {...props.input} {...props}/>
    </FormCreator>

};