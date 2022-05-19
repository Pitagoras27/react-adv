import { useField, ErrorMessage } from 'formik';

interface Props {
    label: string;
    name: string;
    [ x: string ]: any; 
}

export const CustomSelect = ({label, ...props}: Props) => {

  const [ field ] = useField({...props, type: 'checkbox'});

  return (
    <>
        <label>{ label }</label>
        <select {...field} {...props} />
        <ErrorMessage name={props.name} component='span' />

    </>
  )
}
