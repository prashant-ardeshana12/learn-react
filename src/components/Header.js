import React from "react";

const Header = () => {


    const [sidebar, setShow] = React.useState();
 
    return (
        <div onClick={() => setShow(!sidebar)}>
            <header>
                <div className="header">
                    <div className="header__inner">
                        <div className="header__logo">
                            <a href="javascript:;">cloudexpat</a>
                        </div>
                        <div className="header__menu">
                            <div className="header__menu-inner">
                                <ul>
                                    <li>
                                        <a href="#services">Services</a>
                                    </li>
                                    <li>
                                        <a href="#partners">Partners</a>
                                    </li>
                                    <li>
                                        <a href="#about">About Us</a>
                                    </li>
                                </ul>
                                <div className="header__menu-btn">
                                    <a className="btn-outline" href="#new">
                                        Get in touch
                                    </a>
                                </div>
                            </div>
                        </div>
                        <button className="toggle-menu" onClick={() => setShow(!sidebar)}>
                            <i className="far fa-bars"></i>
                        </button>
                    </div>
                </div>
            </header>

            <div className={sidebar ? "sidebar active" : "sidebar"}>
                <div className="sidebar__inner">
                    <div className="sidebar__logo">
                        <a href="#">cloudexpat</a>
                    </div>
                    <div className="sidebar__menu">
                        <div>
                            <ul>
                                <ul>
                                    <li>
                                        <a href="#">Services</a>
                                    </li>
                                    <li>
                                        <a href="#">Partners</a>
                                    </li>
                                    <li>
                                        <a href="#">About Us</a>
                                    </li>
                                    <li>
                                        <a href="#">Get in touch</a>
                                    </li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={sidebar ? "close-sidebar active" : "close-sidebar"}></div>
        </div>
    );
};

export default Header;
