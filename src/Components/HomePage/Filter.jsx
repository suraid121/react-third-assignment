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
        <div className="flex flex-col lg:flex-row justify-end ">
            <div className=" px-3 lg:mr-20 " >
                <div className="  text-center lg:text-left mt-10 mb-6" >
                    <p className="font-semibold text-base text-[#232323]" >Home / All restaurants</p>
                    <div className="flex flex-col lg:flex-row gap-5" >
                        <h3 className="font-extrabold font-Lexend text-[32px] text-[#1E1E1E] " >best restaurants in singapore</h3>
                        <div ref={dropdownRef}  >
                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="bg-[#5E5E5E] px-6 py-2.5 relative rounded-full  text-base text-white flex items-center gap-2 transition-all border-2 border-[#5E5E5E]  cursor-pointer hover:ring-2 ring-offset-1 hover:ring-blue-300 "
                            >
                                <img src="/sort.svg" alt="svg" /> Sort
                            </button>
                            <div
                                className={`absolute mt-2 w-60 h-[180px]  bg-white border-1 border-[#E6E6E6] rounded-[15px]  shadow-lg z-50 p-3 space-y-2 transform transition-all duration-300 origin-top-right ${dropdownOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
                                    }`}
                            >
                                <div className="flex justify-end  items-center mb-2">
                                    <button
                                        onClick={() => setDropdownOpen(false)}
                                        
                                    >
                                        <img src="/cross.svg" alt="cross" className="cursor-pointer" />
                                    </button>
                                </div>

                                {["all", "highest", "lowest"].map((type) => (
                                    <button
                                        key={type}
                                        onClick={() => {
                                            setSortType(type);
                                        }}
                                        className={`block cursor-pointer text-left w-full px-3 py-1.5 text-sm rounded-md transition hover:bg-gray-100 ${sortType === type ? "bg-blue-100 text-blue-700" : ""
                                            }`}
                                    >
                                        {type === "all" && "All feedbacks"}
                                        {type === "highest" && "Highest rated"}
                                        {type === "lowest" && "Lowest rated"}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="flex flex-col items-baseline gap-6  transition-all duration-300">
                    {filtered.map((restaurant, index) => (
                        <Card key={index} restaurant={restaurant} imgH={189} imgW={209} className=" border-b-[#DCDCDC] rounded-none border-b-1   py-10  flex  bg-white flex-row " />
                    ))}
                </div>

            </div>
            <div>
                <img src="/map.svg" alt="map" className=" lg:w-[500px] xl:w-[720px] lg:h-[1264px]  mt-10  object-cover" />
            </div>
        </div>
    );
};

export default Filter;
