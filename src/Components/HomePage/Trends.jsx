import Card from "../Reusable/Card";
import restaurantsCardData from "../../db/restaurantsCardData";
const Trends = () => {
    return (
        <section className="flex flex-col gap-10 items-center px-4 mt-25 ">
            <h2 className="text-[32px] font-Lexend xl:ml-16 md:mx-auto   font-extrabold" > The latest trends</h2>
            <div className="flex gap-6 flex-wrap justify-center" >
                {restaurantsCardData.slice(0, 13).map((data, index) => (
                    <div key={index}  >
                        <Card restaurant={data} imgH={213} className="w-[319px] h-[386px]" />
                    </div>
                ))}
            </div>
            <div className="flex flex-col gap-5 items-center mb-10" >
                <h4 className="font-Lexend  font-[400] text-[22px] text-[#1E1E1E] ">Discover more cool restaurants</h4>
                <button className="font-[400] text-[19px] bg-[#1677BD] w-[175px] h-[47px] rounded-full text-white cursor-pointer hover:ring-2 hover:ring-blue-500 ring-offset-2 transition-all " > Show more  </button>
            </div>
        </section>
    )
};
export default Trends;