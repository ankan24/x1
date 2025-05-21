import { createContext, useContext, useState } from "react";


const CounterContext = createContext();


export function CounterProvider({ children }) {
    const [count, setCount] = useState<number>(0);


    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }

    return (
        <CounterContext.Provider value={{ count, increment, decrement }}>
            {children}
        </CounterContext.Provider>
    )
}


export function useCounter() {
    return useContext(CounterContext)
}