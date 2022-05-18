import * as yup from 'yup';
import { useFormik } from 'formik';
import '../styles/styles.css';

export interface IValuesForm {
    firstName: string,
    lastName: string,
    email: string;
}

const validationSchema = yup.object({
    firstName: yup.string()
        .required('Is required')
        .max(15, 'Only it allows 15 words'),
    lastName: yup.string()
        .required('Ir required')
        .max(10, 'Only i allow 10 words'),
    email: yup.string()
        .required('Is required')
        .email('This is not valid format')
})

export const FormFormikYup = () => {
    const {values, handleSubmit, handleChange, errors, handleBlur, touched} = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema
    })

    return (
        <div>
            <h1>Form validation with Yup</h1>
            <form noValidate onSubmit={handleSubmit}>
                <label htmlFor='firstName'>First Name</label>
                <input
                    type="text"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                { touched.firstName && errors.firstName && <span>{errors.firstName}</span> }
                <label htmlFor='secondName'>LastName</label>
                <input
                    type="text"
                    name="lastName"
                    id="secondName"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {touched.lastName && errors.lastName  && <span>{errors.lastName}</span>}
                <label htmlFor='email'>Email</label>
                <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {touched.email && errors.email && <span>{errors.email}</span>}
                <button type='submit'>Send data</button>
            </form>
        </div> 
    )
}