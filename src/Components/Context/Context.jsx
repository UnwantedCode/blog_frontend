import React, { createContext, useRef } from 'react';

const Context = createContext();

export const ScrollToTopProvider = ({ children }) => {
    const articlesRef = useRef(null);
    const smoothScroll = (targetY, duration) => {
        const startY = window.pageYOffset;
        const difference = targetY - startY;
        let startTime = null;

        const scroll = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            window.scrollTo(0, startY + difference * progress);
            if (timeElapsed < duration) {
                requestAnimationFrame(scroll);
            }
        };

        requestAnimationFrame(scroll);
    };


    const scrollToTop = () => {
        if (articlesRef.current) {
            const topOffset = articlesRef.current.offsetTop;
            smoothScroll(topOffset, 700);
        }
    };

    return (
        <Context.Provider value={{ articlesRef, scrollToTop }}>
            {children}
        </Context.Provider>
    );
};

// Hook do użycia kontekstu w innych komponentach
export const useScrollToTop = () => {
    return React.useContext(Context);
};
