import { useState } from "react"

export const useProduct = (onChange?: () => void) => {
    const [count, setCount] = useState(0)

    const handleCount = (val: number) => {
        setCount(prev =>  Math.max(prev + val, 0))
        onChange && onChange();
    }

    return {
        count,
        handleCount
    }
}
