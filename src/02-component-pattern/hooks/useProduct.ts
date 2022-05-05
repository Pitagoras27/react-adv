import { useState } from "react"
import { IOnChangeArgs, Product } from "../interfaces/interfaces";

interface IUseProductArgs {
    onChange: ( args: IOnChangeArgs) => void;
    product: Product;
}

export const useProduct = ({ onChange, product }: IUseProductArgs) => {
    const [count, setCount] = useState(0)

    const handleCount = (val: number) => {
        const NEW_COUNT = Math.max(count + val, 0)
        setCount(NEW_COUNT)
        onChange && onChange({ count: NEW_COUNT, product });
    }

    return {
        count,
        handleCount
    }
}
