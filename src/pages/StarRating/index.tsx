import { Link } from "react-router-dom";
import StarRating from "../../components/star_rating";

const StarRatingPage: React.FC = () => {
    return (
        <>
            <Link to="/">Home Page</Link>
            < StarRating nStart={6} />
        </>
    )
}
export default StarRatingPage;