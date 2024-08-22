"use client"
import React, { useEffect, useRef } from "react";
// import logo from '/images/header-logo.png';

const Webguruzwe = () => {
  const container = useRef(null);
  const stickyMask = useRef(null);

  const initialMaskSize = 0.4;
  const targetMaskSize = 50;
  const easing = 0.03;
  let easedScrollProgress = 0;

  useEffect(() => {
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    const maskSizeProgress = targetMaskSize * getScrollProgress();
    stickyMask.current.style.webkitMaskSize =
      (initialMaskSize + maskSizeProgress) * 100 + "%";
    requestAnimationFrame(animate);
  };

  const getScrollProgress = () => {
    const scrollProgress =
      stickyMask.current.offsetTop /
      (container.current.getBoundingClientRect().height - window.innerHeight);
    const delta = scrollProgress - easedScrollProgress;
    easedScrollProgress += delta * easing;
    return easedScrollProgress;
  };

  return (
    <main>
      <div ref={container} className="mask-container">
        <div ref={stickyMask} className="stickyMask">
          <video autoPlay muted loop>
            <source src="/video/baner-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </main>
  );
};

export default Webguruzwe;
