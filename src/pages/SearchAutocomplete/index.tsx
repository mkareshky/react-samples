import { Link } from "react-router-dom";
import SearchAutocomplete from "../../components/search_autocomplete";

const SearchAutocompletePage = () => {
    return (
        <>
            <Link to="/">Go to Home</Link>
            <SearchAutocomplete />
        </>
    )
}

export default SearchAutocompletePage;