import { Link } from "react-router-dom";

const Logo = () => {  
    return (
        <Link to="/">   
            <h1 id="logo">
                App<span>Crafters</span>
            </h1>
        </Link>
    )
}

export default Logo