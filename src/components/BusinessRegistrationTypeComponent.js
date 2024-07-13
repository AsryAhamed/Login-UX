import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styless/BusinessRegistrationTypeComponent.css';

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

    const handleSkipClick = () => {
        navigate('/business-type');
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
                    <button className="skip-button" onClick={handleSkipClick}>Skip</button>
                    <button className="next-button" onClick={handleNextClick}>Next</button>
                </div>
            </div>
        </div>
    );
}

export default BusinessRegistrationTypeComponent;
