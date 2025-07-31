import { useLocation } from "react-router-dom";
import restaurantsCardData from "../../db/restaurantsCardData";
import Filter from "./Filter";

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
        <div>
            <Filter restaurants={filtered} />
        </div>
    );
};

export default SearchResults;
