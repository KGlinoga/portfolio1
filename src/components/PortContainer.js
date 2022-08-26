import React, { useState } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Footer from './Footer';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

export default function PortContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);
    
    return (
        <div className="container-fluid">
            <Header />
            <Navigation
                currentPage={currentPage}
                handlePageChange={handlePageChange} />
            {renderPage()}
            {/* <About />
            <Portfolio />
            <Contact /> */}
            <Footer />

        </div>
    );

}