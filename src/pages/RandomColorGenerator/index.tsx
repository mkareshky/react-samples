import { Link } from "react-router-dom";
import RandomColorGenerator from "../../components/random_color_generator";

const RandomColorGeneratorPage: React.FC = () => {
    return (
        <>
            <Link to="/">Home Page</Link>
            <RandomColorGenerator />
        </>
    )
}
export default RandomColorGeneratorPage;