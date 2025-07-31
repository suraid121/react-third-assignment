import { useState, useEffect, useRef } from "react";
import restaurantsCardData from "../../db/restaurantsCardData";
import Card from "../Reusable/Card";
import cn from "../../Utilities/cn";

const RestaurantCarousel = () => {
    const bestRestaurants = restaurantsCardData.filter((data) => data.ratings === 5.0);

    const [cardsPerSlide, setCardsPerSlide] = useState(4);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);

    useEffect(() => {
        const updateCardsPerSlide = () => {
            const width = window.innerWidth;
            if (width < 690) setCardsPerSlide(1);
            else if (width < 1070) setCardsPerSlide(2);
            else if (width < 1310) setCardsPerSlide(3);
            else setCardsPerSlide(4);
        };

        updateCardsPerSlide();
        window.addEventListener("resize", updateCardsPerSlide);
        return () => window.removeEventListener("resize", updateCardsPerSlide);
    }, []);

    const totalSlides = Math.ceil(bestRestaurants.length / cardsPerSlide);

    const handleNext = () => {
        if (currentIndex < totalSlides - 1) setCurrentIndex((prev) => prev + 1);
    };

    const handlePrev = () => {
        if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
    };

    // Touch swipe handling
    useEffect(() => {
        const container = carouselRef.current;
        let startX = 0;
        let endX = 0;

        const onTouchStart = (e) => {
            startX = e.touches[0].clientX;
        };
        const onTouchMove = (e) => {
            endX = e.touches[0].clientX;
        };
        const onTouchEnd = () => {
            if (startX - endX > 50) handleNext();
            else if (endX - startX > 50) handlePrev();
        };

        if (container) {
            container.addEventListener("touchstart", onTouchStart);
            container.addEventListener("touchmove", onTouchMove);
            container.addEventListener("touchend", onTouchEnd);
        }

        return () => {
            if (container) {
                container.removeEventListener("touchstart", onTouchStart);
                container.removeEventListener("touchmove", onTouchMove);
                container.removeEventListener("touchend", onTouchEnd);
            }
        };
    }, [currentIndex, cardsPerSlide]);

    const visibleRestaurants = bestRestaurants.slice(
        currentIndex * cardsPerSlide,
        currentIndex * cardsPerSlide + cardsPerSlide
    );

    return (
        <div className="bg-[#1780c6] px-4 flex py-6 rounded-[9px] text-white mx-4 sm:mx-6 md:mx-12 mt-10">
            <h2 className="text-[24px] sm:text-[28px]  md:text-[32px] lg:text-start lg:ml-20 text-center font-[400]  font-Lexend mb-6">
                Find the best restaurant ratings below
            </h2>

            <div className="relative">
                {/* Left Arrow */}
                <button
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className={cn(
                        "absolute top-1/2 left-2 lg:left-13 -translate-y-1/2 z-10 p-2 rounded-full shadow-md",
                        currentIndex === 0
                            ? "bg-white/30 backdrop-blur-md cursor-not-allowed"
                            : "bg-white cursor-pointer"
                    )}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#232323" className="size-6 sm:size-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                </button>

                {/* Cards */}
                <div className="flex gap-6 justify-center" ref={carouselRef}>
                    {visibleRestaurants.map((data, index) => (
                        <div key={index}  >
                            <Card restaurant={data} imgH={213} className="w-[285px] h-[370px]" />
                        </div>
                    ))}
                </div>

                {/* Right Arrow */}
                <button
                    onClick={handleNext}
                    disabled={currentIndex === totalSlides - 1}
                    className={cn(
                        "absolute top-1/2 right-2 lg:right-13 -translate-y-1/2 z-10 p-2 rounded-full shadow-md",
                        currentIndex === totalSlides - 1
                            ? "bg-white/30 backdrop-blur-md cursor-not-allowed"
                            : "bg-white cursor-pointer"
                    )}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#232323" className="size-6 sm:size-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center mt-4 space-x-2">
                {[...Array(totalSlides)].map((_, index) => (
                    <div
                        key={index}
                        className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-400"}`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default RestaurantCarousel;
