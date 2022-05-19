import * as yup from 'yup';
import { Formik, Form } from 'formik';
import { CustomFieldText } from '../components/CustomFieldText';
import { CustomSelect } from '../components/CustomSelect';
import { CustomCheckbox } from '../components/CustomCheckbox';

import '../styles/styles.css';

export interface IValuesForm {
    firstName: string,
    lastName: string,
    email: string;
}

export const FormikCustomField = () => {

    return (
        <div>
            <h1>Form formik with custom field</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    carer: '',
                    terms: false
                }}
                onSubmit={ (values) => {
                    console.log(values);
                }}
                validationSchema={
                    yup.object({
                        firstName: yup.string()
                            .required('Is required')
                            .max(15, 'Only it allows 15 words'),
                        lastName: yup.string()
                            .required('Ir required')
                            .max(10, 'Only i allow 10 words'),
                        email: yup.string()
                            .required('Is required')
                            .email('This is not valid format'),
                        carer: yup.string()
                            .required()
                            .notOneOf(['Web Jr.'], 'Value not allowed'),
                        terms: yup.boolean()
                            .oneOf([true], 'The terms and conditions is mandatory'),
                    })
                }
            >
                {
                    (formik) => ( 
                        <Form>
                            <CustomFieldText
                                label='First Name'
                                name='firstName'
                                type='text'
                                placeholder='First Name'
                            />

                            <CustomFieldText
                                label='Last Name'
                                name='lastName'
                                type='text'
                                placeholder='Last Name'
                            />
                            
                            <CustomFieldText
                                label='Email'
                                name='email'
                                type='email'
                                placeholder='Email'
                            />

                            <CustomSelect name='carer' as='select' label={'Select your career'}>
                                <option value=''> </option>                                
                                <option value='Developer'> Developer </option>
                                <option value='Designer'> Designer </option>
                                <option value='Web Senior'> IT Senior </option>
                                <option value='Web Jr.'> IT Junior </option>
                            </CustomSelect>

                                <CustomCheckbox
                                    name='terms'
                                    label='Terms and Conditions'
                                />
                                
                            <button type='submit'>Send data</button>
                        </Form>
                    )
                }
            </Formik>
        </div> 
    )
}