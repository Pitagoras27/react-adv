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

    const maxCount = initialValues?.maxCount;

    const handleCount = (val: number) => {
        let newCount = Math.max(count + val, 0);
        if(initialValues?.maxCount) {
            newCount = Math.min(initialValues.maxCount, newCount );
        }
        setCount(newCount)
        onChange && onChange({ count: newCount, product });
    }

    return {
        count,
        maxCount,
        isMaxCountReached: !!initialValues?.maxCount && initialValues?.maxCount === count,
        handleCount
    }
}
