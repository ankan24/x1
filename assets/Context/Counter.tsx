import { useCounter } from "./CounterContext";


function Counter() {
    const {count , increment , decrement} = useCounter();
    return (
        <>
        <h1>Counter Context - {count}</h1>
        <button onClick={increment}>Inc</button>
        <button onClick={decrement}>Dec</button>
        </>
    )
}

export default Counter