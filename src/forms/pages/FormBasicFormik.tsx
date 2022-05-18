import { FormikErrors, useFormik } from 'formik';
import '../styles/styles.css';

export interface IValuesForm {
    firstName: string,
    lastName: string,
    email: string;
}

export const FormBasicFormik = () => {
    const validate = ({ firstName, lastName, email }: IValuesForm) => {
        const errors: FormikErrors<IValuesForm> = {};

        if ( !firstName ) {
            errors.firstName = 'Required';
        } else if( firstName.length >= 15 ) {
            errors.firstName = 'Must be 15 characters or less';
        }

        if ( !lastName ) {
            errors.lastName = 'Required';
        } else if( lastName.length >= 10 ) {
            errors.lastName = 'Must be 10 characters or less';
        }

        if (!email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test( email )) {
            errors.email = 'Invalid email address';
        }

        return errors;
    }

    const {values, handleSubmit, handleChange, errors, handleBlur, touched} = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validate,
    });
    return (
        <div>
            <h1>Form validation basic with Formik</h1>
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