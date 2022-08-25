import React, { useState } from 'react';
import Header from './Header';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Footer from './Footer';

// import NavTabs from './NavTabs';
// import About from './pages/About';
// import Contact from './pages/Contact';


export default function PortContainer() {

 
    return (
        <>
            <Header />
            <About />
            <Portfolio />
            <Footer />

        </>
    );

}