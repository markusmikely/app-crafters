import Header from "./Header"
import Footer from "./Footer"
import { useLocation } from "react-router";
import React from "react";

const Layout = ({ children }) => {
    const location = useLocation()
    
    React.useEffect(() => {
        window.scrollTo(0,0)
    }, [location])
    
    return (
        <div id="layout">
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout