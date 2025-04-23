import { Link } from "react-router-dom";
import ShowSelected from "../../components/showSelectedComponents";

const ShowSelectedPage = () => {
    return (
        <>
            <Link to="/">Go to Home</Link>
            <ShowSelected />
        </>
    )
}

export default ShowSelectedPage;