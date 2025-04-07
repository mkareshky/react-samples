import { Link } from "react-router-dom";
import LoadMoreProduct from "../../components/load_more_product";

const LoadMoreProductPage: React.FC = () => {
    return (
        <>
            <Link to="/">Home Page</Link>
            <LoadMoreProduct/>
        </>
    )
}
export default LoadMoreProductPage;