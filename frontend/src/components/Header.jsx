import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
    const [mobile, setMobile] = useState(false);
    const [sidebar, setSidebar] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 1065) {
          setMobile(true);
        }
      }, []);
    
      useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth < 1065) {
            setMobile(true);
          } else {
            setMobile(false);
            setSidebar(false);
          }
        };
    
        window.addEventListener("resize", handleResize);
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

    return (
        <>    
            <nav className="navbar">
                <Link to="/" onClick={() => setSidebar(false)}>Recipe App</Link>
                {!mobile && (
                    <ul className="nav-items">
                        <Link to="/"><span>Home</span></Link>
                        <Link to="/add-recipe"><span>Add Recipe</span></Link>
                    </ul>
                )}
                {mobile && (
                    <div className="sidebar-toggle">
                        {sidebar ? (
                        <CloseIcon
                            className="sidebar-toggle-logo"
                            onClick={() => setSidebar(!sidebar)}
                        />
                        ) : (
                        <FormatListBulletedIcon
                            className="sidebar-toggle-logo"
                            onClick={() => setSidebar(!sidebar)}
                        />
                        )}
                    </div>
                 )}
            </nav>
            <div className={sidebar ? "sidebar active": "sidebar"}>
                <ul className="sidebar-items">
                    <Link to="/" onClick={() => setSidebar(false)}>
                        <span>Home</span>
                    </Link>
                    <Link to="/add-recipe" onClick={() => setSidebar(false)}>
                        <span>Add Recipe</span>
                    </Link>
                </ul>
            </div>
        </>
    );
}

export default Header;