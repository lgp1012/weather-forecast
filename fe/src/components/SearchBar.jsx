import { useState } from "react";
const cities = ["Ho Chi Minh City", "Vung Tau", "Can Thơ", "Thai Binh"];

export default function SearchBar({ selectCity }) {
    const [query, setQuery] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const filterCities = cities.filter(city =>
        city.toLowerCase().includes(query.toLowerCase())
    );

    const showDropdown = query.trim() !== "" && filterCities.length > 0 && isOpen;

    return (
        <div>
            <input type="search" placeholder="Search for cities" value={query} onChange={(e) => setQuery(e.target.value)} onFocus={() => setIsOpen(true)}></input>
            {showDropdown && (
                <div className="cities-search">
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
                    </ul>
                </div>
            )}
        </div>
    );
}