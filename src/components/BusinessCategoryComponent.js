import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styless/BusinessCategoryComponent.css';

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

    const handleSkipClick = () => {
        navigate('/business-registration-type');
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
                    <button className="skip-button" onClick={handleSkipClick}>Skip</button>
                    <button className="next-button" onClick={handleNextClick}>Next</button>
                </div>
            </div>
        </div>
    );
}

export default BusinessCategoryComponent;
