import React from 'react';
import { Link } from 'react-router-dom';
import '../styless/RegisterOptions.css';


function RegisterOptions() {
    return (
        <div className="register-options-container">
            <div className="register-options-card">
                <h1>Log In/Create Account</h1>
                <p>Choose one option to continue</p>
                <div className="button-container">
                    <Link to="/register-mobile" className="google-button">
                        <i className="fas fa-mobile-alt"></i> Continue With Mobile
                    </Link>
                    <Link to="/register-email" className="email-button">
                        <i className="fas fa-envelope"></i> Continue With Email
                    </Link>
                </div>
                <p className="terms">
                    By continuing, you are indicating that you accept our <Link to="#">Terms of Service</Link> and <Link to="#">Privacy Policy</Link>.
                </p>
            </div>
        </div>
    );
}

export default RegisterOptions;
