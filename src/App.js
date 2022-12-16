import {useState} from "react";
import Search from "./components/search/Search";
import {GEO_URL, GEO_KEY} from "./api";
import "./App.scss";
import Weather from "./components/weather/weather";
import Header from "./components/header/Header";
import {Loader} from "./components/Loader";

function App() {
    const [weather, setWeather] = useState(null);
    const [isLoaded, setIsLoaded] = useState(true);

    const handleOnSearchChange = (searchData) => {
        if (searchData) {
            setIsLoaded(false)
            const weatherFetch = fetch(
                `${GEO_URL}/forecast?lat=${searchData.lat}&lon=${searchData.lon}&appid=${GEO_KEY}&units=metric`
            );
            Promise.all([weatherFetch])
                .then(async (response) => {
                    const weatherResponse = await response[0].json();
                    setWeather({city: searchData.label, ...weatherResponse});
                })
                .catch(console.log);
        }
        setTimeout(() => {
            setIsLoaded(true);
        }, 1000)
    };
    return (
        <div className="container">
            <Header/>
            <Search onSearchChange={handleOnSearchChange}/>
            {!isLoaded ? <Loader show={!isLoaded} /> :
                weather && <Weather data={weather} />
            }
        </div>
    );
}

export default App;
