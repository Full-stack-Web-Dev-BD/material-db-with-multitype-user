import React, { useState, useEffect } from 'react';
import { animateScroll as scroll, Link } from 'react-scroll';

const Navbar=()=>{
    const [scrollPosition, setSrollPosition] = useState(0);
    const [isToggle, setIsToggle] = useState(false);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setSrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggle=()=>{
        setIsToggle(!isToggle)
    }


    return(
        <nav id="nav" className={`nav ${isToggle? 'open': null} ${scrollPosition>0? 'sticky': null}`}>
            <button className="menu" onClick={toggle}>
                <em className="hamburger"></em>
            </button>
            <div className="brand">
                <Link onClick={()=> scroll.scrollToTop()}>X-Solution</Link>
            </div>
        </nav>
    )
}
export default Navbar;