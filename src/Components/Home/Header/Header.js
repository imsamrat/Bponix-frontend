import React from 'react';
import Banner from '../Banner/Banner';
import MiddleInner from '../MiddleInner/MiddleInner';
import Navbar from '../Navbar/Navbar';
import Preloader from '../Preloader/Preloader';
import SmallBanner from '../SmallBanner/SmallBanner';
import Topbar from '../Topbar/Topbar';

const Header = () => {
    return (
        <div>
            {/* <Preloader></Preloader> */}
            <header className="header shop">
                <Topbar></Topbar>
                <MiddleInner></MiddleInner>
                <Navbar></Navbar>
            </header>
            <section className="hero-slider">
                <Banner></Banner>
            </section>
            <section className="small-banner section">
                <SmallBanner></SmallBanner>
            </section>
        </div>
    );
};

export default Header;