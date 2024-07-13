import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styless/LoginComponent.css';


function LoginComponent() {
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Simulate an authentication process
        if (identifier === 'user@example.com' && password === 'password123') {
            navigate('/dashboard');
        } else {
            alert('Invalid email or password');
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
                    <label>Email or Phone</label>
                    <input
                        type="text"
                        placeholder="Enter your email or phone"
                        value={identifier}
                        onChange={(e) => setIdentifier(e.target.value)}
                        required
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <div className="remember-forgot-container">
                        <div className="remember-me">
                            <input
                                type="checkbox"
                                id="rememberMe"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            <label htmlFor="rememberMe">Remember Me</label>
                        </div>
                        <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>
                <p className="register-link">
                    Don't have an account? <a href="/register-options">Register here</a>
                </p>
            </div>
        </div>
    );
}

export default LoginComponent;
