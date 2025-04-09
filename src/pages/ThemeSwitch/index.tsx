import { Link } from "react-router-dom";
import ThemeSwitch from "../../components/theme_switch";

const ThemeSwitchPage: React.FC = () => {
    return (
        <>
            <Link to="/">Home Page</Link>
            < ThemeSwitch />
        </>
    )
}
export default ThemeSwitchPage;