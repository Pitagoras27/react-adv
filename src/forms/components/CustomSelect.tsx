import { useField } from 'formik';

interface Props {
    label: string;
    name: string;
    [ x: string ]: any; 
}

export const CustomSelect = ({label, ...props}: Props) => {

  const [field, meta] = useField({...props, type: 'checkbox'});

  return (
    <>
        <label>{ label }</label>
        <select {...field} {...props} />
        {
            meta.touched && meta.error && <span>{meta.error}</span>
        }
    </>
  )
}
