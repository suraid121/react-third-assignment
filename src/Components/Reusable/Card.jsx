import { useState } from "react";
import { GoldenStar, SilverStar, GoldenSilverStar } from "../icon";
import cn from "../../Utilities/cn";

const Card = ({ restaurant, className,  imgH, }) => {
    const [currentImage, setCurrentImage] = useState(0);

    if (!restaurant) return null;

    const totalStars = 5;
    const golden = restaurant.goldStar || 0;
    const silver = restaurant.silverStar || 0;
    const mixed = Math.max(totalStars - golden - silver, 0);

    return (
        <div className={cn('rounded-[14px]   bg-card  font-Roboto ' , className)} >
            <div className="relative">
                <img
                    src={restaurant.img?.[currentImage]}
                    alt={restaurant.name}
                    style={{  height: `${imgH}px` }}
                    className='object-cover rounded-[14px] w-full'
                />
                {/* Dot Indicators */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-1">
                    {restaurant.img?.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentImage(i)}
                            className={`h-2.5 w-2.5 rounded-full  cursor-pointer ${currentImage === i ? "bg-[#e2e2e2]" : "bg-[#C1C1C1]"
                                } transition`}
                        />
                    ))}
                </div>
            </div>

            <div className="px-4 pb-3 pt-2">
                <h3 className="text-xl font-semibold text-card-heading">{restaurant.name}</h3>
                <p className="text-sm text-card-text font-[400] mt-1">{restaurant.des}</p>

                {/* Rating Display */}
                <div className="mt-4 flex items-center gap-1 text-sm">
                    {Array(golden)
                        .fill(null)
                        .map((_, i) => (
                            <GoldenStar key={`gold-${i}`} />
                        ))}
                    {Array(mixed)
                        .fill(null)
                        .map((_, i) => (
                            <GoldenSilverStar key={`mixed-${i}`} />
                        ))}
                    {Array(silver)
                        .fill(null)
                        .map((_, i) => (
                            <SilverStar key={`silver-${i}`} />
                        ))}

                    <span className="text-card-heading ml-2 text-sm font-semibold">
                        {restaurant.ratings?.toFixed(1)}
                    </span>
                    <span className="text-card-review text-sm ">
                        ({restaurant.reviews} reviews)
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Card;
