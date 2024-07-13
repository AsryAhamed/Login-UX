import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './src/styless/Register.css';

function BusinessCategoryComponent() {
    const categories = [
        { name: 'Agriculture', icon: 'tractor' },
        { name: 'Construction', icon: 'building' },
        { name: 'Education', icon: 'book' },
        { name: 'Electronics', icon: 'plug' },
        { name: 'Financial Services', icon: 'money-bill' },
        { name: 'Food/Restaurant', icon: 'utensils' },
        { name: 'Clothes/Fashion', icon: 'tshirt' },
        { name: 'Hardware', icon: 'tools' },
        { name: 'Jewellery', icon: 'gem' },
        { name: 'Healthcare & Fitness', icon: 'heartbeat' },
        { name: 'Kirana/Grocery', icon: 'shopping-basket' },
        { name: 'Transport', icon: 'truck' },
        { name: 'Other', icon: 'th' },
    ];

    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const handleNextClick = () => {
        if (selectedCategory) {
            navigate('/business-registration-type');
        } else {
            alert('Please select a business category');
        }
    };

    return (
        <div className="business-category-container">
            <div className="business-category-card">
                <h1>Select Business Category</h1>
                <p>This will help us personalize your app experience</p>
                <div className="categories-grid">
                    {categories.map((category) => (
                        <div
                            key={category.name}
                            className={`category-card ${selectedCategory === category.name ? 'selected' : ''}`}
                            onClick={() => handleCategoryClick(category.name)}
                        >
                            <i className={`fas fa-${category.icon}`}></i>
                            <p>{category.name}</p>
                        </div>
                    ))}
                </div>
                <div className="buttons">
                    <button className="skip-button" onClick={handleNextClick}>Skip</button>
                    <button className="next-button" onClick={handleNextClick}>Next</button>
                </div>
            </div>
        </div>
    );
}

function BusinessRegistrationTypeComponent() {
    const registrationTypes = [
        { name: 'Sole Proprietorship', icon: 'user' },
        { name: 'Partnership', icon: 'handshake' },
        { name: 'Limited Liability Company', icon: 'building' },
        { name: 'Corporation', icon: 'briefcase' },
        { name: 'Nonprofit Organization', icon: 'hands-helping' },
        { name: 'Cooperative', icon: 'users' },
    ];

    const [selectedType, setSelectedType] = useState(null);
    const navigate = useNavigate();

    const handleTypeClick = (type) => {
        setSelectedType(type);
    };

    const handleNextClick = () => {
        if (selectedType) {
            navigate('/business-type');
        } else {
            alert('Please select a business registration type');
        }
    };

    return (
        <div className="registration-type-container">
            <div className="registration-type-card">
                <h1>Select Business Registration Type</h1>
                <p>This will help us personalize your app experience</p>
                <div className="types-grid">
                    {registrationTypes.map((type) => (
                        <div
                            key={type.name}
                            className={`type-card ${selectedType === type.name ? 'selected' : ''}`}
                            onClick={() => handleTypeClick(type.name)}
                        >
                            <i className={`fas fa-${type.icon}`}></i>
                            <p>{type.name}</p>
                        </div>
                    ))}
                </div>
                <div className="buttons">
                    <button className="skip-button" onClick={handleNextClick}>Skip</button>
                    <button className="next-button" onClick={handleNextClick}>Next</button>
                </div>
            </div>
        </div>
    );
}

