import { Link } from "react-router-dom";

const Menu = () => {  
    const menuItems = [
        { title: "Teaching", link: "/#teaching" },
        { title: "Recruitment", link: "/#recrutment" },
        { title: "Software Development", link: "/#software-development" },
        { title: "Blog", link: "/blog" },
        { title: "Contact", link: "/#contact-us" }
    ]
    return (
        <nav>
            <ul id="main-menu">
                {menuItems.map((menuItem, menuItemIndex) => {
                    return <li key={menuItemIndex}><a href={menuItem.link}>{menuItem.title}</a></li>
                })}
            </ul>
        </nav>
    )
}

export default Menu