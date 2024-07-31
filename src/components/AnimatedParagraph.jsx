import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger as GSAPScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(GSAPScrollTrigger);

const AnimatedParagraph = ({ text }) => {
    const paragraphRef = useRef(null);

    useEffect(() => {
        const paragraph = paragraphRef.current;
        if (!paragraph) return;

        let clutter = "";
        paragraph.textContent.split("").forEach((char) => {
            clutter += `<span>${char}</span>`;
        });
        paragraph.innerHTML = clutter;

        gsap.to(paragraph.querySelectorAll('span'), {
            scrollTrigger: {
                trigger: paragraph,
                start: "top bottom",
                end: "bottom 55%",
                scrub: 0.5,
                markers: false,
            },
            stagger: 0.02,
            color: "#fff",
        });
    }, [text]);

    return (
        <p ref={paragraphRef} style={{ color: "#dada" }}>
            {text}
        </p>
    );
};

export default AnimatedParagraph;
