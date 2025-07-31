import { useLocation } from "react-router-dom";
import restaurantsCardData from "../../db/restaurantsCardData";

const SearchResults = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const nameQuery = queryParams.get("name")?.toLowerCase() || "";
    const locationQuery = queryParams.get("location")?.toLowerCase() || "";

    const filtered = restaurantsCardData.filter((restaurant) => {
        const nameMatch = restaurant.name.toLowerCase().includes(nameQuery);
        const locationMatch = restaurant.location.toLowerCase().includes(locationQuery);
        return nameMatch && locationMatch;
    });

    return (
        <div className="px-4 py-10 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Search Results</h1>
            {filtered.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {filtered.map((restaurant, idx) => (
                        <div
                            key={idx}
                            className="rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
                        >
                            <img
                                src={restaurant.img[0]}
                                alt={restaurant.name}
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold">{restaurant.name}</h2>
                                <p className="text-sm text-gray-500">{restaurant.location}</p>
                                <p className="text-gray-600 mt-2">{restaurant.des}</p>
                                <div className="flex items-center mt-3 text-yellow-500">
                                    {"★".repeat(restaurant.goldStar)}
                                    {"☆".repeat(restaurant.silverStar)}
                                </div>
                                <div className="text-sm text-gray-400 mt-1">
                                    {restaurant.reviews} reviews
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-lg text-gray-600">No restaurants found.</p>
            )}
        </div>
    );
};

export default SearchResults;
