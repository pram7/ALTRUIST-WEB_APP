// import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";


function Navbar() {
    // const [sidebar, setSidebar] = useState(false)
    // const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
            <div className="navbar">
                {/* <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link> */}
            
            
            <nav className='nav-menu'>
                <ul className="nav-menu-items">
                    {/* <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                        <AiIcons.AiOutlineClose/>
                        </Link>
                    </li> */}
                    <Link to="./" className="logoSection">
                        <img className="logo" alt="CompanyLogo" src="./images/logo1.jpg"/>
                    </Link>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            </div>
        </>
    )
}

export default Navbar;
