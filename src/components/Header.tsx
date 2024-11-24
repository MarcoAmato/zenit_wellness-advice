import React from 'react';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header-content">
                <img
                    className="header-logo"
                    src="img/hero-logo.png"
                    alt="Zenit Logo"
                />
                <div className="header-text">
                    <h1 className="header-title">Zenit</h1>
                    <p className="header-punchline">Your Path to Wellness and Balance</p>
                </div>
            </div>
        </header>
    );
};

export default Header;