import React from 'react';
import {Field,ErrorMessage} from 'formik';
import TextError from './TextError'

const RadioButtons = (props) => {
    const {label,name,option,...rest}=props
    return (
        <div className="form-control">
            <label >{label}</label>
            <Field   name={name} {...rest} >
                {({field})=> {
                return (
                    <React.Fragment key={option.key}>
                        <input type="radio" id={option.value} {...field} value={option.value} checked={field.value===option.value}/>
                        <label htmlFor={field.value}>{option.value}</label>
                    </React.Fragment>
                ) }
            }
                
            </Field>
            <ErrorMessage  name={name} component={TextError}/>
        </div>
    );
};

export default RadioButtons;