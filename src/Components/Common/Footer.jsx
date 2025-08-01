import { useState } from "react";

const Footer = () => {
    const year = new Date().getFullYear();

    const footerData = [
        {
            title: "About",
            links: [
                "About MyFeedback",
                "Investor Relations",
            ]
        },
        {
            title: "MyFeedback",
            links: [
                "MyFeedback for business",
                "Collections",
                "Talk",
                "Events",
                "MyFeedback blog",
                "Support",
                "Developers",
            ],
        },
    ];

    const languages = ["English", "বাংলা", "Français"];
    const countries = ["Singapour", "Bangladesh", "Canada"];

    const [selectedLanguage, setSelectedLanguage] = useState("English");
    const [selectedCountry, setSelectedCountry] = useState("Singapour");

    const [languageOpen, setLanguageOpen] = useState(false);
    const [countryOpen, setCountryOpen] = useState(false);

    return (
        <footer className="bg-white  border-t-2 border-t-[#DCDCDC] mt-5 ">
            <div className="flex flex-wrap justify-between max-w-[800px] mx-auto mb-8 mt-6 px-8 gap-10 ">
                {/* Static Sections */}
                {footerData.map((section, idx) => (
                    <div key={idx}>
                        <h4 className="font-extrabold font-Lexend text-2xl text-footer-heading w-[200px] mb-3">{section.title}</h4>
                        <ul className="space-y-2">
                            {section.links.map((link, i) => (
                                <li key={i}>
                                    <a
                                        href="#"
                                        className="text-sm   font-[400] text-footer-link hover:underline"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                <div className="flex flex-col gap-5 " >
                    {/* Languages */}
                    <div className="relative">
                        <h4 className="font-extrabold font-Lexend text-2xl text-footer-heading  mb-3">Languages</h4>
                        <div className="text-sm text-footer-link cursor-pointer relative w-fit">
                            <button
                                onClick={() => {
                                    setLanguageOpen(!languageOpen);
                                    setCountryOpen(false);
                                }}
                                className="flex items-center gap-1"
                            >
                                {selectedLanguage} <span className="text-sm text-footer-link font-[400] cursor-pointer ">▼</span>
                            </button>
                            {languageOpen && (
                                <ul className="absolute bg-white border rounded shadow mt-2 z-10 w-32">
                                    {languages.map((lang, i) => (
                                        <li
                                            key={i}
                                            onClick={() => {
                                                setSelectedLanguage(lang);
                                                setLanguageOpen(false);
                                            }}
                                            className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                                        >
                                            {lang}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>

                    {/* Countries */}
                    <div className="relative">
                        <h4 className="font-extrabold font-Lexend text-2xl text-footer-heading mb-3">Countries</h4>
                        <div className="text-sm text-footer-link cursor-pointer relative w-fit">
                            <button
                                onClick={() => {
                                    setCountryOpen(!countryOpen);
                                    setLanguageOpen(false);
                                }}
                                className="flex items-center gap-1"
                            >
                                {selectedCountry} <span className="text-sm text-footer-link font-[400] cursor-pointer ">▼</span>
                            </button>
                            {countryOpen && (
                                <ul className="absolute bg-white border rounded shadow mt-2 z-10 w-32">
                                    {countries.map((ct, i) => (
                                        <li
                                            key={i}
                                            onClick={() => {
                                                setSelectedCountry(ct);
                                                setCountryOpen(false);
                                            }}
                                            className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                                        >
                                            {ct}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <p className="text-center text-sm text-[#1E1E1E] font-bold mt-15 mb-7">
                Copyright © Septembre {year} myfeedback, designed by scott
            </p>
        </footer>
    );
};

export default Footer;
