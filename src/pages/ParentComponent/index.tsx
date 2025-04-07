import { useState, useCallback } from "react";
import ChildComponent from "../ChildComponent";

function Parent() {
    const [count, setCount] = useState(0);

    // useCallback memoizes the function, so it remains the same unless count changes
    const increment = useCallback(() => {
        setCount(prev => prev + 1);
    }, []);

    return (
        <div>
            <h1>Count: {count}</h1>
            <ChildComponent onClick={increment} />
            <button onClick={increment}>Increase</button>
        </div>
    );
}

export default Parent;
