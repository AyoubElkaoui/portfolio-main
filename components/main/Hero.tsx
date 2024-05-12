import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
    return (
        <div className="relative h-full w-full" id="about-me">
            <HeroContent />
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 -mt-24 pb-80 h-full w-full object-cover z-[-1] md:h-screen md:mt-0 md:pb-0"

            >
                <source src="/blackhole.webm" type="video/webm" />
            </video>
        </div>
    );
};

export default Hero;
