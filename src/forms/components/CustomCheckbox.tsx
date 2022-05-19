import { useField } from 'formik';

interface Props {
    label: string;
    name: string;
    [ x: string ]: any; 
}

export const CustomCheckbox = ({label, ...props}: Props) => {

  const [field, meta] = useField(props);


  return (
    <>
        <label>
          <input type='checkbox' {...field} {...props} />
        { label }</label>
        {
            meta.touched && meta.error && <span>{meta.error}</span>
        }
    </>
  )
}
