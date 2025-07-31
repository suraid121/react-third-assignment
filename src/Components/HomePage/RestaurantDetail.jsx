import { useLocation } from "react-router-dom";
import Footer from "../Common/Footer";

const RestaurantDetail = () => {
    const location = useLocation();
    const restaurant = location.state?.restaurant;
    const banner = restaurant?.img?.[0];

    if (!restaurant) {
        return <div className="text-center mt-10 text-lg text-gray-700">No restaurant data available.</div>;
    }

    return (
        <>
            <div className="relative w-full h-screen overflow-hidden mb-10 ">
                {/* Background */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${banner})` }}
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

                {/* Breadcrumb */}
                <div className="absolute top-5 left-6 z-30 text-sm font-semibold text-gray-200 tracking-wide">
                    Home / <span className="text-white">{restaurant.name?.replaceAll(" ", "")}</span>
                </div>

                {/* Main content */}
                <div className="relative z-40 max-w-6xl mx-auto h-full px-6 flex flex-col justify-center">
                    <div className="text-white max-w-xl">
                        {/* Heading */}
                        <h1 className="text-5xl font-bold mb-4">{restaurant.name || "Bella italia"}</h1>

                        {/* Ratings */}
                        <div className="flex items-center mb-4">
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="bg-[#FBBF24] w-6 h-6 rounded-sm mr-1 flex items-center justify-center">
                                    <svg
                                        className="w-4 h-4 text-white"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                                    </svg>
                                </div>
                            ))}
                            <span className="ml-3 text-lg font-semibold text-white">
                                {restaurant.ratings || "5.0"}{" "}
                                <span className="font-normal text-gray-300">({restaurant.reviews || "834"} reviews)</span>
                            </span>
                        </div>

                        {/* Description */}
                        <p className="text-white/90 mb-4 leading-relaxed">
                            {restaurant.des ||
                                "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout. The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."}
                        </p>

                        {/* Location */}
                        <div className="flex items-center mb-2 text-white">
                            <svg
                                className="w-5 h-5 mr-2 text-white"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z" />
                            </svg>
                            {restaurant.location || "Singapour, Bishan-Ang Mo Kio Park"}
                        </div>

                        {/* Timing */}
                        <div className="flex items-center text-white">
                            <svg
                                className="w-5 h-5 mr-2 text-white"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            {restaurant.timing || "7j/7, 08:00 - 22:00"}
                        </div>
                    </div>
                </div>

                {/* Badge Logo (centered bottom) */}
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 z-100">
                    <img
                        src="/hotel-logo.svg" // Replace with extracted badge
                        alt="Restaurant Logo"
                        className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-md"
                    />
                </div>
            </div>

            <Footer />
        </>
    );
};

export default RestaurantDetail;
