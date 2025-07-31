import { useState, useEffect, useRef } from "react";
import Card from "../Reusable/Card";

const Filter = ({ restaurants }) => {
    const [sortType, setSortType] = useState("all");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [filtered, setFiltered] = useState([]);
    const dropdownRef = useRef(null);

    useEffect(() => {
        let sorted = [...restaurants];

        if (sortType === "highest") {
            sorted.sort((a, b) => b.ratings - a.ratings);
        } else if (sortType === "lowest") {
            sorted.sort((a, b) => a.ratings - b.ratings);
        }

        setFiltered(sorted);
    }, [sortType, restaurants]);

    // 🧠 Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="p-4 max-w-6xl mx-auto">
            {/* Sort Dropdown */}
            <div className="relative inline-block text-left mb-6" ref={dropdownRef}>
                <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="bg-gray-200 px-4 py-2 rounded-full text-sm flex items-center gap-2 transition-all hover:bg-gray-300 hover:scale-105 active:scale-95"
                >
                    ⭳ Sort
                </button>

                <div
                    className={`absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg z-50 p-3 space-y-2 transform transition-all duration-300 origin-top-right ${
                        dropdownOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
                    }`}
                >
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-blue-600 font-medium text-sm">Sort Options</span>
                        <button
                            onClick={() => setDropdownOpen(false)}
                            className="text-gray-500 hover:text-red-500"
                        >
                            ✕
                        </button>
                    </div>

                    {["all", "highest", "lowest"].map((type) => (
                        <button
                            key={type}
                            onClick={() => {
                                setSortType(type);
                            }}
                            className={`block text-left w-full px-3 py-1.5 text-sm rounded-md transition hover:bg-gray-100 ${
                                sortType === type ? "bg-blue-100 text-blue-700" : ""
                            }`}
                        >
                            {type === "all" && "All feedbacks"}
                            {type === "highest" && "Highest rated"}
                            {type === "lowest" && "Lowest rated"}
                        </button>
                    ))}
                </div>
            </div>

            {/* Cards Grid */}
            <div className="flex flex-col items-baseline gap-6 transition-all duration-300">
                {filtered.map((restaurant, index) => (
                    <Card key={index} restaurant={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Filter;
