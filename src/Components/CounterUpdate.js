import React from 'react';
import { useCounterContext } from '../context/CounterContext';

const CounterUpdate = () => {

    const {counter, setCounter} = useCounterContext();

    const handleCounter = () => {
        setCounter(counter + 1);
    };

    return (
        <div>
            <button onClick={handleCounter}>Add Counter</button>
        </div>
    );
}

export default CounterUpdate;
