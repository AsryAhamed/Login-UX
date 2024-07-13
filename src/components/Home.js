import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import '../styless/Home.css';


function Home() {
    return (
        <div className="home-container">
            <div className="glass-card">
                <h1>Welcome to iCashBook</h1>
                <div className="button-container">
                    <Link to="/register-options" className="glass-button">
                        <FontAwesomeIcon icon={faUserPlus} /> Register
                    </Link>
                    <Link to="/login" className="glass-button">
                        <FontAwesomeIcon icon={faSignInAlt} /> Login
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
