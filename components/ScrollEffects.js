"use client";
import { useEffect } from "react";

const ScrollEffects = () => {
  useEffect(() => {
    // Scroll Progress Bar
    const updateScrollProgress = () => {
      const scrollProgress = document.querySelector(".scroll-progress");
      if (scrollProgress) {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        scrollProgress.style.width = `${scrolled}%`;
      }
    };

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    // Observe all elements with scroll animation classes
    const animatedElements = document.querySelectorAll(
      ".scroll-fade-in, .scroll-scale, .scroll-slide-left, .scroll-slide-right, .scroll-rotate, .scroll-blur"
    );
    animatedElements.forEach((el) => observer.observe(el));

    // Parallax effect
    const handleParallax = () => {
      const parallaxElements = document.querySelectorAll(".parallax-element");
      parallaxElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        element.style.transform = `translateY(${rate}px)`;
      });
    };

    // Smooth scroll for anchor links
    const handleSmoothScroll = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target && target.getAttribute("href") !== "#") {
        e.preventDefault();
        const targetId = target.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    // Event listeners
    window.addEventListener("scroll", updateScrollProgress);
    window.addEventListener("scroll", handleParallax);
    document.addEventListener("click", handleSmoothScroll);

    // Initial call
    updateScrollProgress();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("scroll", handleParallax);
      document.removeEventListener("click", handleSmoothScroll);
      observer.disconnect();
    };
  }, []);

  return <div className="scroll-progress" />;
};

export default ScrollEffects;


