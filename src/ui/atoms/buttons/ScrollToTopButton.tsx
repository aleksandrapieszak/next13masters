// 'use client'
// import React, { useState, useEffect } from 'react';
//
// function ScrollToTopButton() {
//     const [isVisible, setIsVisible] = useState(false);
//
//     // Pokaż przycisk, gdy użytkownik przewinie niżej 100px
//     const toggleVisibility = () => {
//         if (window.pageYOffset > 100) {
//             setIsVisible(true);
//         } else {
//             setIsVisible(false);
//         }
//     };
//
//     // Ustaw przewijanie do góry
//     const scrollToTop = () => {
//         window.scrollTo({
//             top: 0,
//             behavior: 'smooth'
//         });
//     };
//
//     useEffect(() => {
//         window.addEventListener('scroll', toggleVisibility);
//         return () => window.removeEventListener('scroll', toggleVisibility);
//     }, []);
//
//     return (
//         <div className="scroll-to-top">
//             {isVisible && (
//                 <button onClick={scrollToTop} className="scroll-btn">
//                     {/* Możesz tutaj użyć własnego obrazka, ikony lub tekstu */}
//                     ^
//                 </button>
//             )}
//         </div>
//     );
// }
//
// export default ScrollToTopButton;
'use client'
import { useEffect, useState } from 'react';

export const ScrollToTopButton =()=>{
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 20) {
            setVisible(true);
        } else if (scrolled <= 20) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
        return () => window.removeEventListener('scroll', toggleVisible);
    }, []);

    return (
        <button
            onClick={scrollToTop}
            className={`fixed right-5 bottom-5 h-12 w-12 bg-gray-500 text-white text-center text-2xl rounded-full z-50 ${
                !visible && 'hidden'
            }`}
        >
            ^
                    </button>
    );
};

