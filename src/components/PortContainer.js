import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import NavTabs from './NavTabs';
import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';


export default function PortContainer() {
    const [currentPage, setCurrentPage] = useState('Home');
 
    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        return;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <>
            <Header />
            <NavTabs currentPage={currentPage}
                handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />

        </>
    );

    // const [currentPage, setCurrentPage] = useState('Home');
    // const renderPage = () => {
    //     if (currentPage === 'Home') {
    //         return <Home />;
    //     }
    //     if (currentPage === 'About') {
    //         return <About />;
    //     }
    //     if (currentPage === 'Project') {
    //         return <Project />;
    //     }
    //     return 
    // };
}