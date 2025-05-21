import { useEffect, useState } from 'react'

function Timer() {
    const [sec, setSec] = useState(0);
    const [start, setStart] = useState(false);

    useEffect(() => {
        if (!start) return;
        const interval = setInterval(() => {
            setSec((val) => val + 1);
        }, 1000)

        return () => clearInterval(interval)

    }, [start]);

    return (
        <>
            <h1>Time - {sec}sec.</h1>
            <button onClick={() => setStart(true)}>Start</button>
            <button onClick={() => setStart(false)}>Stop</button>
        </>
    )
}

export default Timer