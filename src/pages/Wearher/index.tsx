import { Link } from "react-router-dom";
import Weather from "../../components/weather";

const WeatherPage = ()=>{
    return (
        <>
            <Link to="/">Home Page</Link>
            < Weather />
        </>
    )
}

export default WeatherPage;