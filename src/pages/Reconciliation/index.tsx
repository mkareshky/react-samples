import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('count:', count);
    }, [count]);

    const handleClick = () => {
        setCount(count + 1);
        setCount(count + 2);
        setCount(count + 3);
    };

    return (
        <div>
            <Link to="/">Go to Home</Link>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
}

export default Counter;