import React, { useState } from "react";
import RegisterForm from "../../Common/Forms/RegisterForm/RegisterForm";
import { NavBarNotLogged } from "../../Common/Navs/NavBarNotLogged/NavBarNotLogged.jsx";
import RegisterAbout from "../../Common/About/RegisterAbout.jsx";
import Footer from "../../Common/Footer/Footer.jsx";
import ValidationRegisterCode from "../../Common/ValidationRegisterCode/ValidationRegisterCode.jsx"
import "./Register.css";

export default function Register() {
    const [showModal, setShowModal] = useState(false);
    const [userDataForValidation, setUserDataForValidation] = useState(null);

    const handleShowModal = (userData) => {
        setUserDataForValidation(userData);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setUserDataForValidation(null);
    };

    return (
        <div className="register-page">
            <NavBarNotLogged />
            <main className="register-main">
                <div className="register-grid-container">
                    <div className="register-info-section">
                        <RegisterAbout />
                    </div>
                    <div className="register-form-section">
                        <div className="form-wrapper">
                            <RegisterForm onRegisterSuccess={handleShowModal} />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
            <ValidationRegisterCode
                isOpen={showModal}
                onClose={handleCloseModal}
                userData={userDataForValidation}
            />
        </div>
    );
}