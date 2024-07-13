import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import RegisterOptions from './components/RegisterOptions';
import OtpComponent from './components/OtpComponent';
import SetPasswordComponent from './components/SetPasswordComponent';
import UserDetailsComponent from './components/UserDetailsComponent';
import BusinessCategoryComponent from './components/BusinessCategoryComponent';
import BusinessRegistrationTypeComponent from './components/BusinessRegistrationTypeComponent';
import BusinessTypeComponent from './components/BusinessTypeComponent';
import DashboardComponent from './components/DashboardComponent';
import LoginComponent from './components/LoginComponent';
import ForgotPasswordComponent from './components/ForgotPasswordComponent';
import './styles.css';

function App() {
    return (
        <Router>
            <div className="app-container">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/register-options" element={<RegisterOptions />} />
                    <Route path="/register-email" element={<OtpComponent />} />
                    <Route path="/register-mobile" element={<OtpComponent />} />
                    <Route path="/set-password" element={<SetPasswordComponent />} />
                    <Route path="/user-details" element={<UserDetailsComponent />} />
                    <Route path="/business-category" element={<BusinessCategoryComponent />} />
                    <Route path="/business-registration-type" element={<BusinessRegistrationTypeComponent />} />
                    <Route path="/business-type" element={<BusinessTypeComponent />} />
                    <Route path="/dashboard" element={<DashboardComponent />} />
                    <Route path="/login" element={<LoginComponent />} />
                    <Route path="/forgot-password" element={<ForgotPasswordComponent />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
