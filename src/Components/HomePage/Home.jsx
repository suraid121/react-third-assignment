import NavBar from "../Common/NavBar";
import RestaurantCarousel from "./RestaurantCarousel";
import Trends from "./Trends";
import BusinessFeedback from "./BusinessFeedback";
import Recent from "./Recent";
import Footer from "../Common/Footer";

const Home = () => {
    return (
        <>
            <NavBar />
            <RestaurantCarousel />
            <Trends />
            <BusinessFeedback />
            <Recent />
            <Footer />
        </>
    )
};
export default Home;