function BusinessTypeComponent() {
    const businessTypes = [
        { name: 'Retailer', icon: 'cash-register' },
        { name: 'Distributor', icon: 'truck' },
        { name: 'Manufacturer', icon: 'industry' },
        { name: 'Service Provider', icon: 'tools' },
        { name: 'Trader', icon: 'chart-line' },
        { name: 'Other', icon: 'th' },
    ];

    const [selectedType, setSelectedType] = useState(null);
    const navigate = useNavigate();

    const handleTypeClick = (type) => {
        setSelectedType(type);
    };

    const handleNextClick = () => {
        if (selectedType) {
            navigate('/dashboard');
        } else {
            alert('Please select a business type');
        }
    };

    return (
        <div className="business-type-container">
            <div className="business-type-card">
                <h1>Select Business Type</h1>
                <p>This will help us personalize your app experience</p>
                <div className="types-grid">
                    {businessTypes.map((type) => (
                        <div
                            key={type.name}
                            className={`type-card ${selectedType === type.name ? 'selected' : ''}`}
                            onClick={() => handleTypeClick(type.name)}
                        >
                            <i className={`fas fa-${type.icon}`}></i>
                            <p>{type.name}</p>
                        </div>
                    ))}
                </div>
                <div className="buttons">
                    <button className="skip-button" onClick={handleNextClick}>Skip</button>
                    <button className="next-button" onClick={handleNextClick}>Next</button>
                </div>
            </div>
        </div>
    );
}

function DashboardComponent() {
    return (
        <div className="dashboard-container">
            <h1>Welcome to Your Dashboard</h1>
            <p>This is where you can manage your business details and activities.</p>
        </div>
    );
}

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
        alert('OTP sent to ' + contact);
        setIsOtpSent(true);
    };

    const handleVerifyOtp = () => {
        alert('OTP verified: ' + otp);
        navigate('/set-password', { state: { contactType: isEmail ? 'email' : 'phone number' } });
    };

    const handleResendOtp = () => {
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

function SetPasswordComponent() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
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

        alert('Password set successfully!');
        navigate('/user-details');
    };

    return (
        <div className="set-password-container">
            <div className="set-password-card">
                <h1>Set Password</h1>
                <div className="password-input-container">
                    <div className="password-icon">
                        <i className="fas fa-lock"></i>
                    </div>
                    <input
                        type="password"
                        placeholder="New password (minimum 6 characters in length)"
                        value={password}
                        onChange={handlePasswordChange}
                        className="password-input"
                    />
                </div>
                <div className="password-input-container">
                    <div className="password-icon">
                        <i className="fas fa-lock"></i>
                    </div>
                    <input
                        type="password"
                        placeholder="Confirm new password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        className="password-input"
                    />
                </div>
                {error && <p className="error-message">{error}</p>}
                <button 
                    className="reset-password-button" 
                    onClick={handleSetPassword}
                >
                    Set Password
                </button>
            </div>
        </div>
    );
}

function UserDetailsComponent() {
    const [userName, setUserName] = useState('');
    const [businessName, setBusinessName] = useState('');
    const [businessAddress, setBusinessAddress] = useState('');
    const [staffSize, setStaffSize] = useState('');
    const [userType, setUserType] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('User details successfully submitted');
        console.log('Form submitted', {
            userName,
            businessName,
            businessAddress,
            staffSize,
            userType
        });
        navigate('/business-category');
    };

    return (
        <div className="user-details-container">
            <div className="user-details-card">
                <h1>Welcome to CashBook</h1>
                <p>Add your details</p>
                <form onSubmit={handleSubmit}>
                    <label>Your User Name <span className="required">*</span></label>
                    <input
                        type="text"
                        placeholder="User Name"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                    />
                    <label>Business Name</label>
                    <input
                        type="text"
                        placeholder="Business Name"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                    />
                    <label>Business Address</label>
                    <input
                        type="text"
                        placeholder="Business Address"
                        value={businessAddress}
                        onChange={(e) => setBusinessAddress(e.target.value)}
                    />
                    <label>Staff Size</label>
                    <input
                        type="text"
                        placeholder="Staff Size"
                        value={staffSize}
                        onChange={(e) => setStaffSize(e.target.value)}
                    />
                    <label>User Type</label>
                    <input
                        type="text"
                        placeholder="User Type"
                        value={userType}
                        onChange={(e) => setUserType(e.target.value)}
                    />
                    <button type="submit" className="get-started-button">Get Started</button>
                </form>
            </div>
        </div>
    );
}

export {
    BusinessCategoryComponent,
    BusinessRegistrationTypeComponent,
    BusinessTypeComponent,
    DashboardComponent,
    OtpComponent,
    RegisterOptions,
    SetPasswordComponent,
    UserDetailsComponent
};
