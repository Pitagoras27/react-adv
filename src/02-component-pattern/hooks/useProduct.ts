import { useState } from "react"

export const useProduct = (initialState: number) => {
    
    const [count, setCount] = useState(initialState)

    const handleCount = (val: number) => setCount(prev =>  Math.max(prev + val, 0))

    return {
        count,
        handleCount
    }
}
