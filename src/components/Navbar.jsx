import React from "react";
import "../App.css"

const Navbar = ({ filters, setFilters }) => {
    const languages = [
        { code: "en", name: "English" },
        { code: "hi", name: "Hindi" },
        { code: "es", name: "Spanish" },
        { code: "fr", name: "French" },
        { code: "de", name: "German" },
        { code: "ar", name: "Arabic" },
        { code: "zh", name: "Chinese" },
        { code: "ja", name: "Japanese" },
        { code: "ko", name: "Korean" },
        { code: "pt", name: "Portuguese" },
        { code: "ru", name: "Russian" },
        { code: "it", name: "Italian" },
    ];


    const countries = [
        { code: "us", name: "USA" },
        { code: "in", name: "India" },
        { code: "gb", name: "UK" },
        { code: "ca", name: "Canada" },
        { code: "au", name: "Australia" },
        { code: "de", name: "Germany" },
        { code: "fr", name: "France" },
        { code: "jp", name: "Japan" },
        { code: "cn", name: "China" },
        { code: "kr", name: "South Korea" },
        { code: "br", name: "Brazil" },
        { code: "mx", name: "Mexico" },
        { code: "ru", name: "Russia" },
        { code: "it", name: "Italy" },
        { code: "nl", name: "Netherlands" },
        { code: "za", name: "South Africa" },
        { code: "sa", name: "Saudi Arabia" },
        { code: "ae", name: "UAE" },
    ];

    const categories = ["business", "technology", "sports", "health", "entertainment"];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    return (
        <nav id="navbar">
            <div className="navbar-container">
                <p className="navbar-logo">SWEN</p>
                <div className="navbar-filters">
                    <select name="category" value={filters.category} onChange={handleChange}>
                        {categories.map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                    <select name="language" value={filters.language} onChange={handleChange}>
                        {languages.map((lang) => (
                            <option key={lang.code} value={lang.code}>{lang.name}</option>
                        ))}
                    </select>

                    <select name="country" value={filters.country} onChange={handleChange}>
                        {countries.map((country) => (
                            <option key={country.code} value={country.code}>{country.name}</option>
                        ))}
                    </select>


                </div>
            </div>
        </nav>
    );
};

export default Navbar;
