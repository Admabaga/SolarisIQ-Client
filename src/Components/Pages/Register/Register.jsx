import RegisterForm from "../../Common/Forms/RegisterForm/RegisterForm";
import { NavBarNotLogged } from "../../Common/Navs/NavBarNotLogged.jsx";
import RegisterAbout from "../../Common/About/RegisterAbout.jsx";
import Footer from "../../Common/Footer/Footer.jsx";
import "./Register.css";

export default function Register() {
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
                            <RegisterForm />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}