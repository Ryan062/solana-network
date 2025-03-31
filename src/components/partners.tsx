"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

const Partners = () => {
    const logos = [
        {
            id: "bhvkLl-BRKW730mCbw-Qmg",
            alt: "rarity-sniper-logo",
            src: "https://www.datocms-assets.com/105223/1704917582-rarity-sniper-logo.svg",
        },
        {
            id: "R6rTyjP2RhmAeKg7fCS1Mw",
            alt: "fractal-logo",
            src: "https://www.datocms-assets.com/105223/1705721427-fractal.svg",
        },
        {
            id: "TsI9MsQ_TV-eWCcamT51mw",
            alt: "hop-logo",
            src: "https://www.datocms-assets.com/105223/1704919821-hop-logo.svg",
        },
        {
            id: "CFQS1Oy1TJOs0dyVpdbhZA",
            alt: "collabland-logo",
            src: "https://www.datocms-assets.com/105223/1705721173-collabland.svg",
        },
        {
            id: "R5ULwQU8Ssy4J4hGz1q1sg",
            alt: "0x-logo",
            src: "https://www.datocms-assets.com/105223/1704912051-0x-full.svg",
        },
        {
            id: "G2sivfTgRyGK1Jm2k6MfAQ",
            alt: "circle-logo",
            src: "https://www.datocms-assets.com/105223/1704912055-circle.svg",
        },
        {
            id: "UEyEcEbKRke05Oa2dhiTfg",
            alt: "polymarket logo",
            src: "https://www.datocms-assets.com/105223/1725038128-polymarket-logo-black.svg",
        },
        {
            id: "TVBf1YbuQaC7QXHz5Q3lWQ",
            alt: "worldcoin-logo-full",
            src: "https://www.datocms-assets.com/105223/1732218736-world-full-dark.svg",
        },
        {
            id: "44IRwmK9T2G3kj6IEY_XJg",
            alt: "opensea-logo",
            src: "https://www.datocms-assets.com/105223/1699428196-opensea-black.svg",
        },

        {
            id: "ahXgIIt8TJC7EL8g5YfByA",
            alt: "lido-logo",
            src: "https://www.datocms-assets.com/105223/1705721384-lido-logo.svg",
        },
        {
            id: "bnPdJ8TlQZeuGLlyOnILJw",
            alt: "dydx-logo",
            src: "https://www.datocms-assets.com/105223/1704912016-dydx.svg",
        },
        {
            id: "CYgcbY1uT6yhOrBInU5lIw",
            alt: "synapse-logo",
            src: "https://www.datocms-assets.com/105223/1704917844-synapse.svg",
        },
    ];

    return (
        <div className="relative w-full overflow-hidden bg-white rounded-sm">
            <Marquee autoFill={true}>
                {logos.map((logo) => (
                    <Image
                        key={`logo-dup-${logo.id}`}
                        alt={logo.alt}
                        width={50}
                        height={50}
                        src={logo.src}
                        // className="h-10 w-fit object-contain lg:max-h-16 lg:min-h-16 text-white"
                        className="h-10 w-full object-contain mx-5"
                    />
                ))}
            </Marquee>
        </div>
    );
};

export default Partners;
