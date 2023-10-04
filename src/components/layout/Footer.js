import { Link } from "react-router-dom"

const Footer = () => {  
    return (
        <footer id="footer">
            <ul>
                <li>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                    <Link to="/terms">Terms of Service</Link>
                </li>
                <li>
                    <Link to="/cookies-policy">Cookies Policy</Link>
                </li>
            </ul>
            <p>&copy; 2023 AppCrafters. All rights reserved.</p>
            <div style={{clear: "both"}} />
        </footer>
    )
}

export default Footer