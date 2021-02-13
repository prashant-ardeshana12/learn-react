import React from "react";

const Header = () => {
    return (
        <div>
            <header>
                <div className="header">
                    <div className="header__inner">
                        <div className="header__logo">
                            <a href="#">cloudexpat</a>
                        </div>
                        <div className="header__menu">
                            <div className="header__menu-inner">
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
                                </ul>
                                <div className="header__menu-btn">
                                    <a className="btn-outline" href="#">
                                        Get in touch
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="toggle-menu">
                            <i className="far fa-bars"></i>
                        </div>
                    </div>
                </div>
            </header>

            <div className="sidebar">
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
            <div className="close-sidebar"></div>
        </div>
    );
};

export default Header;
