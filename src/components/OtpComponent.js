import React, { useState, useEffect } from 'react';
import '../styless/OtpComponent.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function OtpComponent() {
    const [contact, setContact] = useState('');
    const [otp, setOtp] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [isEmail, setIsEmail] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname === '/register-mobile') {
            setIsEmail(false);
        } else {
            setIsEmail(true);
        }
    }, [location.pathname]);

    const handleContactChange = (e) => {
        const value = e.target.value;
        setContact(value);
        if (isEmail) {
            setIsValid(value.includes('@'));
        } else {
            setIsValid(/^[0-9]+$/.test(value));
        }
    };

    const handleOtpChange = (e) => {
        setOtp(e.target.value);
    };

    const handleSendOtp = () => {
        // Logic to send OTP
        alert('OTP sent to ' + contact);
        setIsOtpSent(true);
    };

    const handleVerifyOtp = () => {
        // Logic to verify OTP
        alert('OTP verified: ' + otp);
        navigate('/set-password', { state: { contactType: isEmail ? 'email' : 'phone number' } });
    };

    const handleResendOtp = () => {
        // Logic to resend OTP
        alert('OTP resent to ' + contact);
    };

    return (
        <div className="otp-container">
            <div className="otp-card">
                {!isOtpSent ? (
                    <>
                        <h1>Log In/Create Account</h1>
                        <p>Enter your {isEmail ? 'email address' : 'phone number'}</p>
                        <input
                            type="text"
                            placeholder={isEmail ? 'Enter your email address' : 'Enter your phone number'}
                            value={contact}
                            onChange={handleContactChange}
                            className="input-box"
                        />
                        <button 
                            className="otp-button" 
                            onClick={handleSendOtp} 
                            disabled={!isValid}
                        >
                            Send OTP
                        </button>
                        <p>OR</p>
                        <Link to="/register-options">
                            <button className="other-login-button">
                                Other Ways To Login
                            </button>
                        </Link>
                        <p className="terms">
                            By clicking send OTP, you are indicating that you accept our <Link to="#">Terms of Service</Link> and <Link to="#">Privacy Policy</Link>.
                        </p>
                    </>
                ) : (
                    <>
                        <h1>Verify {isEmail ? 'Email' : 'Phone Number'}</h1>
                        <p>Enter the OTP sent to your {isEmail ? 'email' : 'phone number'}</p>
                        <input
                            type="text"
                            placeholder="Enter OTP"
                            value={otp}
                            onChange={handleOtpChange}
                            className="input-box"
                        />
                        <button 
                            className="otp-button" 
                            onClick={handleVerifyOtp} 
                            disabled={otp.length === 0}
                        >
                            Verify OTP
                        </button>
                        <p className="terms">
                            By continuing, you agree to our <Link to="#">Terms and Policies</Link>.
                        </p>
                        <button 
                            className="resend-otp-button" 
                            onClick={handleResendOtp}
                        >
                            Resend OTP
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

export default OtpComponent;
