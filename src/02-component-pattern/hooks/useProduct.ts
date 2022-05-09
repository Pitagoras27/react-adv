import { useEffect, useRef, useState } from "react";
import { IInitialValue, IOnChangeArgs, Product } from '../interfaces/interfaces';

interface IUseProductArgs {
    onChange?: ( args: IOnChangeArgs) => void;
    product: Product; 
    value?: number;
    initialValues?: IInitialValue
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: IUseProductArgs) => {
    const [count, setCount] = useState<number>(initialValues?.count || value);
    const isMounted = useRef(false);

    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;
            return;
        };
        setCount(value)
    }, [value]);

    const handleCount = (val: number) => {
        const NEW_COUNT = Math.max(count + val, 0);

        setCount(NEW_COUNT)
        onChange && onChange({ count: NEW_COUNT, product });
    }

    return {
        count,
        handleCount
    }
}
