import React, {useEffect, useState} from "react";
import {GEO_CITY, GEO_KEY} from "../../api";

const Search = ({onSearchChange}) => {
    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);
    const loadOptions = () => {
        return fetch(`${GEO_CITY}${search}&limit=5&appid=${GEO_KEY}`,)
            .then((response) => response.json())
            .then(response => setResults(response))
    };

    useEffect(() => {
        loadOptions();
    }, [search])

    const handleOnClick = (city) => {
        onSearchChange(city);
        setResults([]);
    }
    return (
        <div className="search-city">
            <h2>Welcome To Jana-Kaz Weather App</h2>
            <input type="text" placeholder="Search city..." onChange={e => setSearch(e.target.value)}/>
            <div className="search-city_results">
            {results.length > 0 &&
                results.map(city => <div className="cities" key={city.lon} onClick={() => handleOnClick(city)}>{city.name}, {city.country}</div>)
            }
            </div>
        </div>
    );
};

export default Search;
