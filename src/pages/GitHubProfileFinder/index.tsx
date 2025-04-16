import { Link } from "react-router-dom";
import GitHubProfileFinder from "../../components/gitHub_profile_finder";

const GitHubProfileFinderPage = () => {
    return (
        <div>
            <Link to="/">Go to Home</Link>
            <GitHubProfileFinder />
        </div>
    )
}

export default GitHubProfileFinderPage;