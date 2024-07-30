import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../pages/UpcomingEvent.css";
import Footer from "../layouts/Footer";
import styles from "./Works.module.css";

gsap.registerPlugin(ScrollTrigger);

function UpcomingEvent() {
  const containers = useRef([]);

  useEffect(() => {
    containers.current.forEach((container, index) => {
      
      gsap.fromTo(
        container,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: index * 0.5,
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none",
            scrub: 1,
            // markers:true,
          },
        }
      );
    });
  }, []);

  return (
    <>
      <div className="timeline">
        {[...Array(6)].map((_, index) => (
          <div
            className="container"
            ref={(el) => (containers.current[index] = el)}
            key={index}
          >
            <div className="text-box">
              <h2>Event Title {index + 1}</h2>
              <h6>Date</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Veniam, commodi deleniti laboriosam adipisci voluptatum harum
                ipsum voluptatem.
              </p>
              <span></span>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.footer_container}>
        <Footer />
      </div>
    </>
  );
}

export default UpcomingEvent;
