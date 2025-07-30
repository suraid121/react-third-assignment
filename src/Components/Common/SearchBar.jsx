import { useState } from "react";
import { useNavigate } from "react-router-dom";
import restaurantsCardData from "../../db/restaurantsCardData"; // adjust path

const SearchBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [activeIndex, setActiveIndex] = useState(-1);

    const navigate = useNavigate();

    // Filtered Suggestions
    const filteredSuggestions = restaurantsCardData.filter((rest) =>
        rest.name.toLowerCase().includes(name.toLowerCase()) ||
        rest.location.toLowerCase().includes(location.toLowerCase())
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuggestions(false);
        navigate(`/search?name=${name}&location=${location}`);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
        setShowSuggestions(true);
        setActiveIndex(-1);
    };

    const handleKeyDown = (e) => {
        if (!showSuggestions) return;

        if (e.key === "ArrowDown") {
            setActiveIndex((prev) => (prev < filteredSuggestions.length - 1 ? prev + 1 : prev));
        } else if (e.key === "ArrowUp") {
            setActiveIndex((prev) => (prev > 0 ? prev - 1 : 0));
        } else if (e.key === "Enter") {
            if (activeIndex >= 0 && activeIndex < filteredSuggestions.length) {
                const selected = filteredSuggestions[activeIndex];
                setName(selected.name);
                setLocation(selected.location);
                setShowSuggestions(false);
                navigate(`/search?name=${selected.name}&location=${selected.location}`);
            }
        }
    };

    const handleSuggestionClick = (rest) => {
        setName(rest.name);
        setLocation(rest.location);
        setShowSuggestions(false);
    };

    return (
        <>
            <section className="flex items-center justify-between p-4 py-6 border-b-2 border-b-[#DCDCDC] relative z-50">
                <div className="hidden md:block">
                    <img src="/logo.svg" alt="logo" className="w-28" />
                </div>

                <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
                    <form
                        onSubmit={handleSubmit}
                        className="flex items-center border border-search-border rounded-full px-2 py-2 w-full"
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
                    >
                        <input
                            type="text"
                            placeholder="restaurant, hotel..."
                            className="focus:outline-none w-1/2 border-r-2 border-r-input-border px-2"
                            value={name}
                            onChange={handleNameChange}
                            onKeyDown={handleKeyDown}
                        />
                        <input
                            type="text"
                            placeholder="country..."
                            className="focus:outline-none w-1/2 px-2"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                        <button type="submit" className="px-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 text-gray-500 hover:text-black"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
                                />
                            </svg>
                        </button>
                    </form>

                    {/* Autocomplete Suggestions */}
                    {showSuggestions && name && (
                        <ul className="absolute mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                            {filteredSuggestions.length > 0 ? (
                                filteredSuggestions.map((rest, idx) => (
                                    <li
                                        key={idx}
                                        onClick={() => handleSuggestionClick(rest)}
                                        className={`px-4 py-2 cursor-pointer flex justify-between items-center transition-colors duration-150 ${idx === activeIndex ? "bg-gray-100" : "hover:bg-gray-50"
                                            }`}
                                    >
                                        <span>{rest.name}</span>
                                        <span className="text-xs text-gray-500">{rest.location}</span>
                                    </li>
                                ))
                            ) : (
                                <li className="px-4 py-2 text-gray-500">No suggestions found</li>
                            )}
                        </ul>
                    )}
                </div>

                <div className="items-center gap-4 hidden lg:flex">
                    <img src="/earth.svg" alt="earth" />
                    <button className="bg-search-bar-button px-6 py-3 text-white rounded-full hover:ring-2 hover:ring-blue-500 ring-offset-2 transition-all">
                        MyFeedback for business
                    </button>
                </div>

                <div className="flex md:hidden ml-4">
                    <button onClick={() => setMenuOpen(true)} className="focus:outline-none">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </section>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 bg-white z-50 transform transition-transform duration-500 ease-in-out md:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="flex justify-end p-4">
                    <button onClick={() => setMenuOpen(false)} className="text-3xl font-bold">✕</button>
                </div>
                <div className="flex flex-col items-center justify-center gap-6 h-full">
                    <img src="/earth.svg" alt="earth" className="w-6 h-6" />
                    <button className="bg-search-bar-button px-8 py-3 text-white rounded-full">
                        MyFeedback for business
                    </button>
                </div>
            </div>
        </>
    );
};

export default SearchBar;
