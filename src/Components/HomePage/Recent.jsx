import { GoldenStar } from "../icon";

const Recent = () => {
    const activities = [
        {
            name: "Leslie Sakho",
            location: "Canada, Toronto",
            date: "09/11/2023",
            description:
                "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing. ",
            text: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout. ",
            images: ["/img1.svg", "/img2.svg", "/img3.svg"],
        },
        {
            name: "Chris Macari",
            location: "Singapore",
            date: "14/09/2023",
            description:
                "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing. ",
            text: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout. ",
            images: ["/img4.svg", "/img5.svg", "/img6.svg"],
        },
        {
            name: "Jojo Alba",
            location: "Kuala Lumpur",
            date: "28/09/2023",
            description:
                "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing. ",
            text: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout. ",
            images: ["/img7.svg", "/img8.svg", "/img9.svg"],
        },
    ];

    return (
        <section className="py-12 px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl font-bold text-center mb-8">Recent Activities</h2>

            <div className="flex flex-wrap justify-center  gap-6 ">
                {activities.map((activity, idx) => (
                    <div
                        key={idx}
                        className="bg-[#FAFAFA] w-[450px]  rounded-[14px] p-6"
                    >
                        {/* Avatar and Name */}
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="#626262"
                                    className="size-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <p className="font-semibold text-[#232323] text-2xl">
                                    {activity.name}
                                </p>
                                <p className="text-base font-[400] text-[#8A8A8A]">
                                    {activity.location}
                                </p>
                            </div>
                        </div>

                        {/* Rating and Date */}
                        <div className="flex items-center gap-5 mb-3">
                            <div className="flex gap-1 text-yellow-400 text-sm">
                                {Array.from(Array(5).keys()).map((el) => (
                                    <GoldenStar key={el} />
                                ))}
                            </div>
                            <span className="text-sm text-[#343434] font-[400]">
                                {activity.date}
                            </span>
                        </div>

                        {/* Description */}
                        <p className="text-base font-[400] text-[#5E5E5E] mb-3">
                            {activity.text}
                        </p>
                        <p className="text-base font-[400] text-[#5E5E5E] mb-3">
                            {activity.description}
                        </p>

                        {/* Images */}
                        <div className="flex gap-2 mb-4">
                            {activity.images.map((src, imgIdx) => (
                                <img
                                    key={imgIdx}
                                    src={src}
                                    alt="Activity"
                                    className="w-1/3 h-20 object-cover rounded-md"
                                />
                            ))}
                        </div>

                        {/* Discover Link */}
                        <a
                            href="#"
                            className="text-base font-medium underline underline-offset-2 decoration-[#232323] text-[#232323] font-Lexend hover:opacity-80 transition"
                        >
                            Discover
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Recent;
