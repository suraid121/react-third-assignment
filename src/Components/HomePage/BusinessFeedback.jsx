const BusinessFeedback = () => {
    return (
        <section className="flex flex-col-reverse md:flex-row items-center justify-evenly gap-10  px-4 md:px-8 lg:px-16 xl:px-10 bg-[#F2F2F2] py-10 mb-10">
            {/* Text Content */}
            <div className="flex flex-col gap-6 max-w-xl w-full">
                <h3 className="font-Lexend font-extrabold text-[20px] sm:text-[22px] lg:text-[26px] text-[#1E1E1E]">
                    MyFeedback for Business has resources to help you plan, start, grow, and advertise your small business
                </h3>
                <p className="text-base text-[#5E5E5E]">
                    The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.
                </p>
                <button className="bg-search-bar-button px-8 py-3 mt-4 text-white rounded-full w-fit">
                    Explore MyFeedback business
                </button>
            </div>

            {/* Image */}
            <div className="w-full max-w-md px-4 md:px-0">
                <img
                    src="/business-feedback.svg"
                    alt="Business feedback"
                    className="w-full h-auto object-contain"
                />
            </div>
        </section>
    );
};

export default BusinessFeedback;
