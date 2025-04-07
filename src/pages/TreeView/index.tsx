import { Link } from "react-router-dom";
import TreeView from "../../components/tree_view";

const TreeViewPage: React.FC = () => {
    return (
        <>
            <Link to="/">Home Page</Link>
            < TreeView />
        </>
    )
}
export default TreeViewPage;