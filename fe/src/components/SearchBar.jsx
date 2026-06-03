import { useState } from "react";
import cities from "../utils/cities";
import "../assets/styles/search-bar.css";


export default function SearchBar({ selectCity }) {
    const [query, setQuery] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const filterCities = cities.filter(city =>
        city.toLowerCase().includes(query.toLowerCase())
    );

    const showDropdown = query.trim() !== "" && isOpen;

    return (
        <div className="search-bar-container">
            <input type="search" placeholder="Search for cities" value={query} onChange={(e) => setQuery(e.target.value)} onFocus={() => setIsOpen(true)}></input>
            {showDropdown && (
                <div className="dropdown-box">
                    {filterCities.length === 0 ? <p>No cities found</p> :
                        <ul>
                            {filterCities.map((city, index) => {
                                const id = `${index}-${city}`;
                                return (
                                    <li key={id}
                                        onClick={() => {
                                            selectCity(city);
                                            setQuery(city);
                                            setIsOpen(false);
                                        }}>
                                        {city}
                                    </li>
                                );
                            })}
                        </ul>}
                </div>
            )}
        </div>
    );
}