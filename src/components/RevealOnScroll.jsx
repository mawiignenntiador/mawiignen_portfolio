import { useRef, useEffect } from "react";

export const RevealOnScroll = ({ children }) => {
    const ref = useRef(null); 

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    ref.current.classList.add("visible");
                }
            });
        }, 
        { threshold: 0.2, rootMargin: "0px 0px -50px 0px" });

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
            observer.disconnect();
        };
    }, []); // Empty dependency array to run only once on mount

    return (
        <div ref={ref} className="reveal">
            {children}
        </div>
    );
};