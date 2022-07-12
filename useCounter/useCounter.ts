import { useState } from 'react';

export const useCounter = (initialValue: number = 0) => {

    const [count, setCount] = useState(initialValue);
    
    const increment = (factor = 1) => setCount((current) => current + factor);
    const decrement = (factor = 1) => setCount((current) => current - factor);
    const reset = () => setCount(initialValue);

    return { count, increment, decrement, reset };

}