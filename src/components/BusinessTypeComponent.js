import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styless/BusinessTypeComponent.css';

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

    const handleSkipClick = () => {
        navigate('/dashboard');
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
                    <button className="skip-button" onClick={handleSkipClick}>Skip</button>
                    <button className="next-button" onClick={handleNextClick}>Next</button>
                </div>
            </div>
        </div>
    );
}

export default BusinessTypeComponent;
