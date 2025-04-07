import React from "react";
import { Link } from "react-router-dom";

interface ChildComponentProps {
    onClick: () => void;
}

function ChildComponent({ onClick }: ChildComponentProps) {
    console.log("Child component re-rendered!");
    return (
        <>
            <Link to="/">Go to Home</Link>
            <br />
            <button onClick={onClick}>Click Me</button>
        </>
    );
}

export default React.memo(ChildComponent); // Memoizing the child component
