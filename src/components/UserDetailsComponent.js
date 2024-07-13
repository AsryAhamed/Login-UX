import React, { useState } from 'react';
import '../styless/UserDetailsComponent.css';
import { useNavigate } from 'react-router-dom';

function UserDetailsComponent() {
    const [businessName, setBusinessName] = useState('');
    const [businessAddress, setBusinessAddress] = useState('');
    const [staffSize, setStaffSize] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to handle form submission
        alert('User details successfully submitted');
        console.log('Form submitted', {
            businessName,
            businessAddress,
            staffSize
        });
        navigate('/business-category');
    };

    const handleSkip = () => {
        navigate('/business-category');
    };

    return (
        <div className="user-details-container">
            <div className="user-details-card">
                <h1>Welcome to CashBook</h1>
                <p>Add your details</p>
                <form onSubmit={handleSubmit}>
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
                    <div className="button-container">
                        <button type="submit" className="next-button">Next</button>
                        <button type="button" className="skip-button" onClick={handleSkip}>Skip</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UserDetailsComponent;
