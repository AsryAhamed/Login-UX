import React, { useState } from 'react';
import '../styless/SetPasswordComponent.css';
import { useNavigate } from 'react-router-dom';

function SetPasswordComponent() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSetPassword = () => {
        if (password !== confirmPassword) {
            setError('Passwords do not match!');
            return;
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters long!');
            return;
        }

        // Logic to set the password
        alert('Password set successfully!');
        navigate('/user-details');
    };

    return (
        <div className="set-password-container">
            <div className="set-password-card">
                <h1>Set Password</h1>
                <div className="password-input-container">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password (minimum 6 characters in length)"
                        value={password}
                        onChange={handlePasswordChange}
                        className="password-input"
                    />
                    <span
                        className="password-toggle-icon"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                    </span>
                </div>
                <div className="password-input-container">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Confirm password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        className="password-input"
                    />
                    <span
                        className="password-toggle-icon"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                    </span>
                </div>
                {error && <p className="error-message">{error}</p>}
                <button 
                    className="reset-password-button" 
                    onClick={handleSetPassword}
                    disabled={!password || !confirmPassword || password !== confirmPassword}
                >
                    Set Password
                </button>
            </div>
        </div>
    );
}

export default SetPasswordComponent;
