import React from "react";
import "../App.css"; 
const Footer = () => {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} NewsApp. All rights reserved.</p>
            <p>Built with ❤️ using React & NewsData.io API by smitptl</p>
        </footer>
    );
};

export default Footer;
