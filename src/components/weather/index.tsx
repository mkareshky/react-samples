import { useEffect, useState } from "react";
import { WeatherData } from "./types";
import './styles.css';

const Weather = () => {

    const [city, setCity] = useState('Pavia');
    const [dataCity, setDataCity] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const handleSearch = async () => {
        try {
            setLoading(true);
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=85d61276322313555bba7e04eedbbead`);
            const jsonRes = await res.json();
            setDataCity(jsonRes);
            console.log(jsonRes);


        } catch (error) {
            setLoading(true);
            setErrorMsg((error instanceof Error ? error.message : 'Unknown Error'))
        } finally {
            setLoading(false);
        }

    }

    const datetimeNow = () => {
        return new Date().toLocaleDateString('en-us', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        })
    }

    useEffect(() => { handleSearch() }, [])

    return (
        <>

            <div className="weather-wrapper">

                <div className="search-wrapper">
                    <input
                        type="text"
                        name="city"
                        placeholder="Enter city name"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    ></input>
                    <button onClick={() => handleSearch()}>Search</button>

                </div>
                <div>
                    {errorMsg && <p>{errorMsg}</p>}
                    {loading && <p>loading...</p>}
                    {
                        dataCity &&
                        <>
                            <div>
                                <b>{dataCity.name}</b>, <strong>{dataCity.sys.country}</strong>
                            </div>
                            <div>
                                {datetimeNow()}
                            </div>
                            <p>{dataCity.weather[0].description}</p>
                        </>
                    }
                </div>
            </div>
        </>
    )

}

export default Weather;