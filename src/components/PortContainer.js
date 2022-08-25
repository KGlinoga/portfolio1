import React, { useState } from 'react';
import Header from './Header';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Footer from './Footer';
import Contact from './pages/Contact';

// import NavTabs from './NavTabs';
// import About from './pages/About';


export default function PortContainer() {

 
    return (
        <>
            <Header />
            <About />
            <Portfolio />
            <Contact />
            <Footer />

        </>
    );

}