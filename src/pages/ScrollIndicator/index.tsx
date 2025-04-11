import { Link } from "react-router-dom";
import ScrollIndicator from "../../components/scroll_indicator";

const ScrollIndicatorPage = () => {
    return (
        <div>
            <Link to="/">Go to Home</Link>
            <ScrollIndicator url='https://dummyjson.com/quotes' />
        </div>
    )
}

export default ScrollIndicatorPage;