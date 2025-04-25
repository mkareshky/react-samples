import { Link } from "react-router-dom";
import TestHooks from "../../components/test_hooks";

const TestHooksPage = () => {
    return (
        <div>
            <Link to="/">Home Page</Link>
            <TestHooks />
        </div>
    );
}

export default TestHooksPage;