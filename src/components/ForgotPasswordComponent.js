import React, { useState } from 'react';
import '../styless/ForgotPasswordComponent.css';


function ForgotPasswordComponent() {
    const [email, setEmail] = useState('');

    const handleReset = (e) => {
        e.preventDefault();
        // Simulate a password reset process
        alert('Password reset link sent to your email');
    };

    return (
        <div className="forgot-password-container">
            <div className="forgot-password-card">
                <h1>Forgot Password</h1>
                <form onSubmit={handleReset}>
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit" className="reset-button">Send Reset Link</button>
                </form>
            </div>
        </div>
    );
}

export default ForgotPasswordComponent;
