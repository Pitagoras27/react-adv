import { useField, ErrorMessage } from 'formik';

interface Props {
    label: string;
    name: string;
    type?: "text" | "email" | "password";
    [ x: string ]: any; 
}

export const CustomFieldText = ({label, ...props}: Props) => {

  const [ field ] = useField(props);

  return (
    <>
        <label htmlFor={props.id || props.name}>{ label }</label>
        <input {...field} {...props} />
        <ErrorMessage name={props.name} component='span' />
    </>
  )
}
