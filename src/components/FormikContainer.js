import React from 'react';
import { Formik,Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';


function FormikContainer () {
    const dropdownOption=[
        {key:'Select an option',value:''},
        {key:'option1',value:'option1'},
        {key:'option2',value:'option2'},
        {key:'option3',value:'option3'},

    ]

    const radioOptions=[
        {key:'option1',value:'rOption1'},
        {key:'option2',value:'rOption2'},
        {key:'option3',value:'rOption13'},
    ]

    const intialValues={
        email:"",
        description:"",
        selectOption:"",
        radioOption:""
    };

    const validationSchema=Yup.object({
        email:Yup.string().required("Required"),
        description:Yup.string().required("Required"),
        selectOption:Yup.string().required("Required"),
        radioOption:Yup.string().required("Required")
    });
    const onSubmit=values=>{console.log(`Form Data`, values )}

    return ( 
        <Formik intialValues={intialValues} validationSchema={validationSchema}  onSubmit={onSubmit} >
            {formik=>
                (<Form>
                    <FormikControl control="input"  type="email" label="Email" name="email" />
                    <FormikControl control="textarea" label="Description" name="description" />
                    <FormikControl control="select" label="Select a Topic" name="selectOption" options={dropdownOption} />
                    {/* <FormikControl control="radio" label="Radio Topic " name="radioOption" options={radioOptions} /> */}
                    <button type="submit">Submit </button>
                </Form>
                )}
        </Formik>
    );
};

export default FormikContainer;