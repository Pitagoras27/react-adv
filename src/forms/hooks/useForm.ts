import { ChangeEvent, FormEvent, useState } from "react";

export const useForm = <T>(initialState: T) => {
    const [formData, setFormData] = useState(initialState);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { target } = e;
        // setRegisterData({
        //     ...registerData,
        //     [target.name]: target.value
        // });
        setFormData((prev) => ({
            ...prev,
            [target.name]: target.value
        }))
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData)
    }

    const reset = () => {
        console.log('run reset button!');
        setFormData({ ...initialState })
    }

    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    return {
        ...formData,        
        handleChange,
        isValidEmail,
        reset,
        onSubmit
    }
}