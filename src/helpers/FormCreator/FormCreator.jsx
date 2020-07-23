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
