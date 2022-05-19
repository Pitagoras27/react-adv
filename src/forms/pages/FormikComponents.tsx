import * as yup from 'yup';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import '../styles/styles.css';

export interface IValuesForm {
    firstName: string,
    lastName: string,
    email: string;
}

export const FormikComponents = () => {

    return (
        <div>
            <h1>Form formik components</h1>
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
                            <label htmlFor='firstName'>First Name</label>
                            <Field type='text' name='firstName' />
                            <ErrorMessage name='firstName' component='span'/>

                            <label htmlFor='lastName'>Last Name</label>
                            <Field type='text' name='lastName' />
                            <ErrorMessage name='lastName' component='span'/>

                            <label htmlFor='email'>Email</label>
                            <Field type='email' name='email' />
                            <ErrorMessage name='email' component='span'/>

                            <label>Select your career</label>
                            <Field name='carer' as='select'>
                                <option value=''> </option>                                
                                <option value='Developer'> Developer </option>
                                <option value='Designer'> Designer </option>
                                <option value='Web Senior'> IT Senior </option>
                                <option value='Web Jr.'> IT Junior </option>
                            </Field>
                            <ErrorMessage name='carer' component='span'/>

                            <label>
                                <Field name='terms' type="checkbox" />
                                Terms and Conditions
                            </label>
                            <ErrorMessage name='terms' component='span'/>

                            <button type='submit'>Send data</button>
                        </Form>
                    )
                }
            </Formik>
        </div> 
    )
}