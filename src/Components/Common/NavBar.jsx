const NavBar = () => {
    const NavItems = [
        { logo: '/all.svg', label: 'All' },
        { logo: '/restaurant.svg', label: 'Restaurants' },
        { logo: '/hotel.svg', label: 'Hotels' },
        { logo: '/home-service.svg', label: 'Home Services' },
        { logo: '/shopping.svg', label: 'Shopping' },
        { logo: '/car-location.svg', label: 'Car Location' },
        { logo: '/beauty-spa.svg', label: 'Beauty & Spa' },
        { logo: '/park.svg', label: 'Park' },
        { logo: '/museum.svg', label: 'Museum' },
        { logo: '/car-wash.svg', label: 'Car wash' },
        { logo: '/bars.svg', label: 'Bars' },
        { logo: '/gyms.svg', label: 'Gyms' }
    ];

    return (
        <section className="overflow-x-auto px-4">
            <div className="flex items-center justify-between gap-8 flex-nowrap  py-2 m-2 ">
                {NavItems.map((data, index) => (
                    <div
                        key={index}
                        className="flex flex-col gap-1 items-start p-3 cursor-pointer whitespace-nowrap "
                    >
                        <img src={data.logo} alt={data.label} className="size-6" />
                        <a
                            href="#"
                            className="font-[400] text-[15.5px] text-nav-link"
                        >
                            {data.label}
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default NavBar;
