import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../pages/UpcomingEvent.css";
import Footer from "../layouts/Footer";
import styles from "./Works.module.css";

gsap.registerPlugin(ScrollTrigger);

function UpcomingEvent() {
  const lineRef = useRef(null);
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
            // markers: true,
          },
        }
      );

      gsap.fromTo(
        lineRef.current,
        { height: 0 },
        {
          duration: 1,
          height: "100%",
          scrollTrigger: {
            trigger: ".timeline",
            start: "top 30%",
            end: "bottom bottom",
            scrub: 1,
            // markers: true,
          },
        }
      );
    });
  }, []);

  return (
    <>
      <div className="timeline">
        <div className="timeline-line" ref={lineRef}></div>
        <div className="container" ref={(el) => (containers.current[0] = el)}>
          <div className="text-box">
            <h2>Event Title 1</h2>
            <h6>Date</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam,
              commodi deleniti laboriosam adipisci voluptatum harum ipsum
              voluptatem.
            </p>
            <span></span>
          </div>
        </div>
        <div className="container" ref={(el) => (containers.current[1] = el)}>
          <div className="text-box">
            <h2>Event Title 2</h2>
            <h6>Date</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam,
              commodi deleniti laboriosam adipisci voluptatum harum ipsum
              voluptatem.
            </p>
            <span></span>
          </div>
        </div>
        <div className="container" ref={(el) => (containers.current[2] = el)}>
          <div className="text-box">
            <h2>Event Title 3</h2>
            <h6>Date</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam,
              commodi deleniti laboriosam adipisci voluptatum harum ipsum
              voluptatem.
            </p>
            <span></span>
          </div>
        </div>
        <div className="container" ref={(el) => (containers.current[3] = el)}>
          <div className="text-box">
            <h2>Event Title 4</h2>
            <h6>Date</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam,
              commodi deleniti laboriosam adipisci voluptatum harum ipsum
              voluptatem.
            </p>
            <span></span>
          </div>
        </div>
        <div className="container" ref={(el) => (containers.current[4] = el)}>
          <div className="text-box">
            <h2>Event Title 5</h2>
            <h6>Date</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam,
              commodi deleniti laboriosam adipisci voluptatum harum ipsum
              voluptatem.
            </p>
            <span></span>
          </div>
        </div>
        <div className="container" ref={(el) => (containers.current[5] = el)}>
          <div className="text-box">
            <h2>Event Title 6</h2>
            <h6>Date</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam,
              commodi deleniti laboriosam adipisci voluptatum harum ipsum
              voluptatem.
            </p>
            <span></span>
          </div>
        </div>
      </div>
      <div className={styles.footer_container}>
        <Footer />
      </div>
    </>
  );
}

export default UpcomingEvent;
