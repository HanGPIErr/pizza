import Navbar from "./Navbar";
import Footer from "./Footer";
import React from "react";
import PropTypes from 'prop-types';

const Layout = ({children}) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}
Layout.propTypes = {
    children: PropTypes.node.isRequired,
    };

export default Layout