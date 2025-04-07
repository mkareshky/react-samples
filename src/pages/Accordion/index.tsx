import { Link } from "react-router-dom";
import Accordian from "../../components/accordian";

const AccordianPage: React.FC = () => {
    return (
        <>
            <Link to="/">Home Page</Link>
            <Accordian />
        </>
    )
}
export default AccordianPage;